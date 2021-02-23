module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  'plugins': ['prettier'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 0,
    'jsx-quotes': 'off',
    'global-require': 'off',
    'prettier/prettier': 'error'
  },
  globals: {
    fetch: false,
  },
};
