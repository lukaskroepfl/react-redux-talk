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

import sideEffects from 'raw-loader!./examples/SideEffectExample';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Side Effects
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="javascript" source={sideEffects} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Text style={{textAlign: 'left'}}>
          The most commonly used middleware for side effects in Redux are &nbsp;
          <Code>redux-thunk</Code>, which lets you pass functions to <Code>dispatch</Code>, and &nbsp;
          <Code>redux-saga</Code>, which uses ES6 generators to control pausable functions.
          <br /> <br />
          Thunks are useful for complex synchronous logic, such as multiple dispatches or conditional dispatching based
          on store state, and simple async logic. Sagas are useful for complex async logic or ongoing "background
          thread"-like processing behavior.
          <br />
          <br />
          There are many other addon libraries for managing side effects as well.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
