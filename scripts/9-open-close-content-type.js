module.exports = function (migration) {
  // create new content type
  const openClose = migration
    .createContentType('openClose')
    .name('Open/Close')
    .description('');

  // add field
  openClose.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        size: {
          min: null,
          max: 255,
        }
      }
    ]
  });
  openClose.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText: 'Enter a unique ID for this content.',
  });

  // add entry title
  openClose.displayField('adminTitle');

  // add field
  openClose.createField('open', {
    name: 'Open',
    type: 'Symbol',
    required: false,
    validations: [{
      regexp: { pattern: "^(0?[1-9]|1[012]):[0-5][0-9](:[0-5][0-9])?\\s*[aApP][mM]$", flags: null }
    }]
  });
  openClose.changeFieldControl('open', 'builtin', 'singleLine', {
    helpText: 'Enter a time followed by AM or PM.',
  });

  // add field
  openClose.createField('close', {
    name: 'Close',
    type: 'Symbol',
    required: false,
    validations: [{
      regexp: { pattern: "^(0?[1-9]|1[012]):[0-5][0-9](:[0-5][0-9])?\\s*[aApP][mM]$", flags: null }
    }]
  });
  openClose.changeFieldControl('close', 'builtin', 'singleLine', {
    helpText: 'Enter a time followed by AM or PM',
  });

  // add field
  openClose.createField('alwaysOpen', {
    name: 'Always Open',
    type: 'Boolean',
    required: false,
    defaultValue: {
      'en-US': false,
    },
  });
  openClose.changeFieldControl('alwaysOpen', 'builtin', 'boolean', {
    helpText: 'Select yes if the location is "always open" (open 24 hours). Leave the above fields empty.'
  });
};
