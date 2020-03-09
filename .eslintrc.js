module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "jsx-a11y",
    "import"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx"] }
    ],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-param-reassign": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],

    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
          "every": [ "id" ]
      }
  }]
  },
};
