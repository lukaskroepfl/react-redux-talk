import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
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
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      What Is React?
    </Heading>

    <List>
      <ListItem>A Javascript library for creating user interfaces</ListItem>
      <ListItem>A library, not a framework</ListItem>
      <ListItem>The view in the MVC pattern</ListItem>
    </List>
  </Slide>
);
