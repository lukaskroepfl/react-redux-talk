import React from 'react';

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
  Text
} from 'spectacle';

import coreConcepts3 from 'raw-loader!./examples/CoreConcepts3';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Core Concepts
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={coreConcepts3} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Heading textColor="tertiary" size={4}>
          Store
        </Heading>
        <Text style={{textAlign: 'left'}}>
          Contains the current state value. Stores are created using the &nbsp;
          <Code>createStore</Code> method, which takes the root reducer function and an optional preloaded state value.
        </Text>
        <br />
        <Text style={{textAlign: 'left'}}>
          Stores have three main methods: <Code>dispatch</Code>, &nbsp;
          <Code>getState</Code>, and <Code>subscribe</Code>. All subscription callbacks are invoked at the end of every
          call to <Code>dispatch</Code>.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
