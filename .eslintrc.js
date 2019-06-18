module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: 'airbnb-base',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'indent': ['error', 4],
        'linebreak-style': 0,
        'no-console': 0,
        'import/no-unresolved': 0,
        'quote-props': 0,
        'comma-dangle': 0,
        'no-underscore-dangle': 0
    },
};