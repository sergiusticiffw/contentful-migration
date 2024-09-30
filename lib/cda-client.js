#!/usr/bin/env node

const contentful = require('contentful');

module.exports = async function getClient({ spaceId, environmentId }) {
  return contentful.createClient({
    space: spaceId,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN, // Make sure to use preview tokens to find/discover unpublished content.
    environment: environmentId,
    host: 'preview.contentful.com',
  });
};
