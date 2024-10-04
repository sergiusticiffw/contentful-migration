module.exports = function (migration) {
  // create new content type
  const siteBuildingContact = migration
    .createContentType('locationSiteBuildingContact')
    .name('📄 Site/Building Contact')
    .description('');

  // add field
  siteBuildingContact.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
      {
        size: {
          min: null,
          max: 255,
        }
      },
    ],
  });
  siteBuildingContact.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter an admin title for this address.',
  });

  // add entry title
  siteBuildingContact.displayField('adminTitle');

  // add field
  siteBuildingContact.createField('address1', {
    name: 'Address Line 1',
    type: 'Symbol',
    required: true,
  });
  siteBuildingContact.changeFieldControl('address1', 'builtin', 'singleLine', {
    helpText:
      'e.g. 123 Main St.',
  });

  // add field
  siteBuildingContact.createField('city', {
    name: 'City',
    type: 'Symbol',
    required: true,
  });
  siteBuildingContact.changeFieldControl('city', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('state', {
    name: 'State',
    type: 'Symbol',
    required: true,
  });
  siteBuildingContact.changeFieldControl('state', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('zip', {
    name: 'ZIP Code',
    type: 'Symbol',
    required: true,
  });
  siteBuildingContact.changeFieldControl('zip', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('phone', {
    name: 'Phone Number',
    type: 'Symbol',
    required: true,
    validations: [{
      regexp: { pattern: "^\\d[ -.]?\\(?\\d\\d\\d\\)?[ -.]?\\d\\d\\d[ -.]?\\d\\d\\d\\d$", flags: null }
    }]
  });
  siteBuildingContact.changeFieldControl('phone', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('fax', {
    name: 'Fax Number',
    type: 'Symbol',
    required: false,
    validations: [{
      regexp: { pattern: "^\\d[ -.]?\\(?\\d\\d\\d\\)?[ -.]?\\d\\d\\d[ -.]?\\d\\d\\d\\d$", flags: null }
    }]
  });
  siteBuildingContact.changeFieldControl('fax', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('latitude', {
    name: 'Latitude',
    type: 'Symbol',
    required: false,
  });
  siteBuildingContact.changeFieldControl('latitude', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('longitude', {
    name: 'Longitude',
    type: 'Symbol',
    required: false,
  });
  siteBuildingContact.changeFieldControl('longitude', 'builtin', 'singleLine');

  // add field
  siteBuildingContact.createField('mapLink', {
    name: 'Google Maps Link',
    type: 'Symbol',
    required: false,
  });
  siteBuildingContact.changeFieldControl('mapLink', 'builtin', 'urlEditor', {
    helpText: 'Enter the Google Maps link for this location.',
  });

  // add field
  siteBuildingContact.createField('yextID', {
    name: 'Yext ID',
    type: 'Symbol',
    required: false,
    validations: [
      {
        size: {
          min: null,
          max: 255,
        }
      }
    ]
  });
  siteBuildingContact.changeFieldControl('yextID', 'builtin', 'singleLine', {
    helpText:
      'Enter the Yext ID for this item.',
  });
};
