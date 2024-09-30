module.exports = async function getEntries({
  client,
  content_type,
  select,
  take,
  include,
  locale = 'en-US',
  additionalQuery = {},
}) {
  const data = [];
  let total = 0;
  let skip = 0;
  do {
    const response = await client.getEntries({
      content_type,
      select,
      limit: take,
      include,
      skip,
      locale,
      ...additionalQuery,
    });
    total = response?.total;
    skip += take;

    data.push(...(response?.items ?? []));
  } while (skip < total);
  return data;
};
