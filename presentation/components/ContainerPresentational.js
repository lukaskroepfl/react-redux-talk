// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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
  Text
} from 'spectacle';

import containerExample from 'raw-loader!./examples/ContainerPresentationalExample';

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px">
    <Heading textColor="black" size={3}>
      Container/Presentational Components
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={containerExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>
            <b>"Container" components</b>: responsible for fetching some kind of data, and passing it as props to
            presentational children
          </ListItem>
          <ListItem>
            <b>"Presentational" components</b>: render some portion of UI solely based on props from parent. Usually no
            meaningful logic.
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
