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

export default (
  <Slide bgColor="primary" align="center top" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      Component Lifecycle Methods
    </Heading>

    <List>
      <ListItem>
        <Code>componentWillMount</Code>: Fired once, before initial rendering occurs. For ES6 classes, the constructor
        is effectively equivalent.
      </ListItem>
      <ListItem>
        <Code>componentDidMount</Code>: Fired once, after initial rendering occurs. Actual DOM elements can be accessed
        here. This is a good place to create things like pubsub event subscriptions and trigger AJAX data requests for
        needed data.
      </ListItem>
      <br />
      <ListItem>
        <Code>componentWillReceiveProps</Code>: Fired when a component is receiving new props. You might want to set
        state based on the props, or diff old and new props and trigger additional behavior.
      </ListItem>
      <ListItem>
        <Code>shouldComponentUpdate</Code>: Fired before rendering. You can compare old props/state vs the new values,
        and
        <Code>return false</Code> if you know a re-render isn't needed
      </ListItem>
      <ListItem>
        <Code>componentDidUpdate</Code>: Fired after the component's updates are made to the DOM. Actual DOM elements
        can be accessed here.
      </ListItem>
      <br />
      <ListItem>
        <Code>componentWillUnmount</Code>: Fired immediately before a component is unmounted from the DOM. Good place to
        remove message listeners or general clean up.
      </ListItem>
    </List>
  </Slide>
);
