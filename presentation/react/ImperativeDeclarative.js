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

import imperativeExample from 'raw-loader!./examples/jQuery';
import declarativeExample from 'raw-loader!./examples/react.js';

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Declarative Code
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Heading textColor="tertiary" size={5}>
          Imperative
        </Heading>
        <CodePane lang="javascript" source={imperativeExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Heading textColor="tertiary" size={5}>
          Declarative
        </Heading>
        <CodePane lang="jsx" source={declarativeExample} />
      </Fill>
    </Layout>

    <List>
      <ListItem>React is an abstraction away from the DOM</ListItem>
      <ListItem>
        Think of your application and UI in terms of{' '}
        <b>
          <i>state</i>
        </b>, rather than UI manipulations
      </ListItem>
      <ListItem>Allows a simplified mental model for data flow</ListItem>
      <ListItem>Re-render the whole app on every update</ListItem>
      <ListItem>Mix and match components to build UIs</ListItem>
    </List>
  </Slide>
);
