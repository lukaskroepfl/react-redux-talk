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

import stateExample from 'raw-loader!./examples/StateExample';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Using Component State
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={stateExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>
            initial state is defined in the constructor, or assigned directly using the Class Properties syntax
          </ListItem>
          <ListItem>
            The state object is available as <Code>this.state</Code>, and can be read from directly
          </ListItem>
          <ListItem>
            State is updated by calling <Code>{'this.setState({someField : someValue})'}</Code>, which does shallow
            merges into the existing state object
          </ListItem>
          <ListItem>Do not modify the state object directly, as React will not know it was changed.</ListItem>
          <ListItem>
            Every call to <Code>setState</Code> triggers a re-render
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
