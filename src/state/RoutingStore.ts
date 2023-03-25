import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export class RoutingStore {
  constructor(private root: RootStore) {
    makeAutoObservable(this);
  }
}
