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
    type: 'time',
    value: 30,
    required: true,
    hide: true,
  },
  {
    name: 'timeDone',
    label: 'Time done',
    type: 'number',
    value: 0,
    required: true,
    hide: true,
  },
  {
    name: 'duration-option',
    label: 'Duraction',
    type: 'select',
    value: 30,
    required: true,
    hide: true,
    options: [
      {
        value: 30,
        label: 'short - 00:30',
      },
      {
        value: 45,
        label: 'medium - 00:45',
      },
      {
        value: 60,
        label: 'long - 01:00',
      },
      {
        value: 0,
        label: 'custom duration',
      },
    ],
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    value: 'IDLE',
    required: true,
    hide: true,
    options: [
      {
        value: 'IDL',
        label: 'Idle',
      },
      {
        value: 'STR',
        label: 'Started',
      },
      {
        value: 'CMP',
        label: 'Completed',
      },
    ],
  },
];

export default spec;
