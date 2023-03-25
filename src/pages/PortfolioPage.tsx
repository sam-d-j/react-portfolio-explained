import { css, Global } from '@emotion/react';
import { observer } from 'mobx-react-lite';

export const PortfolioPage = observer(() => {
  return (
    <>
      <Global
        styles={css`
          body {
            background: #222;
            color: white;
          }
        `}
      />
      <h1
        css={css`
          color: red;
        `}
      >
        Portfolio
      </h1>
    </>
  );
});
