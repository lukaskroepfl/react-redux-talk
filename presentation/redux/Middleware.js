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

import middlewareExample from 'raw-loader!./examples/MiddlewareExample';

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Middleware
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="javascript" source={middlewareExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Text style={{textAlign: 'left'}}>
          Middleware are written in a "functional programming" style, as functions returning functions.
          <br />
          <br />
          Redux includes a function called <Code>applyMiddleware</Code>, which sets up the middleware pipeline for use
          with the store. It takes middleware as parameters, and returns a "store enhancer" that is passed to{' '}
          <Code>createStore</Code>
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
