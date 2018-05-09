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

import middlewareBehavior from './images/middleware-behavior.png';

import preloader from 'spectacle/lib/utils/preloader';

preloader([middlewareBehavior]);

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Middleware
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Image src={middlewareBehavior} width="900px" />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Text style={{textAlign: 'left'}}>
          A middleware can inspect actions and state, modify actions, dispatch other actions, stop actions from reaching
          the reducers, and much more.
          <br />
          <br />
          Middleware are also a good place for managing persistent server connections via websockets, and other similar
          behavior.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
