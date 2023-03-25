module.exports = {
  extends: ['eslint-config-nfour/.eslintrc.react'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
