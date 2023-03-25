import { makeAutoObservable } from 'mobx';
import { Author, authorsStaticData } from '../data/authors';
import { RootStore } from './RootStore';

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
    this.setIsLoadingAuthors(true);

    // Fake loading time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.setIsLoadingAuthors(false);

    this.setAuthorData(authorsStaticData);

    if (!this.selectedAuthorId) this.setSelectedAuthor(this.authors?.[0]);
  };

  setAuthorData = (authors: this['authorsData']) =>
    (this.authorsData = authors);

  setIsLoadingAuthors = (isLoadingAuthors: this['isLoadingAuthors']) =>
    (this.isLoadingAuthors = isLoadingAuthors);

  setSelectedAuthor = (author: AuthorStore | null) => {
    this.selectedAuthorId = author?.id;
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
}
