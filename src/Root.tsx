import { CssBaseline, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { PortfolioPage } from './pages/PortfolioPage';
import { RootStoreProvider } from './state/reactContext';
import { RootStore } from './state/RootStore';
import { defaultMuiTheme } from './state/theme';
import '@fontsource/poppins';
import { Global, css } from '@emotion/react';

export const Root = observer<{ store: RootStore }>(({ store }) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__root {
            height: 100%;
            box-sizing: border-box;
            font-family: 'Poppins';
          }
        `}
      />
      <RootStoreProvider value={store}>
        <ThemeProvider theme={defaultMuiTheme}>
          <CssBaseline />
          <PortfolioPage />
        </ThemeProvider>
      </RootStoreProvider>
    </>
  );
});
