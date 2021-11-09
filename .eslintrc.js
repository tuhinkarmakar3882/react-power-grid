module.exports = {
  env: {
    'jest/globals': true,
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:jest/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {},
  settings: {
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  }
}
