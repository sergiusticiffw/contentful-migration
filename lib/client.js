const contentfulManagement = require('contentful-management');

module.exports = async function getClient({
  accessToken,
  spaceId,
  environmentId,
}) {
  const client = contentfulManagement.createClient({
    accessToken,
  });

  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);

  return environment;
};
