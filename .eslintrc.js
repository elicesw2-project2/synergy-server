module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': 'off',
    camelcase: 'off',
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    },
    overrides: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    },
    'import/no-import-module-exports': 'off',
    'consistent-return': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
