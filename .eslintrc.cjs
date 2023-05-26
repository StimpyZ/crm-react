module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-unused-vars': 'warn',
        indent: ['error', 4],
        'no-tabs': 0,
        'padded-blocks': ['error', 'always'],
        'react/prop-types': 'off',
        'react/self-closing-comp': 'warn',
        'import/no-absolute-path': 'off'
    }
}
