import { css, Global } from '@emotion/react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  AppBar,
  CssBaseline,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRootStore } from '../state/reactContext';
import { DateTime } from 'luxon';

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
            font-family: 'Poppins';
          }
        `}
      />

      <Header />

      <IntroSection />
      <ExperienceTimeline />
    </>
  );
});

const IntroSection = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  return (
    <Grid
      container
      justifyContent={'center'}
      css={css`
        padding: 2em 0 4em;
      `}
    >
      <Grid
        item
        css={css`
          text-align: center;
        `}
      >
        <Typography variant="h1">{selectedAuthor?.fullName}</Typography>
        <Typography variant="h2" color="text.secondary">
          {selectedAuthor?.data.name.title}
        </Typography>
      </Grid>
    </Grid>
  );
});

const Header = observer(() => {
  const {
    authors: { selectedAuthor, authors, setSelectedAuthor },
  } = useRootStore();

  return (
    <>
      <AppBar component="nav" position="fixed">
        <Grid
          container
          justifyContent="end"
          css={css`
            padding: 0.5em;
          `}
        >
          <Select
            size="small"
            value={selectedAuthor?.id ?? ''}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            {authors.map((author) => (
              <MenuItem key={author.id} value={author.id}>
                {author.fullName}
              </MenuItem>
            ))}
            <MenuItem disabled value={''} hidden></MenuItem>
          </Select>
        </Grid>
      </AppBar>
      <div
        css={css`
          padding-top: 6em;
        `}
      ></div>
    </>
  );
});

const ExperienceTimeline = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  return (
    <>
      <Timeline position="alternate">
        {selectedAuthor?.data.workHistory.map((work) => {
          return (
            <>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  {DateTime.fromJSDate(work.date.from).toFormat('yyyy-mm')} -{' '}
                  {DateTime.fromJSDate(work.date.to).toFormat('yyyy-mm')}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">
                    {work.title} - {work.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {work.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </>
          );
        })}
      </Timeline>
    </>
  );
});
