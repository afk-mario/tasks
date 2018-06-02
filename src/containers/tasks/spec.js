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
        label: 'corta',
      },
      {
        value: '00:45',
        label: 'media',
      },
      {
        value: '01:00',
        label: 'larga',
      },
      {
        value: '00:00',
        label: 'otra',
      },
    ],
  },
];

export default spec;
