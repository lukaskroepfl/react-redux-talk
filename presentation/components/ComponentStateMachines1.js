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
  <Slide bgColor="primary" align="center top" maxWidth={1000} margin={20}>
    <Heading textColor="black" size={3}>
      Components
    </Heading>

    <Heading textColor="tertiary" size={5}>
      Components === State Machines
    </Heading>
    <List>
      <ListItem>React thinks of UIs as simple state machines</ListItem>
      <ListItem>Update a component's state, and then render a new UI based on this new state</ListItem>
      <ListItem>React takes care of updating the DOM for you in the most efficient way</ListItem>
    </List>
  </Slide>
);
