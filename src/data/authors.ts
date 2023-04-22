import * as author1PortfolioArticles from './author1/portfolio/index';

export interface ArticleDocument {
  // "unknown" would be more detailed depends on how you structure frontmatter
  attributes: {
    title: string;
    description: string;
    image: string;
  };

  // When "Mode.TOC" is requested
  toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  html: string;

  // When "Mode.RAW" is requested
  raw: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>

  ReactComponent: React.VFC;
}

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
    date?: { to: Date; from: Date };
    title: string;
    subTitle: string;
    description: string;
  }[];

  educationExperience?: {
    date?: { to: Date; from: Date };
    title: string;
    subTitle: string;
    description: string;
  }[];

  proficiencies: {}[];

  portfolioArticles?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };

  blog?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };
}

const author1 = {
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
  portfolioArticles: {
    id: 'author1',
    articles: author1PortfolioArticles as any as Record<
      string,
      ArticleDocument
    >,
  },
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
} satisfies Author;

const author2 = {
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
  portfolioArticles: {
    id: 'author1',
    // re-using articles for show
    articles: author1PortfolioArticles as any as Record<
      string,
      ArticleDocument
    >,
  },
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
} satisfies Author;

export const authorsStaticData = [author1, author2];
