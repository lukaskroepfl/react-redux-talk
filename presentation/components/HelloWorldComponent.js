import React from 'react';
import {BlockQuote, Cite, Deck, Heading, List, ListItem, Quote, Slide, Text, ComponentPlayground} from 'spectacle';
import BabelComponentPlayground from './BabelComponentPlayground';

const codeSample = require('raw-loader!./examples/HelloWorldComponent.js');

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Hello World Component
    </Heading>
    <br />

    <ComponentPlayground theme="dark" code={codeSample} />
  </Slide>
);
