import { ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { PortfolioPage } from './pages/PortfolioPage';
import { RootStoreProvider } from './state/reactContext';
import { RootStore } from './state/RootStore';
import { muiTheme } from './state/theme';

export const Root = observer<{ store: RootStore }>(({ store }) => {
  return (
    <RootStoreProvider value={store}>
      <ThemeProvider theme={muiTheme}>
        <PortfolioPage />
      </ThemeProvider>
    </RootStoreProvider>
  );
});
