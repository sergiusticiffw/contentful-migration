module.exports = function (migration) {
  // create new content type
  const parkingInfo = migration
    .createContentType('locationParkingInfo')
    .name('📄 Parking Info')
    .description('');

  // add field
  parkingInfo.createField('adminTitle', {
    name: 'Admin title',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  parkingInfo.changeFieldControl('adminTitle', 'builtin', 'singleLine', {
    helpText:
      'Enter an admin title for this address.',
  });

  // add entry title
  parkingInfo.displayField('adminTitle');

  // add field
  parkingInfo.createField('name', {
    name: 'Parking Name',
    type: 'Symbol',
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  });
  parkingInfo.changeFieldControl('name', 'builtin', 'singleLine', {
    helpText:
      'Enter the parking location name.',
  });

  // add field
  parkingInfo.createField('parkingType', {
    name: 'Parking Type',
    type: 'Array',
    required: false,
    items: { type: 'Symbol', validations: [{ in: ['Free self-parking', 'Paid self-parking', 'Free valet parking', 'Paid valet parking',] }] },
  });
  parkingInfo.changeFieldControl('parkingType', 'builtin', 'checkbox', {
    helpText: 'Select the type of available parking at the given location.',
  });

  // add field
  parkingInfo.createField('parkingDetails', {
    name: 'Parking Details',
    type: 'RichText',
    required: false,
  });
  parkingInfo.changeFieldControl('parkingDetails', 'builtin', 'richTextEditor', {
    helpText:
      'Provide full parking details to be used on the location detail page and via patient letters.',
  });

  // add field
  parkingInfo.createField('parkingValidation', {
    name: 'Ticket Validation Instructions',
    type: 'RichText',
    required: false,
  });
  parkingInfo.changeFieldControl('parkingValidation', 'builtin', 'richTextEditor', {
    helpText:
      'Provide instructions for parking ticket validation to be used on the location detail page and via patient letters.',
  });

  // add field
  parkingInfo.createField('mainImage', {
    name: 'Main Image',
    type: 'Object',
    required: true,
  });
  parkingInfo.changeFieldControl('mainImage', 'builtin', 'objectEditor', {
    helpText:
      'Add attachment to this item. Be sure your media has a title.',
  });

  // add field
  parkingInfo.createField('gozioID', {
    name: 'Gozio Building ID',
    type: 'Symbol',
    required: false,
  });
  parkingInfo.changeFieldControl('gozioID', 'builtin', 'singleLine', {
    helpText:
      'Gozio Building ID',
  });
};
