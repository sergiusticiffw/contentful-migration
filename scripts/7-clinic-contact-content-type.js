module.exports = function (migration) {
  // create new content type
  const clinicContact = migration
    .createContentType('clinicContact')
    .name('Clinic Contact')
    .description('');

  // add field
  clinicContact.createField('adminTitle', {
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
      }
    ],
  });
  clinicContact.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter a unique ID for this content.',
  });

  // add field
  clinicContact.createField('address2', {
    name: 'Address Line 2',
    type: 'Symbol',
    required: false,
  });
  clinicContact.changeFieldControl('address2', 'builtin', 'singleLine', {
    helpText:
      'For CH operated locations, this will usually be formatted as "Suite 123." Custom locations might have alt formats such as "2nd Floor."',
  });

  // add field
  clinicContact.createField('phone', {
    name: 'Phone Number',
    type: 'Symbol',
    required: true,
    validations: [{
      regexp: { pattern: "^\\d[ -.]?\\(?\\d\\d\\d\\)?[ -.]?\\d\\d\\d[ -.]?\\d\\d\\d\\d$", flags: null }
    }]
  });
  clinicContact.changeFieldControl('phone', 'builtin', 'singleLine');

  // add field
  clinicContact.createField('fax', {
    name: 'Fax Number',
    type: 'Symbol',
    required: false,
    validations: [{
      regexp: { pattern: "^\\d[ -.]?\\(?\\d\\d\\d\\)?[ -.]?\\d\\d\\d[ -.]?\\d\\d\\d\\d$", flags: null }
    }]
  });
  clinicContact.changeFieldControl('fax', 'builtin', 'singleLine');

  // add field
  clinicContact.createField('email', {
    name: 'Email Address',
    type: 'Symbol',
    required: false,
    validations: [{
      regexp: { pattern: "^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$", flags: null }
    }]
  });
  clinicContact.changeFieldControl('email', 'builtin', 'singleLine', {
    helpText:
      'Enter clinic\'s email address, if available',
  });

  // add field
  clinicContact.createField('latitude', {
    name: 'Latitude',
    type: 'Symbol',
    required: false,
  });
  clinicContact.changeFieldControl('latitude', 'builtin', 'singleLine');

  // add field
  clinicContact.createField('longitude', {
    name: 'Longitude',
    type: 'Symbol',
    required: false,
  });
  clinicContact.changeFieldControl('longitude', 'builtin', 'singleLine');

  // add field
  clinicContact.createField('mapLink', {
    name: 'Google Maps Link',
    type: 'Symbol',
    required: true,
  });
  clinicContact.changeFieldControl('mapLink', 'builtin', 'urlEditor', {
    helpText: 'Enter the Google Maps link for this location. If there isn\'t a clinic-level link, provide the link for the site/building.',
  });
};
