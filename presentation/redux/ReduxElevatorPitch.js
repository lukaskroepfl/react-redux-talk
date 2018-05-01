import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
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
      What Is Redux?
    </Heading>

    <List style={{marginLeft: 20}}>
      <ListItem>
        <b>Single source of truth</b>: The state of your whole application is stored as a tree of plain objects and
        arrays within a single store
      </ListItem>
      <ListItem>
        <b>State is read-only</b>: The only way to change the state is to dispatch an &nbsp;
        <b>action</b>, a plain object describing what happened.
      </ListItem>
      <ListItem>
        <b>Changes are made with pure functions</b>: All state updates are performed by pure functions called{' '}
        <b>reducers</b>, which are <Code>(state, action) => newState</Code>
      </ListItem>
    </List>

    <Heading textColor="tertiary" size={6}>
      Centralized
    </Heading>
    <Text style={{textAlign: 'left'}}>
      Having a single store and single state tree enables many powerful techniques: logging of all updates, API
      handling, undo/redo, state persistence, "time-travel debugging", error reports with full snapshots of app state,
      and more.
    </Text>
  </Slide>
);
