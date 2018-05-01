import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

import refsExample from 'raw-loader!./examples/refsExample';

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Access DOM Nodes with Refs
    </Heading>

    <br />

    <ComponentPlayground theme="dark" code={refsExample} />
  </Slide>
);
