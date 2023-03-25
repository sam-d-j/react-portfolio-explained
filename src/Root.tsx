import { observer } from 'mobx-react-lite'
import { RootStore } from './state/RootStore'

export const Root = observer<{
  store: RootStore
}>(({ store }) => {
  return <>Root!</>
})
