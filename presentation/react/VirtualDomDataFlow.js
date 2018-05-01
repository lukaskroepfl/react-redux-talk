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
      Managing the UI
    </Heading>

    <Heading textColor="tertiary" size={5}>
      Declarative Rendering
    </Heading>
    <List>
      <ListItem>Completely recreating the entire UI on every update is not efficient</ListItem>
      <ListItem>
        Rendering a component returns <i>descriptions</i> of what the UI should look like now
      </ListItem>
      <ListItem>React uses those descriptions to update the UI efficiently</ListItem>
    </List>
    <Heading textColor="tertiary" size={5}>
      One-Way Data Flow
    </Heading>
    <List>
      <ListItem>Components pass data to their children</ListItem>
      <ListItem>Component rendering is based on internal state plus data from parent</ListItem>
      <ListItem>Predictable top-down data flow makes it easier to understand reason for UI contents</ListItem>
    </List>
  </Slide>
);
