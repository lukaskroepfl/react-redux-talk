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

import fluxMVC from './images/flux-mvc.png';
import fluxFlow from './images/flux-flow.png';

import preloader from 'spectacle/lib/utils/preloader';

preloader([fluxMVC, fluxFlow]);

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Redux's Predecessor: Flux
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Image src={fluxMVC} />
        <Image src={fluxFlow} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>A year after releasing React, Facebook announced the "Flux Architecture":</ListItem>
          <ListItem>
            <b>Datastores</b> register with a singleton <b>dispatcher</b> to trigger updates, plain object{' '}
            <b>actions</b> are dispatched, and stores update themselves in response. UI subscribes to stores, reads data
            on change events.
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
