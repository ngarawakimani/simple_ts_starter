module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  env: {
    node: true,
    'jest/globals': true
  },
  rules: {
    'no-console': 0, // 1 if prod
    'prettier/prettier': 2,
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [0],
    'react/jsx-filename-extension': [0],
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: []
      }
    ]
  }
};
