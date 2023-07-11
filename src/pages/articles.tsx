import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ArticleDocument } from '../data/ArticleDocument'
import { useRootStore } from '../state/reactContext';
import { css } from '@emotion/react';
import { useState } from 'react';

export const PortfolioArticle = observer<{
  article: ArticleDocument;
}>(({ article }) => {
  return (
    <div
      css={css`
        * {
          box-sizing: border-box;
        }
        h1 {
          text-align: center;
        }
        img {
          width: 100%;
          padding: 0;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
      `}
    >
      {<article.ReactComponent />}
    </div>
  );
});

export const PortfolioArticlePage = observer<{
  article: ArticleDocument;
}>(({ article }) => {
  // TODO: add routing for this.
  return <div>{<article.ReactComponent />}</div>;
});

export const PortfolioArticleCard = observer<{
  article: ArticleDocument;
  onClick?: () => void;
}>(({ article, onClick }) => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  return (
    <Card
      css={css`
        border: 4px solid ${selectedAuthor?.colorTheme.palette.divider};
        max-width: 300px;

        img {
          height: 200px;
        }
      `}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" image={article.attributes.image} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {article.attributes.title}
          </Typography>
          <Typography
            variant="body1"
            css={css`
              opacity: 0.75;
            `}
          >
            {article.attributes.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export const PortoflioArticleCardList = observer(() => {
  const {
    authors: { selectedAuthor },
  } = useRootStore();

  const theme = useTheme();
  const articles = selectedAuthor?.portfolioArticles ?? {};
  const [openArticleId, setOpenArticleId] = useState<string | undefined>();

  if (!Object.keys(articles).length) return null;

  return (
    <>
      <Grid
        container
        css={css`
          justify-content: center;
        `}
      >
        <Typography
          variant="h3"
          color="text.secondary"
          justifyContent={'center'}
        >
          My Projects
        </Typography>
        <Grid
          container
          spacing={8}
          css={css`
            padding: 2em 1em 4em;
            margin-bottom: 3em;
            justify-content: center;
          `}
        >
          {Object.entries(articles).map(([key, article]) => (
            <Grid key={key} item>
              <PortfolioArticleCard
                onClick={() => {
                  setOpenArticleId(key);
                }}
                key={key}
                article={article}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth={'lg'}
        open={!!openArticleId}
        scroll="body"
        onClose={() => setOpenArticleId(undefined)}
      >
        {(() => {
          if (!openArticleId) return null;

          const article = articles[openArticleId];

          return (
            <>
              <DialogContent>
                <PortfolioArticle article={article} />
              </DialogContent>
            </>
          );
        })()}
      </Dialog>
    </>
  );
});
