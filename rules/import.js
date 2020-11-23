module.exports = {
    rules:
        {
            'import/extensions': 0,
            'import/first': 1,
            'import/newline-after-import': 1,
            'import/no-cycle': [2, { ignoreExternal: false}],
            'import/no-default-export': 1,
            'import/no-duplicates': 1,
            'import/no-extraneous-dependencies': 0,
            'import/no-mutable-exports': 0,
            'import/no-named-as-default': 1,
            'import/no-named-default': 1,
            'import/no-unresolved': 0,
            'import/no-useless-path-segments': [1, {commonjs: true}],
            'import/order': [1, {
                "groups": [
                    [
                        "builtin",
                        "external",
                        "internal"
                    ]
                ]
            }],
            'import/prefer-default-export': 0,
            'import/named': 2,
            'import/export': 2,
            'import/no-named-as-default-member': 2,
            'import/no-amd': 2,
            'import/no-absolute-path': 2,
            'import/no-dynamic-require': 2,
            'import/no-webpack-loader-syntax': 2,
            'import/no-self-import': 2

        }
}
