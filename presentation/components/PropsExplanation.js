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

import propsExample from 'raw-loader!./examples/PropsExample';
import propTypes from 'raw-loader!./examples/PropTypes.txt';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Props and PropTypes
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={propsExample} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>
            Props are values passed from parent to child. They are <b>read-only</b>.
          </ListItem>
          <ListItem>
            Props are combined into a single object. That object is available as
            <Code>this.props</Code> for class components, and is the only parameter for functional components
          </ListItem>
          <ListItem>
            Anything can be passed as a prop: primitives, objects, arrays, functions, component types, rendered
            components, and more.
          </ListItem>
          <ListItem>
            React includes <Code>PropTypes</Code>, which provide runtime type checking of props in development, and can
            serve as documentation for a component.
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
