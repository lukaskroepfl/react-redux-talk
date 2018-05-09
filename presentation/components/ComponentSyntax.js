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

import classComponents from 'raw-loader!./examples/ClassComponents';
import functionalComponents from 'raw-loader!./examples/FunctionalComponents';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Declaring Components
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Heading textColor="tertiary" size={6}>
          Class Components
        </Heading>
        <CodePane lang="javascript" source={classComponents} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Heading textColor="tertiary" size={6}>
          Functional Components
        </Heading>
        <CodePane lang="jsx" source={functionalComponents} />
      </Fill>
    </Layout>
  </Slide>
);
