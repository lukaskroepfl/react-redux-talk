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

import renderExample from 'raw-loader!./examples/RenderExample';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Basic Usage
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={renderExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>
            The <Code>render</Code> method is required for all components. You can think of this as your template.
          </ListItem>
          <ListItem>
            Rendering returns a tree of React component descriptions, which will eventually be turned into HTML
          </ListItem>
          <ListItem>
            The <Code>ReactDOM.render</Code> method creates a new component tree, initializes the React library, and
            appends the output from the component and its children to the given HTML element
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
