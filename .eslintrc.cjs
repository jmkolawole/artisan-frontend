module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'google',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'valid-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
    indent: [
      'error',
      2,
      { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['#region', '#endregion', 'region', 'endregion'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
