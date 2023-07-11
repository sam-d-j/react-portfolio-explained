import { ArticleDocument } from './ArticleDocument';

export type DateInputs = string | Date;
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
    date?: { to: DateInputs; from: DateInputs };
    title: string;
    subTitle: string;
    description: string;
  }[];

  educationExperience?: {
    date?: { to: DateInputs; from: DateInputs };
    title: string;
    subTitle: string;
    description: string;
  }[];

  proficiencies?: {
    // TODO: add this
  }[];

  portfolioArticles?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };

  blog?: {
    id: 'author1';
    articles?: Record<string, ArticleDocument>;
  };
}
