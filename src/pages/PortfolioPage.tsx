import { css } from '@emotion/react';
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
  CssBaseline,
  Grid,
  MenuItem,
  Paper,
  Select,
  ThemeProvider,
  Typography,
  useTheme,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRootStore } from '../state/reactContext';
import { DateTime } from 'luxon';
import { defaultMuiTheme } from '../state/theme';
import { PortoflioArticleCardList } from './articles';
import { DateInputs } from '../data/Author';

export const PortfolioPage = observer(() => {
  const { authors } = useRootStore();

  useEffect(() => {
    authors.loadAuthors();
  }, []);

  return (
    <ThemeProvider
      theme={authors.selectedAuthor?.colorTheme ?? defaultMuiTheme}
    >
      <CssBaseline />
      <Paper
        css={css`
          min-height: 100%;
          border-radius: 0;
        `}
      >
        <Grid
          container
          alignItems={'start'}
          direction={'column'}
          justifyContent={'flex-start'}
          flexGrow={1}
          css={css`
            > div {
              margin-bottom: 4em;
            }
          `}
        >
          <IntroSection />
          <ExperienceTimeline />
          <EducationTimeline />
          <PortoflioArticleCardList />
          <Footer />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
});

const IntroSection = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent={'center'}
      css={css`
        padding: 2em 0 4em;
        border-bottom: 3px solid ${theme.palette.primary.main};
        margin-bottom: 3em;
      `}
    >
      <Grid
        item
        css={css`
          text-align: center;
          flex-grow: 0;
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

const Footer = observer(() => {
  const {
    authors: { selectedAuthor, authors, setSelectedAuthor },
  } = useRootStore();

  return (
    <Grid
      container
      justifyContent="space-between"
      flexGrow={0}
      alignItems={'end'}
      css={css`
        padding: 0.5em 2em;
        opacity: 0.5;
        border-top: 1px solid #333;
        padding-bottom: 1em;
        && {
          margin-bottom: 0;
        }
      `}
    >
      <Typography variant="body2">Portfolio tut</Typography>
      {authors.length > 1 ? (
        <Select
          label={'Select author'}
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
      ) : null}
    </Grid>
  );
});

const ExperienceTimeline = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  if (!selectedAuthor?.data.workHistory) return null;

  return (
    <WorkTimeline
      heading="Work Experience"
      items={selectedAuthor.data.workHistory}
    />
  );
});

const EducationTimeline = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  if (!selectedAuthor?.data.educationExperience) return null;

  return (
    <WorkTimeline
      heading="Education Experience"
      items={selectedAuthor.data.educationExperience}
    />
  );
});

const WorkTimeline = observer<{
  heading: string;
  items: {
    title: string;
    subTitle: string;
    description: string;
    date?: {
      from: DateInputs;
      to: DateInputs;
    };
  }[];
}>(({ heading, items }) => (
  <Grid
    container
    css={css`
      margin: 1em auto;
      max-width: 1024px;
    `}
  >
    <Typography
      variant="h3"
      color="text.secondary"
      gutterBottom
      css={css`
        flex-grow: 0;
        width: 100%;
        text-align: center;
      `}
    >
      {heading}
    </Typography>
    <Timeline position="alternate">
      {items?.map((work, index) => (
        <TimelineItem key={index}>
          {/* TODO: describe this in tut */}
          {!!work.date && (
            <TimelineOppositeContent color="text.secondary">
              {inputDateToText(work.date.from)} &mdash;{' '}
              {inputDateToText(work.date.to)}
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              gutterBottom
              css={css`
                margin-top: -0.2em;
              `}
            >
              {work.title}
              <br />
              <small>
                <em> {work.subTitle}</em>
              </small>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {work.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Grid>
));

function inputDateToText(input: DateInputs) {
  if (typeof input === 'string') return input;

  return DateTime.fromJSDate(input).toFormat('yyyy-MM');
}
