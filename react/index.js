module.exports = {
    "extends": ["../typeScript/index.js",
        require.resolve('./rules/jsx-a11y'),
        require.resolve('./rules/jsx'),
        require.resolve('./rules/hooks')
    ],
    env: {
        browser: true,
        commonjs: true
    },
    settings:{react: { version: 'detect', pragma: 'React' }},
    plugins: ['react',  'react-hooks', 'jsx-a11y'],
    rules: {
        'react/button-has-type': [1,{ button: true, submit: true, reset: false }],
        'react/default-props-match-prop-types': [1,  { allowRequiredDefaults: false }],
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': [1, {
            forbid: [ 'any', 'array', 'object' ],
            checkContextTypes: true,
            checkChildContextTypes: true
        }],
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
        'react/no-unused-prop-types': [1,{ customValidators: [], skipShapeProps: true }],
        'react/no-unused-state': 1,
        'react/prefer-es6-class': [1, 'always'],
        'react/prefer-stateless-function': [1,{ ignorePureComponents: true } ],
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/self-closing-comp': 1,
        'react/sort-comp': [1,  {
            "order": [
                "static-variables",
                "static-methods",
                "instance-variables",
                "lifecycle",
                "/^on.+$/",
                "getters",
                "setters",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "instance-methods",
                "everything-else",
                "rendering"
            ],
            "groups": {
                "lifecycle": [
                    "displayName",
                    "propTypes",
                    "contextTypes",
                    "childContextTypes",
                    "mixins",
                    "statics",
                    "defaultProps",
                    "constructor",
                    "getDefaultProps",
                    "getInitialState",
                    "state",
                    "getChildContext",
                    "getDerivedStateFromProps",
                    "componentWillMount",
                    "UNSAFE_componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "UNSAFE_componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "UNSAFE_componentWillUpdate",
                    "getSnapshotBeforeUpdate",
                    "componentDidUpdate",
                    "componentDidCatch",
                    "componentWillUnmount"
                ],
                "rendering": [
                    "/^render.+$/",
                    "render"
                ]
            }
        }],
        'react/state-in-constructor': 0,
        'react/static-property-placement': [1, 'property assignment'],
        'react/style-prop-object': 1,
        'react/no-danger':1,
        'react/no-deprecated':2,
        'react/no-did-update-set-state':2,
        'react/no-will-update-set-state':2,
        'react/no-unknown-property':2,
        'react/react-in-jsx-scope':2,
        'react/require-render-return':2,
        'react/no-render-return-value':2,
        'react/no-danger-with-children':2,
        'react/no-children-prop':2,
        'react/forbid-foreign-prop-types':[1, { allowInPropTypes: true } ],
        'react/void-dom-elements-no-children':2,
        'react/no-typos':2
    }
}
