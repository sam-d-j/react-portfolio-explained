import { AuthorsStore } from './AuthorsStore'

export class RootStore {
  authors = new AuthorsStore(this)
}
