module.exports = {

    extends: [
        "../index.js"
    ],
    plugins: [
        "@typescript-eslint/eslint-plugin"
    ],
    rules:{
        '@typescript-eslint/no-unused-vars':1,
        '@typescript-eslint/adjacent-overload-signatures':1,
        '@typescript-eslint/ban-ts-comment':1,
        '@typescript-eslint/ban-types':1,
        '@typescript-eslint/explicit-module-boundary-types':1,
        '@typescript-eslint/no-array-constructor':1,
        '@typescript-eslint/no-empty-function':1,
        '@typescript-eslint/no-empty-interface':1,
        '@typescript-eslint/no-explicit-any':1,
        '@typescript-eslint/no-extra-non-null-assertion':1,
        '@typescript-eslint/no-extra-semi':1,
        '@typescript-eslint/no-inferrable-types':1,
        '@typescript-eslint/no-misused-new':1,
        '@typescript-eslint/no-namespace':1,
        '@typescript-eslint/no-non-null-asserted-optional-chain':1,
        '@typescript-eslint/no-non-null-assertion':1,
        '@typescript-eslint/no-this-alias':1,
        '@typescript-eslint/no-var-requires':1,
        '@typescript-eslint/prefer-as-const':1,
        '@typescript-eslint/prefer-namespace-keyword':1,
        '@typescript-eslint/triple-slash-reference':1
    }
}
