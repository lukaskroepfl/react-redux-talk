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
  <Slide bgColor="primary" align="center top" maxWidth="1000px" margin={20}>
    <Heading textColor="black" size={3}>
      What Is React?
    </Heading>
    <Heading textColor="tertiary" size={5} margin="20px 20px">
      Component-Based
    </Heading>
    <Text style={{textAlign: 'left'}}>
      Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component
      logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state
      out of the DOM.
    </Text>

    <Cite>
      <a href="https://facebook.github.io/react/">React Documentation</a>
    </Cite>
  </Slide>
);
