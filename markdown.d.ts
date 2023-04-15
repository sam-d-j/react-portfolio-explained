import * as React from 'react';

export declare interface MarkdownDocument {
  // "unknown" would be more detailed depends on how you structure frontmatter
  attributes: Record<string, unknown>;

  // When "Mode.TOC" is requested
  toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  html: string;

  // When "Mode.RAW" is requested
  raw: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>

  ReactComponent: React.VFC;
}
