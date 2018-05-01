import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
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

import jsxExample from 'raw-loader!./examples/JsxExample';

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      JSX Syntax
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={jsxExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>
            JSX "tags" are turned into <Code>React.createElement()</Code> calls
          </ListItem>
          <ListItem>
            Those calls return plain JS objects describing the output, look like
            <Code>{'{type : thingToRender, props : {}, children : []}'}</Code>
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
