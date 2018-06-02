const spec = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    value: '',
    required: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    value: '',
    required: true,
  },
  {
    name: 'duration',
    label: 'Duration',
    type: 'text',
    value: '00:00',
    required: true,
    hide: true,
  },
  {
    name: 'duration-option',
    label: 'Duraction',
    type: 'select',
    value: '',
    required: true,
    hide: true,
    options: [
      {
        value: '00:30',
        label: 'short - 00:30',
      },
      {
        value: '00:45',
        label: 'medium - 00:45',
      },
      {
        value: '01:00',
        label: 'long - 01:00',
      },
      {
        value: '00:00',
        label: 'custom duration',
      },
    ],
  },
];

export default spec;
