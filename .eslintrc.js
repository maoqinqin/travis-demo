module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ["eslint:recommended", "prettier"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"]
    }
};