import React from 'react';

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

import coreConcepts1 from 'raw-loader!./examples/CoreConcepts1';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Core Concepts
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="javascript" source={coreConcepts1} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Heading textColor="tertiary" size={4}>
          State
        </Heading>
        <Text style={{textAlign: 'left'}}>App state is stored in plain objects</Text>
        <Heading textColor="tertiary" size={4} style={{paddingTop: 30}}>
          Actions
        </Heading>
        <Text style={{textAlign: 'left'}}>To change something in the state, you need to dispatch an action</Text>
        <Heading textColor="tertiary" size={4} style={{paddingTop: 30}}>
          Action Creators
        </Heading>
        <Text style={{textAlign: 'left'}}>
          It is common to use <i>action creator</i> functions to encapsulate the process of creating action objects
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
