import React from 'react';
import {Deck} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import intro from './intro';
import react from './react';
import components from './components';
import redux from './redux';
import demo from './demo';
import furtherInfo from './furtherInfo';

// Require CSS
require('normalize.css');

require('./prism.js');
require('./monokai.css');
require('../assets/overrides.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const slides = intro.concat(react, components, redux, demo, furtherInfo);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} progress="number" theme={theme} contentWidth="1400px" textSize="20px">
        {React.Children.toArray(slides)}
      </Deck>
    );
  }
}
