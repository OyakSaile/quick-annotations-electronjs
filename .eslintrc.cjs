module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    'no-unused-vars': 'off', // Disable the no-unused-vars rule
    'react/prop-types': 'off' // Disable the prop-types rule for React
  }
}
