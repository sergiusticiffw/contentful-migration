#!/usr/bin/env node
const { getArguments } = require('./lib/utils.js');

(async () => {
  try {
    const { promisify } = require('util');
    const { readdir } = require('fs');
    const readdirAsync = promisify(readdir);
    const path = require('path');
    const { createClient } = require('contentful-management');
    const {
      default: runMigration,
    } = require('contentful-migration/built/bin/cli');

    // utility fns
    const getVersionOfFile = (file) => file.match(/^(\d+).*\.js$/)[1];

    const { environmentName, spaceId, accessToken } = getArguments();

    const client = createClient({
      accessToken: accessToken,
    });
    const space = await client.getSpace(spaceId);
    let environment;
    try {
      environment = await space.getEnvironment(environmentName);
    } catch (e) {
      console.log('Environment not found');
    }

    const MIGRATIONS_DIR = path.join(__dirname, '/scripts');

    console.log('Running with the following configuration');
    console.log(`spaceId: ${spaceId}`);

    // ---------------------------------------------------------------------------
    console.log('Set default locale to new environment');
    const defaultLocale = (await environment.getLocales()).items.find(
      (locale) => locale.default
    ).code;

    // ---------------------------------------------------------------------------
    console.log('Read all the available migrations from the file system');
    const availableMigrations = (await readdirAsync(MIGRATIONS_DIR))
      .filter((file) => /^\d+.*\.js$/.test(file))
      .sort(function (a, b) {
        return parseInt(getVersionOfFile(a)) - parseInt(getVersionOfFile(b));
      });
    // ---------------------------------------------------------------------------
    console.log('Figure out latest ran migration of the contentful space');
    const { items: versions } = await environment.getEntries({
      content_type: 'versionTracking',
    });

    if (versions.length > 1) {
      throw new Error(
        "There should only be one entry of type 'versionTracking'"
      );
    }

    let storedVersionEntry = versions[0];
    const currentVersionString =
      storedVersionEntry?.fields?.version?.[defaultLocale];

    console.log('Evaluate which migrations to run');
    let migrationsToRun = availableMigrations;
    if (currentVersionString !== undefined) {
      const currentMigrationIndex =
        availableMigrations.indexOf(currentVersionString);

      if (currentMigrationIndex === -1) {
        throw new Error(
          `Version ${currentVersionString} is not matching with any known migration`
        );
      }
      migrationsToRun = availableMigrations.slice(currentMigrationIndex + 1);
    } else {
      migrationsToRun = availableMigrations;
    }
    // ---------------------------------------------------------------------------
    const migrationOptions = {
      spaceId: spaceId,
      environmentId: environmentName,
      accessToken: accessToken,
      yes: true,
    };

    // ---------------------------------------------------------------------------
    console.log('Run migrations');
    let migrationToRun;
    while ((migrationToRun = migrationsToRun.shift())) {
      const filePath = path.join(MIGRATIONS_DIR, `${migrationToRun}`);
      console.log(`Running ${filePath}`);
      await runMigration(
        Object.assign(migrationOptions, {
          filePath,
        })
      );
      console.log(`${migrationToRun} succeeded`);

      if (storedVersionEntry) {
        storedVersionEntry.fields.version =
          storedVersionEntry.fields.version || {};
        storedVersionEntry.fields.version[defaultLocale] = migrationToRun;
      } else {
        storedVersionEntry = await environment.createEntry('versionTracking', {
          fields: {
            version: {
              'en-US': migrationToRun,
            },
          },
        });
      }
      storedVersionEntry = await storedVersionEntry.update();
      storedVersionEntry = await storedVersionEntry.publish();

      console.log(`Updated version entry to ${migrationToRun}`);
    }

    // ---------------------------------------------------------------------------
    console.log('All done!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
