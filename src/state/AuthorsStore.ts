import { makeAutoObservable } from 'mobx'
import { Author, authorsStaticData } from '../data/authors'
import { RootStore } from './RootStore'


export class AuthorsStore {
  constructor(private root: RootStore) {
    makeAutoObservable(this)
  }
  
  selectedAuthor: Author | null = null
  authors: Author[] = []
  isLoadingAuthors = false

  loadAuthors = async () => {
    this.setIsLoadingAuthors(true)

    // Fake loading time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    this.setIsLoadingAuthors(false)
    
    this.setAuthors(authorsStaticData)
    
    if (!this.selectedAuthor) this.setSelectedAuthor(this.authors[0])
  }

  setAuthors = (authors: this['authors']) =>
    this.authors = authors

  setIsLoadingAuthors = (isLoadingAuthors: this['isLoadingAuthors']) => 
    this.isLoadingAuthors = isLoadingAuthors
  
  setSelectedAuthor = (author: Author | null) => {
    this.selectedAuthor = author
  }
}