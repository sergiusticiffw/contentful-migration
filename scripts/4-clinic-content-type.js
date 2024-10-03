module.exports = function (migration) {
  // create new content type
  const clinic = migration
    .createContentType('locationClinic')
    .name('Clinic')
    .description('');

  // add field
  clinic.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  clinic.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter an admin title for this address.',
  });

  // add entry title
  clinic.displayField('adminTitle');

  // add field
  clinic.createField('clinicName', {
    name: 'Clinic Name',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  clinic.changeFieldControl('clinicName', 'builtin', 'singleLine', {
    helpText:
      'Enter the title of this item; should be the friendly name. ex: Orthopedics & Sports Medicine Plano.',
  });

  // add field
  clinic.createField('clinicOfficialName', {
    name: 'Clinic Official Name',
    type: 'Symbol',
    required: false,
  });
  clinic.changeFieldControl('clinicOfficialName', 'builtin', 'singleLine', {
    helpText:
      'Full official name of clinic. ex: Children’s Health℠ Andrews Institute for Orthopaedics & Sports Medicine Plano.',
  });

  // add field
  clinic.createField('clinicShortName', {
    name: 'Clinic Short Name',
    type: 'Symbol',
    required: false,
  });
  clinic.changeFieldControl('clinicShortName', 'builtin', 'singleLine', {
    helpText:
      'Short name to be used on mobile app, ex: Andrews Plano.',
  });

  // add field
  clinic.createField('summary', {
    name: 'Summary',
    type: 'Text',
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
  clinic.changeFieldControl('summary', 'builtin', 'multipleLine', {
    helpText: 'Enter the summary of this location.',
  });

  // add field
  clinic.createField('valueProposition', {
    name: 'Value Proposition',
    type: 'Text',
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
  clinic.changeFieldControl('valueProposition', 'builtin', 'multipleLine', {
    helpText: 'Enter the value proposition of this location.',
  });

  // add field
  clinic.createField('ownershipType', {
    name: 'Ownership Type',
    type: 'Symbol',
    required: false,
    validations: [
      {
        in: [
          'CHST - Childrens Hospital System',
          "CHBA - Practice owned by Children's Health",
          "UTSW - Practice not operated by Children's Health",
          "MOB - Practice not operated by Children's Health",
          "Parkland Health - Practice not operated by Children's Health",
          "Scotish Rite Children's - Practice not operated by Children's Health",
          "NOCH - Practice not operated by Children's Health"
        ],
      },
    ],
  });
  clinic.changeFieldControl('ownershipType', 'builtin', 'dropdown', {
    helpText:
      'Choose how this clinic is operated.',
  });

  // add field
  clinic.createField('openHours', {
    name: 'Open Hours',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['locationOpenHours'] }],
  });
  clinic.changeFieldControl('openHours', 'builtin', 'entryLinkEditor', {
    helpText: 'Enter the open hours for this clinic.',
  });

  // add field
  clinic.createField('afterHours', {
    name: 'After Hours Available',
    type: 'Boolean',
    required: false,
    defaultValue: {
      'en-US': false,
    },
  });
  clinic.changeFieldControl('afterHours', 'builtin', 'boolean', {
    helpText:
      'Select whether after hours care is available at this clinic. For now this may not display to users.',
  });

  // add field
  clinic.createField('building', {
    name: 'Building',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'locationBuilding',
          ],
        },
      ],
    },
  });
  clinic.changeFieldControl('building', 'builtin', 'entryCardsEditor', {
    helpText: 'Multiple references only to be used for moving cutovers. Every clinic has one building.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('clinicContact', {
    name: 'Clinic Contact',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [],
    },
  });
  clinic.changeFieldControl('clinicContact', 'builtin', 'entryCardsEditor', {
    helpText: 'Add contact details for this clinic. If preparing for a move, you can select multiple (e.g. current and upcoming) and manage the cutover via publish/unpublish scheduling in the Clinic Contact entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('epicDepartment', {
    name: 'Epic Department',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['locationEpicDepartment'] }],
  });
  clinic.changeFieldControl('epicDepartment', 'builtin', 'entryLinkEditor', {
    helpText: 'Select the Epic Department for this item.',
  });

  // add field
  clinic.createField('raaSpecialty', {
    name: 'RAA Specialty',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ["specialtyRequestAnAppointment"],
        },
      ],
    },
  });
  clinic.changeFieldControl('raaSpecialty', 'builtin', 'entryLinksEditor', {
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('yextID', {
    name: 'Yext ID',
    type: 'Symbol',
    required: false,
  });
  clinic.changeFieldControl('yextID', 'builtin', 'singleLine', {
    helpText:
      'Enter the Yext ID for this item.',
  });

  // add field
  clinic.createField('gozioClinicID', {
    name: 'Gozio Clinic ID',
    type: 'Symbol',
    required: false,
  });
  clinic.changeFieldControl('gozioClinicID', 'builtin', 'singleLine', {
    helpText:
      'Enter the Gozio ID that matches this item.',
  });

  // add field
  clinic.createField('gozioJSON', {
    name: 'Gozio JSON',
    type: 'Object',
    required: false,
  });
  clinic.changeFieldControl('gozioJSON', 'builtin', 'objectEditor', {
    helpText:
      'Insert the Gozio JSON file for this item.',
  });

  // add field
  clinic.createField('relatedConditions', {
    name: 'Related Conditions',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['condition'],
        },
      ],
    },
  });
  clinic.changeFieldControl('relatedConditions', 'builtin', 'entryLinksEditor', {
    helpText: 'Select the list of related conditions.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('relatedTreatments', {
    name: 'Related Treatments',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['treatment'],
        },
      ],
    },
  });
  clinic.changeFieldControl('relatedTreatments', 'builtin', 'entryLinksEditor', {
    helpText: 'Select the list of related treatments.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('relatedDepartmentsPrograms', {
    name: 'Related Departments/Programs',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['departmentAndProgram'],
        },
      ],
    },
  });
  clinic.changeFieldControl('relatedDepartmentsPrograms', 'builtin', 'entryLinksEditor', {
    helpText: 'Select the list of related departments/programs.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  clinic.createField('providers', {
    name: 'Related Providers',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['provider'],
        },
      ],
    },
  });
  clinic.changeFieldControl('providers', 'builtin', 'entryLinksEditor', {
    helpText: 'Add providers at this location.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });
};
