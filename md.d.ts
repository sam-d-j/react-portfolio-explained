declare interface MarkdownDocument {
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
declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: MarkdownDocument['attributes'];

  // When "Mode.TOC" is requested
  const toc: MarkdownDocument['toc'];

  // When "Mode.HTML" is requested
  const html: MarkdownDocument['html'];

  // When "Mode.RAW" is requested
  const raw: MarkdownDocument['raw'];

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  const ReactComponent: MarkdownDocument['ReactComponent'];

  // Modify below per your usage
  export { attributes, toc, html, raw, ReactComponent };
}
