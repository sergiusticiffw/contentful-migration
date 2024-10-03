module.exports = function (migration) {
  // create new content type
  const building = migration
    .createContentType('building')
    .name('Building')
    .description('');


  // add field
  building.createField('buildingOfficialName', {
    name: 'Building Official Name',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  building.changeFieldControl('buildingOfficialName', 'builtin', 'singleLine', {
    helpText:
      'Full official name of building.',
  });

  // add entry title
  building.displayField('buildingOfficialName');

  // add field
  building.createField('buildingShortName', {
    name: 'Building Short Name',
    type: 'Symbol',
    required: false,
  });
  building.changeFieldControl('buildingShortName', 'builtin', 'singleLine', {
    helpText:
      'Short name to be used on mobile app, if applicable.',
  });

  // add field
  building.createField('site', {
    name: 'Site',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'site',
          ],
        },
      ],
    },
  });
  building.changeFieldControl('site', 'builtin', 'entryCardsEditor', {
    helpText: 'Multiple references only to be used for moving cutovers. Every building has one site.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  building.createField('buildingContact', {
    name: 'Building Contact',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'siteBuildingContact',
          ],
        },
      ],
    },
  });
  building.changeFieldControl('buildingContact', 'builtin', 'entryCardsEditor', {
    helpText: 'Add contact details for this building. If preparing for a move, you can select multiple (e.g. current and upcoming) and manage the cutover via publish/unpublish scheduling in the Site/Building Contact entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  building.createField('ownershipType', {
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
  building.changeFieldControl('ownershipType', 'builtin', 'dropdown', {
    helpText:
      'Choose how this site is operated.',
  });

  // add field
  building.createField('mainImage', {
    name: 'Main Image',
    type: 'Object',
    required: true,
  });
  building.changeFieldControl('mainImage', 'builtin', 'objectEditor', {
    helpText:
      'Add attachment to this item. Be sure your media has a title.',
  });

  // add field
  building.createField('mainContent', {
    name: 'Main Content Area',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            "textBlock",
            "textBlockWithAside",
            "mediaGroupBlock",
            "mediaBlock",
            "quoteBlock",
            "card",
            "linkListBlock",
            "link",
            "promoBlock",
            "faqItem",
            "accordionBlock",
            "newsletterBlock",
            "clickToTweetComponent",
            "contentReferenceBlock",
            "selectableHeadlineBlock"
          ],
        },
      ],
    },
  });
  building.changeFieldControl('mainContent', 'builtin', 'entryLinksEditor', {
    helpText: 'Add components to store information about this entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  building.createField('gozioID', {
    name: 'Gozio ID',
    type: 'Symbol',
    required: false,
  });
  building.changeFieldControl('gozioID', 'builtin', 'singleLine', {
    helpText:
      'Enter the Gozio ID that matches this item.',
  });

  // add field
  building.createField('gozioJSON', {
    name: 'Gozio JSON',
    type: 'Object',
    required: false,
  });
  building.changeFieldControl('gozioJSON', 'builtin', 'objectEditor', {
    helpText:
      'Insert the Gozio JSON file for this item.',
  });
};
