module.exports = function (migration) {
  // create new content type
  const communityPractice = migration
    .createContentType('locationCommunityPractice')
    .name('Community Practice')
    .description('');

  // add field
  communityPractice.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  communityPractice.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter an admin title for this address.',
  });

  // add entry title
  communityPractice.displayField('adminTitle');

  // add field
  communityPractice.createField('practiceName', {
    name: 'Community Practice Name',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  communityPractice.changeFieldControl('practiceName', 'builtin', 'singleLine', {
    helpText:
      'Enter the title of this item; should be the friendly name.',
  });

  // add field
  communityPractice.createField('practiceOfficialName', {
    name: 'Community Practice Official Name',
    type: 'Symbol',
    required: false,
  });
  communityPractice.changeFieldControl('practiceOfficialName', 'builtin', 'singleLine', {
    helpText:
      'Full official name of practice.',
  });

  // add field
  communityPractice.createField('practiceShortName', {
    name: 'Community Practice Short Name',
    type: 'Symbol',
    required: false,
  });
  communityPractice.changeFieldControl('practiceShortName', 'builtin', 'singleLine', {
    helpText:
      'Short name to be used on mobile app.',
  });

  // add field
  communityPractice.createField('ownershipType', {
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
  communityPractice.changeFieldControl('ownershipType', 'builtin', 'dropdown', {
    helpText:
      'Choose how this site is operated.',
  });


  // add field
  communityPractice.createField('siteBuildingContact', {
    name: 'Site/Building Contact',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'locationSiteBuildingContact',
          ],
        },
      ],
    },
  });
  communityPractice.changeFieldControl('siteBuildingContact', 'builtin', 'entryCardsEditor', {
    helpText: 'Add contact details for this site. If preparing for a move, you can select multiple (e.g. current and upcoming) and manage the cutover via publish/unpublish scheduling in the Site/Building Contact entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  communityPractice.createField('clinicContact', {
    name: 'Clinic Contact',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'locationClinicContact',
          ],
        },
      ],
    },
  });
  communityPractice.changeFieldControl('clinicContact', 'builtin', 'entryCardsEditor', {
    helpText: 'Add contact details for this clinic. If preparing for a move, you can select multiple (e.g. current and upcoming) and manage the cutover via publish/unpublish scheduling in the Clinic Contact entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });
};
