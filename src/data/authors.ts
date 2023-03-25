export interface Author {
  name: {
    first: string;
    last: string;
    title: string;
  };
  biography: string;
  email: string;

  workHistory: {
    date: {
      to: Date;
      from: Date;
    };
    title: string;
    description: string;
    company: string;
  }[];

  proficiencies: {}[];
}

export const authorsStaticData: Author[] = [
  {
    name: {
      first: 'John',
      last: 'Doe',
      title: 'Software Developer',
    },
    biography: '',

    email: 'johndoedoe@someemail.com',
    proficiencies: [],
    workHistory: [
      {
        date: {
          from: new Date('2019-01-01'),
          to: new Date('2020-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Software Engineer',
        company: 'Some Company',
      },
      {
        date: {
          from: new Date('2018-01-01'),
          to: new Date('2019-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Junior Software Engineer',
        company: 'Different Company',
      },
      {
        date: {
          from: new Date('2017-01-01'),
          to: new Date('2018-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Intern',
        company: 'Another Company',
      },
    ],
  },
  {
    name: {
      first: 'Jane',
      last: 'Doe',
      title: 'Instructional Designer',
    },
    biography: '',

    email: 'janedoedoe@someemail.com',
    proficiencies: [],
    workHistory: [
      {
        date: {
          from: new Date('2019-01-01'),
          to: new Date('2020-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Software Engineer',
        company: 'Some Company',
      },
      {
        date: {
          from: new Date('2018-01-01'),
          to: new Date('2019-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Junior Software Engineer',
        company: 'Different Company',
      },
      {
        date: {
          from: new Date('2017-01-01'),
          to: new Date('2018-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Intern',
        company: 'Another Company',
      },
    ],
  },
];
