import { css, Global } from '@emotion/react';
import { AppBar, CssBaseline, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRootStore } from '../state/reactContext';

export const PortfolioPage = observer(() => {
  const { authors } = useRootStore();

  useEffect(() => {
    authors.loadAuthors();
  }, []);

  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          body {
            background: #222;
            color: white;
          }
        `}
      />
      <Header />

      <IntroSection />
    </>
  );
});

const IntroSection = observer(() => {
  const {
    authors: { selectedAuthorId },
  } = useRootStore();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h1">Hi, I'm </Typography>
      </Grid>
    </Grid>
  );
});

const Header = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  return (
    <>
      <AppBar component="nav" position="fixed">
        <div
          css={css`
            padding: 1em;
          `}
        >
          {selectedAuthor?.fullName}
        </div>
      </AppBar>
      <div
        css={css`
          padding-top: 4em;
        `}
      ></div>
    </>
  );
});

const ExperienceTimeline = observer(() => {
  return <></>;
});
