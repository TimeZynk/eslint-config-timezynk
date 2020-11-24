module.exports = {

    extends: [
        "eslint:recommended",
        require.resolve('./rules/import'),
        require.resolve('./rules/prettier')
    ],
    plugins: [
        'import',
        'babel',
        'prettier'
    ],
    env: {
        node: true,
        jest: true,
        amd: true,
        es6: true,
    },
    settings: {
        'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
        'import/core-modules': [],
        'import/extensions': ['.js', '.mjs', '.jsx'],
        'import/resolver': {node: {extensions: ['.js', '.jsx', '.ts', '.tsx']}},
        'propWrapperFunctions': ['forbidExtraProps', 'exact', 'Object.freeze'],

    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: false,
            objectLiteralDuplicateProperties: false
        }

    },
    rules: {
        'array-bracket-spacing': [1, 'never'],
        'array-callback-return': [1,{ allowImplicit: true, checkForEach: false }],
        'arrow-body-style': 0,
        'arrow-parens': [1, 'always'],

        'block-scoped-var': 1,
        'block-spacing': [1, 'always'],
        'brace-style': [1,'1tbs', { allowSingleLine: true }],

        camelcase: 0,
        'class-methods-use-this': 0,
        'comma-dangle': 1,
        'comma-spacing': [1, { before: false, after: true }],
        'consistent-return': 1,
        curly: [1, 'multi-line'],
        'default-case': [1, { commentPattern: '^no default$' }],
        'dot-notation': [1, {allowPattern: '^[a-z]+(_[a-z]+)+$'}],
        'eol-last': [1, 'always'],
        'func-call-spacing': [1, 'never'],
        'func-names': 1,
        'function-paren-newline': 1,
        'global-require': 0,
        'guard-for-in': 1,
        'jsx-quotes': [1, 'prefer-double'],
        'key-spacing': [1, {beforeColon: false, afterColon: true}],
        'keyword-spacing': [1,     {
            "before": true,
            "after": true,
            "overrides": {
                "return": {
                    "after": true
                },
                "throw": {
                    "after": true
                },
                "case": {
                    "after": true
                }
            }
        }],
        'lines-between-class-members': [1, 'always',{ exceptAfterSingleLine: false } ],
        'max-len': 0,
        'max-classes-per-file': 0,
        'new-cap': [1,  {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ],
            properties: true
        }
        ],
        'new-parens': 1,
        'newline-per-chained-call': 1,
        'no-bitwise': 1,
        'no-cond-assign': [1, 'always'],
        'no-confusing-arrow': [1, { allowParens: true }],
        'no-continue': 1,
        'no-else-return': [1,  { allowElseIf: false } ],
        'no-extra-semi': 1,
        'no-lonely-if': 1,
        'no-loop-func': 1,
        'no-mixed-operators': [1,   {
            "groups": [
                [
                    "%",
                    "**"
                ],
                [
                    "%",
                    "+"
                ],
                [
                    "%",
                    "-"
                ],
                [
                    "%",
                    "*"
                ],
                [
                    "%",
                    "/"
                ],
                [
                    "/",
                    "*"
                ],
                [
                    "&",
                    "|",
                    "<<",
                    ">>",
                    ">>>"
                ],
                [
                    "==",
                    "!=",
                    "===",
                    "!=="
                ],
                [
                    "&&",
                    "||"
                ]
            ],
            "allowSamePrecedence": false
        }],
        'no-mixed-spaces-and-tabs': 1,
        'no-multi-assign': 1,
        'no-multi-spaces': [1, { ignoreEOLComments: false } ],
        'no-multiple-empty-lines': [1, { max: 2, maxBOF: 1, maxEOF: 0 } ],
        'no-nested-ternary': 1,
        'no-param-reassign': [1,  {
            props: true,
            ignorePropertyModificationsFor: [
                'acc',
                'accumulator',
                'e',
                'ctx',
                'req',
                'request',
                'res',
                'response',
                '$scope',
                'staticContext'
            ]
        }
        ],
        'no-plusplus': [1, {allowForLoopAfterthoughts: true}],
        'no-prototype-builtins': 1,
        'no-restricted-syntax': [1,   {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
        },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'no-return-assign':[ 1, 'always'],
        'no-sequences': 1,
        'no-shadow': 1,
        'no-spaced-func': 1,
        'no-tabs': 1,
        'no-throw-literal': 1,
        'no-trailing-spaces': [1,{ skipBlankLines: false, ignoreComments: false }],
        'no-undef': 1,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': [1,  { defaultAssignment: false } ],
        'no-unused-expressions': 0,
        'no-unused-vars': 1,
        'no-use-before-define': [1, { functions: true, classes: true, variables: true }],
        'no-useless-concat': 1,
        'no-useless-escape': 1,
        'no-useless-rename': [1,  {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],
        'no-useless-return': 1,
        'no-var': 1,
        'no-whitespace-before-property': 1,
        'object-curly-newline': 'off',
        'object-curly-spacing': [1, 'always'],
        'object-property-newline': [1, {
            allowAllPropertiesOnSameLine: true,
            allowMultiplePropertiesPerLine: false
        }],
        'object-shorthand': [1, 'always', { ignoreConstructors: false, avoidQuotes: true }],
        'one-var': [1, 'never'],
        'one-var-declaration-per-line': [1, 'always'],
        'operator-assignment': [1, 'always'],
        'operator-linebreak': 0,
        'padded-blocks': [1, { blocks: 'never', classes: 'never', switches: 'never' },
            { allowSingleLineBlocks: true }],
        'prefer-arrow-callback': [1, { allowNamedFunctions: true, allowUnboundThis: true } ],
        'prefer-const':[ 1,  { destructuring: 'any', ignoreReadBeforeAssign: true }],
        'prefer-destructuring': [1, {
            VariableDeclarator: { array: false, object: true },
            AssignmentExpression: { array: true, object: false }
        },
            { enforceForRenamedProperties: false }],
        'prefer-object-spread': 1,
        'prefer-promise-reject-errors': [1, { allowEmptyReject: true } ],
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'prefer-template': 1,
        'quote-props': [1, 'as-needed',
            { keywords: false, unnecessary: true, numbers: false }
        ],
        quotes: [1, 'single', {avoidEscape:true}],
        radix: 1,
        semi: [1,'always'],
        'semi-spacing': [1, { before: false, after: true }],
        'space-before-blocks': 1,
        'space-before-function-paren':[ 1, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': [1,'never'],
        'space-infix-ops': 1,
        'space-unary-ops': [1,  { words: true, nonwords: false, overrides: {} } ],
        'spaced-comment':[ 1, 'always', {
            "line": {
                "exceptions": [
                    "-",
                    "+"
                ],
                "markers": [
                    "=",
                    "!"
                ]
            },
            "block": {
                "exceptions": [
                    "-",
                    "+"
                ],
                "markers": [
                    "=",
                    "!",
                    ":",
                    "::"
                ],
                "balanced": true,
            }
        }
        ],
        strict: [1, 'never'],
        'switch-colon-spacing': 0,
        'vars-on-top': 1,
        'valid-typeof':[ 2 , { requireStringLiterals: true } ],
        'wrap-iife': 1,
        'yoda': 1,
        'arrow-spacing': [2, {before: true, after: true}],
        'generator-star-spacing': [2, {before: false, after: true}],
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'prefer-numeric-literals': 2,
        'rest-spread-spacing': [2, 'never'],
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'after'],
        'no-label-var': 2,
        'no-restricted-globals': [2, 'isFinite', 'isNaN',
            'addEventListener', 'blur', 'close',
            'closed', 'confirm', 'defaultStatus',
            'defaultstatus', 'event', 'external',
            'find', 'focus', 'frameElement',
            'frames', 'history', 'innerHeight',
            'innerWidth', 'length', 'location',
            'locationbar', 'menubar', 'moveBy',
            'moveTo', 'name', 'onblur',
            'onerror', 'onfocus', 'onload',
            'onresize', 'onunload', 'open',
            'opener', 'opera', 'outerHeight',
            'outerWidth', 'pageXOffset', 'pageYOffset',
            'parent', 'print', 'removeEventListener',
            'resizeBy', 'resizeTo', 'screen',
            'screenLeft', 'screenTop', 'screenX',
            'screenY', 'scroll', 'scrollbars',
            'scrollBy', 'scrollTo', 'scrollX',
            'scrollY', 'self', 'status',
            'statusbar', 'stop', 'toolbar',
            'top'
        ],
        'no-undef-init': 2,
        'comma-style': [2,
            'last', {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false
                }
            }
        ],
        'computed-property-spacing': [2, 'never'],
        'linebreak-style': [2, 'unix'],
        'lines-around-directive': [2, {before: 'always', after: 'always'}],
        'no-new-object': 2,
        'nonblock-statement-body-position': [2,  'beside', { overrides: {} }],
        'semi-style': [2, 'last'],
        'template-tag-spacing': [2, 'never'],
        'unicode-bom': [2, 'never'],
        'no-buffer-constructor': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-await-in-loop': 2,
        'no-console': 1,
        'no-template-curly-in-string': 2,
        'no-self-assign': [2, {props: true}],
        'dot-location': [2, 'property'],
        'eqeqeq': [2, 'always', {null: 'ignore'}],
        'no-alert': 1,
        'no-array-constructor': 2,
        'no-empty-function': 2,
        'no-caller': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-floating-decimal': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': [2, {allowLoop: false, allowSwitch: false}],
        'no-lone-blocks': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-restricted-properties': [2,
            {

                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated'
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead'
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead'
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead'
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead'
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead'
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead'
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.'
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.'
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.'
            }
        ],
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-void': 2
    }
}
