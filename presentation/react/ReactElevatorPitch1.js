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
  <Slide bgColor="primary" maxWidth="1000px" margin={20}>
    <Heading textColor="black" size={3}>
      What Is React?
    </Heading>
    <Heading textColor="tertiary" size={5} margin="20px 20px">
      Declarative
    </Heading>
    <Text style={{textAlign: 'left'}}>
      React makes it painless to create interactive UIs. Design simple views for each state in your application, and
      React will efficiently update and render just the right components when your data changes. Declarative views make
      your code more predictable and easier to debug
    </Text>
    <Cite>
      <a href="https://facebook.github.io/react/">React Documentation</a>
    </Cite>
  </Slide>
);
