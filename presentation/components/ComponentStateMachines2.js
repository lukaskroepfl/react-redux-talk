import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
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

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Components
    </Heading>

    <Heading textColor="tertiary" size={5}>
      Components === Functions
    </Heading>
    <List>
      <ListItem>
        Like functions take parameters and return a result, components take in values and return UI output
      </ListItem>
      <ListItem>Given the same input values, a component will return the same UI output</ListItem>
      <ListItem>
        <Code>UI = f(state) </Code>
      </ListItem>
    </List>
  </Slide>
);
