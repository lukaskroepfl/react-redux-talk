import React from 'react';
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';

import {transformCode} from '../utils/BabelTransform';

const BabelComponentPlayground = props => {
  return (
    <LiveProvider code={props.code} transformCode={transformCode}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

export default BabelComponentPlayground;
