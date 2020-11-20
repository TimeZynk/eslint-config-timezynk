module.exports = {
    rules:{

        'react/jsx-boolean-value': [1,  'never', { always: [] } ],
        'react/jsx-closing-bracket-location': [1, 'line-aligned'],
        'react/jsx-closing-tag-location': 1,
        'react/jsx-curly-newline': [1, { multiline: 'consistent', singleline: 'consistent' }],
        'react/jsx-curly-spacing': [1, 'never', { allowMultiline: true }],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-filename-extension':[1, { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] }],
        'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
        'react/jsx-fragments': [1, 'element'],
        'react/jsx-key': 1,
        'react/jsx-max-props-per-line': [1,  { maximum: 1, when: 'multiline' } ],
        'react/jsx-no-bind': [1, {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true
        }
        ],
        'react/jsx-no-target-blank': [1, { enforceDynamicLinks: 'always' } ],
        'react/jsx-no-undef': 1,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': [1, { html: 'enforce', custom: 'enforce', exceptions: [] } ],
        'react/jsx-tag-spacing': 1,
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-no-duplicate-props': [2, {ignoreCase:true}],
        'react/jsx-pascal-case':[2, { allowAllCaps: true, ignore: [] } ],
        'react/jsx-uses-react':2,
        'react/jsx-uses-vars':2,
        'react/jsx-no-comment-textnodes':2,
        'react/jsx-curly-brace-presence':2,
        'react/jsx-props-no-multi-spaces':2,

    }
}
