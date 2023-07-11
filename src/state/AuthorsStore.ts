import { makeAutoObservable } from 'mobx';
import { authorsStaticData } from '../data/authors';
import { Author } from '../data/Author';
import { RootStore } from './RootStore';
import { createTheme } from '@mui/material';
import { defaultMuiThemeOptions } from './theme';

export class AuthorsStore {
  constructor(private root: RootStore) {
    makeAutoObservable(this);
  }

  selectedAuthorId: string | undefined = undefined;
  authorsData: Author[] = [];
  isLoadingAuthors = false;

  get authors() {
    return this.authorsData.map((author) => new AuthorStore(author, this));
  }

  get selectedAuthor() {
    return this.authors.find((author) => author.id === this.selectedAuthorId);
  }

  loadAuthors = async () => {
    // Do some fake loading which we can fill out later with a real API call
    this.setIsLoadingAuthors(true);

    // Fake loading time
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    this.setIsLoadingAuthors(false);

    this.setAuthorData(authorsStaticData);

    if (!this.selectedAuthorId) this.setSelectedAuthor(this.authors?.[0]?.id);
  };

  setAuthorData = (authors: this['authorsData']) =>
    (this.authorsData = authors);

  setIsLoadingAuthors = (isLoadingAuthors: this['isLoadingAuthors']) =>
    (this.isLoadingAuthors = isLoadingAuthors);

  setSelectedAuthor = (authorId: AuthorStore['id'] | undefined) => {
    this.selectedAuthorId = authorId;
  };
}

export class AuthorStore {
  constructor(public data: Author, private authors: AuthorsStore) {
    makeAutoObservable(this);
  }

  get id() {
    return this.fullName;
  }

  get fullName() {
    return `${this.data.name.first} ${this.data.name.last}`;
  }

  get colorTheme() {
    return createTheme({
      ...defaultMuiThemeOptions,

      palette: {
        ...defaultMuiThemeOptions.palette,
        mode: this.data.palette.mode,
        primary: {
          ...defaultMuiThemeOptions.palette?.primary,
          main: this.data.palette.primary,
        },
        secondary: {
          ...defaultMuiThemeOptions.palette?.secondary,
          main: this.data.palette.secondary,
        },
      },
    });
  }

  get portfolioArticles() {
    return this.data.portfolioArticles?.articles;
  }
}
