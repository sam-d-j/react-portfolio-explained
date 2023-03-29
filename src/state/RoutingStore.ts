import { createBrowserHistory } from 'history';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export class RoutingStore {
  constructor(private root: RootStore) {
    makeAutoObservable(this);
  }

  private history = createBrowserHistory();

  get route(): undefined | Route {
    const path = this.history.location.pathname;

    if (path === '/')
      return {
        path,
        location: {
          pathname,
        },
      };
  }
}

interface Route<PATH = string, PATHNAME = {}, SEARCH = {}, HASH = string> {
  path: PATH;
  location: {
    pathname: PATHNAME;
    search: SEARCH;
    hash: HASH;
  };
}
