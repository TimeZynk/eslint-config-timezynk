module.exports = {

    extends: [
        "../index.js"
    ],
    plugins: [
        "@typescript-eslint/eslint-plugin"
    ],
    rules:{
        '@typescript-eslint/no-unused-vars':1,
        '@typescript-eslint/adjacent-overload-signatures':2,
        '@typescript-eslint/ban-ts-comment':2,
        '@typescript-eslint/ban-types':2,
        '@typescript-eslint/explicit-module-boundary-types':1,
        '@typescript-eslint/no-array-constructor':2,
        '@typescript-eslint/no-empty-function':2,
        '@typescript-eslint/no-empty-interface':2,
        '@typescript-eslint/no-explicit-any':1,
        '@typescript-eslint/no-extra-non-null-assertion':2,
        '@typescript-eslint/no-extra-semi':2,
        '@typescript-eslint/no-inferrable-types':2,
        '@typescript-eslint/no-misused-new':2,
        '@typescript-eslint/no-namespace':2,
        '@typescript-eslint/no-non-null-asserted-optional-chain':2,
        '@typescript-eslint/no-non-null-assertion':1,
        '@typescript-eslint/no-this-alias':2,
        '@typescript-eslint/no-var-requires':2,
        '@typescript-eslint/prefer-as-const':2,
        '@typescript-eslint/prefer-namespace-keyword':2,
        '@typescript-eslint/triple-slash-reference':2
    }
}
