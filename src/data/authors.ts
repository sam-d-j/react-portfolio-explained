export interface Author {
  palette: {
    primary: string;
    secondary: string;
    mode: 'light' | 'dark';
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  biography: string;
  email: string;

  workHistory?: {
    date?: {
      to: Date;
      from: Date;
    };
    title: string;
    subTitle: string;
    description: string;
  }[];

  educationExperience?: {
    date?: {
      to: Date;
      from: Date;
    };
    title: string;
    subTitle: string;
    description: string;
  }[];

  proficiencies: {}[];
}

export const authorsStaticData: Author[] = [
  {
    palette: {
      primary: '#3f51a5',
      secondary: '#f50057',
      mode: 'dark',
    },
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
        subTitle: 'Some Company',
      },
      {
        date: {
          from: new Date('2018-01-01'),
          to: new Date('2019-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Junior Software Engineer',
        subTitle: 'Different Company',
      },
      {
        date: {
          from: new Date('2017-01-01'),
          to: new Date('2018-01-01'),
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl si',
        title: 'Intern',
        subTitle: 'Another Company',
      },
    ],
    educationExperience: [
      {
        title: 'McDonalds University',
        subTitle: 'Burger Flipping Triggernometry ',
        description:
          'Experience developed within the fast food industry. Learned how to flip burgers, make fries, and make milkshakes.',
        date: {
          from: new Date('2015-02-01'),
          to: new Date('2016-08-01'),
        },
      },
      {
        title: 'ChatGPT University',
        subTitle: 'Chatbot Theory',
        description:
          'Went deep into the theory of chatbots. Implemented ChatGPT scenarios; a chatbot that can order food, book a hotel, book a flight, and book a car.',
      },
    ],
  },
  {
    palette: {
      primary: '#ff07f0',
      secondary: '#f50057',
      mode: 'dark',
    },
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
        title: 'Instructional Designer',
        subTitle: 'Some Company',
      },
    ],
  },
];
