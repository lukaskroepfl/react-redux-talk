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
import jsxExample2 from 'raw-loader!./examples/JsxExample2';

export default (
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      JSX Syntax
    </Heading>

    <Layout>
      <Fill style={{marginRight: 5}}>
        <CodePane lang="jsx" source={jsxExample2} />
      </Fill>
      <Fill style={{marginLeft: 5}}>
        <List>
          <ListItem>Curly braces "escape" from JSX back into normal JS expressions</ListItem>
          <ListItem>
            Attribute names differ from plain HTML: use
            <Code>className</Code> instead of <Code>class</Code>
            for HTML/CSS class values
          </ListItem>
          <ListItem>JSX uses capitalization to differentiate between HTML elements and React components</ListItem>
          <ListItem>
            common mistake: variable with name <Code>myComponent</Code> and then render
            <Code>{'<myComponent>'}</Code> in JSX. React turns that into&nbsp;
            <Code>{`{type : "myComponent"}`}</Code>, which breaks, instead of&nbsp;
            <Code>{`{type : MyComponent}`}</Code>.)
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
);
