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

import middlewarePipeline from './images/middleware-pipeline.png';

import preloader from 'spectacle/lib/utils/preloader';

preloader([middlewarePipeline]);

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux Middleware
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Image src={middlewarePipeline} width="900px" />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Text style={{textAlign: 'left'}}>
          A Redux store can be configured to use <b>middleware</b>. Middleware provides the capability to run code after
          an action is dispatched, but before it reaches the reducer.
          <br />
          <br />
          Middlewares form a pipeline that wraps around the <Code>dispatch</Code>&nbsp; function. Each middleware in the
          chain can pass actions onward, restart the dispatch pipeline, and access the store state.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
