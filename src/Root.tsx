import { observer } from 'mobx-react-lite';
import { PortfolioPage } from './pages/PortfolioPage';
import { RootStoreProvider } from './state/reactContext';
import { RootStore } from './state/RootStore';

export const Root = observer<{ store: RootStore }>(({ store }) => {
  return (
    <RootStoreProvider value={store}>
      <PortfolioPage />
    </RootStoreProvider>
  );
});
