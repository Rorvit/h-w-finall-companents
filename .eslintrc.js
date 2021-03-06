module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['off'],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'multiline-ternary': ['off']
  }
}
