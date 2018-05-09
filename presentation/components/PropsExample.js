import React from 'react';
import PropTypes from 'prop-types';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
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
  Text,
  ComponentPlayground
} from 'spectacle';

import propsExample from 'raw-loader!./examples/PropsExample';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Passing Data as Props
    </Heading>

    <br />

    <ComponentPlayground theme="dark" code={propsExample} scope={{PropTypes}} />
  </Slide>
);
