module.exports = function (migration) {
  // create new content type
  const site = migration
    .createContentType('site')
    .name('Site')
    .description('');

  // add field
  site.createField('siteName', {
    name: 'Site Name',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  site.changeFieldControl('siteName', 'builtin', 'singleLine', {
    helpText:
      'Enter the title of this item; should be the friendly name. ex: Pulmonary Care Specialists Dallas.',
  });

  // add entry title
  site.displayField('siteName');

  // add field
  site.createField('siteOfficialName', {
    name: 'Site Official Name',
    type: 'Symbol',
    required: false,
  });
  site.changeFieldControl('siteOfficialName', 'builtin', 'singleLine', {
    helpText:
      'Full official name of site. May be used on card, page title, and first mention in body copy. ex: Children’s Health℠ Pulmonary Care Specialists Dallas.',
  });

  // add field
  site.createField('siteShortName', {
    name: 'Site Short Name',
    type: 'Symbol',
    required: false,
  });
  site.changeFieldControl('siteShortName', 'builtin', 'singleLine', {
    helpText:
      'Short name to be used on mobile app, ex: Specialists Dallas.',
  });

  // add field
  site.createField('slug', {
    name: 'Slug',
    type: 'Symbol',
    required: false,
    validations: [
      {
        unique: true,
      },
    ],
  });
  site.changeFieldControl('slug', 'builtin', 'slugEditor', {
    trackingFieldId: 'title',
    helpText:
      'The url path where this content can be viewed. Enter the path only, for instance, for the page childrens.com/locations/plano-campus/childrens-medical-center-plano you would enter "locations/plano-campus/childrens-medical-center-plano".',
  });

  // add field
  site.createField('seo', {
    name: 'SEO',
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [{ linkContentType: ['seo'] }],
  });
  site.changeFieldControl('seo', 'builtin', 'entryLinkEditor', {
    helpText: 'SEO Meta tags.',
  });

  // add field
  site.createField('promoCallOut', {
    name: 'Promo Call Out',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['promoCallOut'] }],
  });
  site.changeFieldControl('promoCallOut', 'builtin', 'entryCardsEditor', {
    helpText: 'Add a page-specific promo call out, if desired. If a CT-wide promo call out has been applied, both promos will display.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  site.createField('summary', {
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
  site.changeFieldControl('summary', 'builtin', 'multipleLine', {
    helpText: 'Enter the summary of this site. This content should be a factual description of the site.',
  });

  // add field
  site.createField('valueProposition', {
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
  site.changeFieldControl('valueProposition', 'builtin', 'multipleLine', {
    helpText: 'Enter the value proposition of this site. This content should be a marketing description of the location. This content may appear in the page introduction.',
  });

  // add field
  site.createField('careType', {
    name: 'Type of Care',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ["tag"],
        },
      ],
    },
  });
  site.changeFieldControl('careType', 'builtin', 'entryLinksEditor', {
    helpText: 'Select the type(s) of care available at this site',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  site.createField('openHours', {
    name: 'Open Hours',
    type: 'Link',
    linkType: 'Entry',
    required: false,
    validations: [{ linkContentType: ['openHours'] }],
  });
  site.changeFieldControl('openHours', 'builtin', 'entryLinkEditor', {
    helpText: 'Enter the open hours for this site.',
  });

  // add field
  site.createField('siteContact', {
    name: 'Site Contact',
    type: 'Array',
    required: true,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'addressPhone',
          ],
        },
      ],
    },
  });
  site.changeFieldControl('siteContact', 'builtin', 'entryCardsEditor', {
    helpText: 'Add contact details for this site. If preparing for a move, you can select multiple (e.g. current and upcoming) and manage the cutover via publish/unpublish scheduling in the Site/Building Contact entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  site.createField('parkingInfo', {
    name: 'Parking Info',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [],
    },
  });
  site.changeFieldControl('parkingInfo', 'builtin', 'entryCardsEditor', {
    helpText: 'Add parking info for site. If preparing for a move, you can select multiple and manage the cutover via the Parking Info entry.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  site.createField('requestAnAppointmentShowHide', {
    name: 'Show/hide "request an appointment" button',
    type: 'Symbol',
    required: true,
    defaultValue: {
      'en-US': 'Show'
    },
    validations: [
      { in: ['Show', 'Hide'] }
    ]
  });
  site.changeFieldControl('requestAnAppointmentShowHide', 'builtin', 'radio', {
    helpText:
      'Whether the "request an appointment" button should be shown',
  });

  // add field
  site.createField('requestAnAppointment', {
    name: 'Request an Appointment Department',
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [{ linkContentType: ['specialty'] }],
  });
  site.changeFieldControl('requestAnAppointment', 'builtin', 'entryLinkEditor', {
    helpText: 'When the user clicks "request an appointment" what department should be auto-selected on the appointment booking page.',
  });

  // add field
  site.createField('referAPatientShowHide', {
    name: 'Show/hide refer a patient button',
    type: 'Symbol',
    required: true,
    defaultValue: {
      'en-US': 'Show'
    },
    validations: [
      { in: ['Show', 'Hide'] }
    ]
  });
  site.changeFieldControl('referAPatientShowHide', 'builtin', 'radio', {
    helpText:
      'Whether the "refer a patient" button should be shown',
  });

  // add field
  site.createField('referAPatient', {
    name: 'Refer a patient text',
    type: 'Symbol',
    required: false,
  });
  site.changeFieldControl('referAPatient', 'builtin', 'singleLine', {
    helpText:
      'Text that will be appended as a URL parameter to the  patient referal form. For instance, if you want to send users to "https://www.childrens.com/for-healthcare-professionals/refer-a-patient/referral-forms?spec=heart-center" you would enter "heart-center" in this field.',
  });

  // add field
  site.createField('bookVisitShowHide', {
    name: 'Show/hide "book visit" link',
    type: 'Symbol',
    required: true,
    defaultValue: {
      'en-US': 'Show'
    },
    validations: [
      { in: ['Show', 'Hide'] }
    ]
  });
  site.changeFieldControl('bookVisitShowHide', 'builtin', 'radio', {
    helpText:
      'Whether the "book visit" link should be shown',
  });

  // add field
  site.createField('bookVisitLink', {
    name: 'Book Visit Link',
    type: 'Symbol',
    required: false,
  });
  site.changeFieldControl('bookVisitLink', 'builtin', 'urlEditor', {
    helpText:
      'Enter the URL for the "Book Visit" link.',
  });

  // add field
  site.createField('acceptedInsurance', {
    name: 'Accepted Insurance',
    type: 'Object',
    required: false,
  });
  site.changeFieldControl('acceptedInsurance', 'builtin', 'objectEditor', {
    helpText:
      'A pdf file listing the insurance accepted at childrens.',
  });

  // add field
  site.createField('mainImage', {
    name: 'Main Image',
    type: 'Object',
    required: true,
  });
  site.changeFieldControl('mainImage', 'builtin', 'objectEditor', {
    helpText:
      'Add attachment to this item. Be sure your media has a title.',
  });

  // add field
  site.createField('mainContent', {
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
  site.changeFieldControl('mainContent', 'builtin', 'entryLinksEditor', {
    helpText: 'Add components to build the structure of your page.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  site.createField('gozioID', {
    name: 'Gozio ID',
    type: 'Symbol',
    required: false,
  });
  site.changeFieldControl('gozioID', 'builtin', 'singleLine', {
    helpText:
      'Enter the Gozio ID that matches this item.',
  });

  // add field
  site.createField('gozioJSON', {
    name: 'Gozio JSON',
    type: 'Object',
    required: false,
  });
  site.changeFieldControl('gozioJSON', 'builtin', 'objectEditor', {
    helpText:
      'Insert the Gozio JSON file for this item.',
  });

  // add field
  site.createField('showLanguageSwitcher', {
    name: 'Show Language Switcher',
    type: 'Boolean',
    required: false,
    defaultValue: {
      'en-US': false,
    },
  });
  site.changeFieldControl('showLanguageSwitcher', 'builtin', 'boolean', {
    helpText:
      'Whether or not to show the language switcher from translations.com',
  });
};
