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

import hmr from './images/hmr.gif';

import preloader from 'spectacle/lib/utils/preloader';

preloader([hmr]);

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Why Use Redux with React?
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <Image src={hmr} height="500px" />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <Text style={{textAlign: 'left'}}>
          Modern JS build tools like Webpack have a capability called &nbsp;
          <b>hot module reloading</b>, which allows replacing pieces of your code as you make edits (without having to
          refresh the entire page).
          <br />
          <br />
          If React components are swapped, they lose their internal state. Keeping app state in Redux allows you to
          "live-edit" your components, while keeping all data intact.
        </Text>
      </Fill>
    </Layout>
  </Slide>
);
