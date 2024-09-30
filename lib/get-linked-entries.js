module.exports = async function getLinkedEntries({ client, id, locale }) {
  const response = await client.getEntries({
    links_to_entry: id,
    locale: locale,
  });
  return response?.items ?? [];
};
