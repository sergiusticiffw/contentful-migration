module.exports = function (migration) {
  // create new content type
  const openHours = migration
    .createContentType('locationOpenHours')
    .name('📄 Open Hours')
    .description('');

  // add field
  openHours.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      }
    ],
  });
  openHours.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText: 'Enter a unique ID for this content.',
  });

  // add entry title
  openHours.displayField('adminTitle');

  // add field
  openHours.createField('sunday', {
    name: 'Sunday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('sunday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('monday', {
    name: 'Monday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('monday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('tuesday', {
    name: 'Tuesday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('tuesday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('wednesday', {
    name: 'Wednesday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('wednesday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('thursday', {
    name: 'Thursday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('thursday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('friday', {
    name: 'Friday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('friday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });

  // add field
  openHours.createField('saturday', {
    name: 'Saturday',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['locationOpenClose'],
        },
      ],
    },
  });
  openHours.changeFieldControl('saturday', 'builtin', 'entryLinksEditor', {
    helpText: 'Indicate the opening and closing time(s) on this day. If left empty, location will be shown as closed on this day.',
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: true
  });
};
