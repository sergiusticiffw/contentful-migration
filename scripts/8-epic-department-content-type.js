module.exports = function (migration) {
  // create new content type
  const epicDepartment = migration
    .createContentType('locationEpicDepartment')
    .name('📄 Epic Department')
    .description('');

  // add field
  epicDepartment.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  epicDepartment.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter an admin title for this address.',
  });

  // add entry title
  epicDepartment.displayField('adminTitle');

  // add field
  epicDepartment.createField('departmentID', {
    name: 'Department ID',
    type: 'Symbol',
    required: false,
  });
  epicDepartment.changeFieldControl('departmentID', 'builtin', 'singleLine');

  // add field
  epicDepartment.createField('departmentName', {
    name: 'Department Name',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['departmentAndProgram'] }],
  });
  epicDepartment.changeFieldControl('departmentName', 'builtin', 'entryLinkEditor');

  // add field
  epicDepartment.createField('departmentAbbreviation', {
    name: 'Department Abbreviation',
    type: 'Symbol',
    required: false,
  });
  epicDepartment.changeFieldControl('departmentAbbreviation', 'builtin', 'singleLine');

  // add field
  epicDepartment.createField('locationName', {
    name: 'Location Name',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['locationClinic'] }],
  });
  epicDepartment.changeFieldControl('locationName', 'builtin', 'entryLinkEditor');

  // add field
  epicDepartment.createField('physicalLocation', {
    name: 'Physical Location',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['locationClinicContact'] }],
  });
  epicDepartment.changeFieldControl('physicalLocation', 'builtin', 'entryLinkEditor');

  // add field
  epicDepartment.createField('specialty', {
    name: 'Specialty',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['specialty'] }],
  });
  epicDepartment.changeFieldControl('specialty', 'builtin', 'entryLinkEditor');

  // add field
  epicDepartment.createField('specialtyID', {
    name: 'Specialty ID',
    type: 'Symbol',
    required: false,
  });
  epicDepartment.changeFieldControl('specialtyID', 'builtin', 'singleLine');

  // add field
  epicDepartment.createField('inpatientDepartment', {
    name: 'Inpatient Department',
    type: 'Boolean',
    required: false,
  });
  epicDepartment.changeFieldControl('inpatientDepartment', 'builtin', 'boolean');

  // add field
  epicDepartment.createField('epicCareDepartment', {
    name: 'Epic Care Department',
    type: 'Boolean',
    required: false,
  });
  epicDepartment.changeFieldControl('epicCareDepartment', 'builtin', 'boolean');

  // add field
  epicDepartment.createField('dateUpdated', {
    name: 'Date Updated',
    type: 'Date',
    required: false,
  });
  epicDepartment.changeFieldControl('dateUpdated', 'builtin', 'datePicker', {
    ampm: '12',
    format: 'time',
  });

  // add field
  epicDepartment.createField('importFromEpic', {
    name: 'Import from Epic',
    type: 'Boolean',
    required: false,
    defaultValue: {
      'en-US': true,
    },
  });
  epicDepartment.changeFieldControl('importFromEpic', 'builtin', 'boolean');
};
