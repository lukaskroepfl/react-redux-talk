import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
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
  <Slide bgColor="primary" maxWidth="1400px" margin={20}>
    <Heading textColor="black" size={3}>
      React/Redux Resources
    </Heading>
    <List>
      <ListItem>
        Official Info
        <List style={{marginLeft: 20}}>
          <ListItem>
            <a href="https://facebook.github.io/react/">React documentation</a>
          </ListItem>
          <ListItem>
            <a href="http://redux.js.org/">Redux documentation</a>
          </ListItem>
          <ListItem>
            <a href="http://redux.js.org/">Create-React-App</a>: the official CLI tool for creating a React project,
            with no build configuration required.
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Selected Learning
        <List style={{marginLeft: 20}}>
          <ListItem>
            <a href="https://medium.freecodecamp.com/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1">
              A Study Plan to Cure Javascript Fatigue
            </a>: an excellent step-by-step study plan to use when learning the modern Javascript ecosystem.
          </ListItem>
          <ListItem>
            <a href="https://www.fullstackreact.com/30-days-of-react/"> Full Stack React: 30 Days of React</a>: 30
            bite-size articles that walk you through how to use React, from the basics all the way up to deploying an
            application.
          </ListItem>
          <ListItem>
            <a href="https://www.robinwieruch.de/tips-to-learn-react-redux/">Tips to learn React + Redux in 2017</a>: An
            extensive and excellent list of suggestions to follow when learning and using React and Redux
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Additional Resources
        <List style={{marginLeft: 20}}>
          <ListItem>
            <a href="https://github.com/markerikson/react-redux-links">React/Redux Links</a>: My curated tutorial and
            resource links for React, Redux, ES6, Functional Programming, Webpack, and related topics. Specifically
            intended to be a great starting point for anyone trying to learn the ecosystem, as well as a source of solid
            info on more advanced topics.
          </ListItem>
          <ListItem>
            <a href="https://github.com/markerikson/redux-ecosystem-links">Redux Ecosystem Links</a>: My categorized
            list of Redux-related addons, libraries, and utilities
          </ListItem>
          <ListItem>
            <a href="http://www.reactiflux.com/">Reactiflux on Discord</a>: chat channels for React and
            Javascript-related topics. An excellent place to learn and ask for help. (I'm an admin - drop in and say
            hi!)
          </ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>
);
