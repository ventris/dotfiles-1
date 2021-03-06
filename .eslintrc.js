module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    worker: true,
    jest: true,
    jquery: true,
    mongo: true,
    applescript: true,
    serviceworker: true
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"]
};
