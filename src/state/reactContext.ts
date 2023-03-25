import { createContext, useContext } from 'react'
import { RootStore } from './RootStore'

export const RootStoreReactContext = createContext<RootStore | undefined>(
  undefined,
)

export const RootStoreProvider = RootStoreReactContext.Provider

export function useRootStore() {
  return (
    useContext(RootStoreReactContext) ??
    (() => {
      import.meta?.hot?.invalidate?.()

      throw new Error('RootStoreReactContext missing.')
    })()
  )
}
