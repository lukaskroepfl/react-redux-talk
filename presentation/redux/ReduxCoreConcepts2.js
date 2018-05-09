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

import coreConcepts2 from 'raw-loader!./examples/CoreConcepts2';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Core Concepts
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={coreConcepts2} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Heading textColor="tertiary" size={4}>
          Reducers
        </Heading>
        <Text style={{textAlign: 'left'}}>
          All state update logic lives in functions called <b>reducers</b>. Reducer functions are simply{' '}
          <Code>(state, action) => newState</Code>
        </Text>
        <br />
        <Text style={{textAlign: 'left'}}>
          Reducers should be <i>pure functions</i>, with no side effects. That means they should only rely on inputs,
          and not affect anything external. Reducers need to update data immutably, by making copies of state and
          modifying the copies before returning them, rather than directly modifying inputs.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
