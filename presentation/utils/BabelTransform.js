import * as Babel from '@babel/standalone';

export const transformCode = code => {
  try {
    code = Babel.transform(code, {
      presets: ['es2015', 'react', ['stage-0', {decoratorsLegacy: true}]]
    }).code;

    debugger;
    return code;
  } catch (e) {
    console.log(e);
    return code;
  }
};
