module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
  // "extends": "airbnb",
  // "parser": "babel-eslint",
  // "rules": {
  //   "react/require-default-props": "off",
  //   "react/jsx-max-props-per-line": "off",
  //   "camelcase": 1
  // },
  // "env": {
  //   "browser": true
  // },
  // "globals": {
  //   "process": true,
  //   "__": true
  // }
}
