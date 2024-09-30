module.exports = function (migration) {
  // create new content type
  const test = migration
    .createContentType('test')
    .name('♟️ Test');

  test.createField('adminTitle', {
    name: 'Admin Title',
    type: 'Symbol',
    required: false,
    validations: [
      {
        unique: true,
      },
    ],
  });
};
