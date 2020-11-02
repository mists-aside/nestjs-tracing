// .eslintrc.js
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mocha/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "mocha"
  ],
  "root": true,
  "rules": {
    "consistent-return": 2,
    "no-else-return": 1,
    "space-unary-ops": 2,
    "indent": [
      1,
      2
    ],
    "semi": [
      1,
      "always"
    ]
  },
  "parser": "@typescript-eslint/parser"
};