module.exports = {
    "extends": "../typeScript/index.js",
    // https://eslint.info/
    env: {
        browser: true,
        commonjs: true
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
        'react/button-has-type': 1,
        'react/default-props-match-prop-types': 1,
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 1,
        'react/jsx-boolean-value': 1,
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-closing-tag-location': 1,
        'react/jsx-curly-newline': 1,
        'react/jsx-curly-spacing': 1,
        'react/jsx-equals-spacing': 1,
        'react/jsx-first-prop-new-line': 1,
        'react/jsx-fragments': [1, 'element'],
        'react/jsx-key': 1,
        'react/jsx-max-props-per-line': 1,
        'react/jsx-no-bind': 1,
        'react/jsx-no-target-blank': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 1,
        'react/jsx-tag-spacing': 1,
        'react/jsx-wrap-multilines': 'off',
        'react/no-access-state-in-setstate': 1,
        'react/no-array-index-key': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-find-dom-node': 1,
        'react/no-is-mounted': 1,
        'react/no-multi-comp': 0,
        'react/no-redundant-should-component-update': 1,
        'react/no-string-refs': 1,
        'react/no-this-in-sfc': 1,
        'react/no-unescaped-entities': 1,
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/self-closing-comp': 1,
        'react/sort-comp': 1,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 1,
        'react/style-prop-object': 1,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

    }
}
