module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
    },
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ["webpack.*", "dist"],
    extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"],
    rules: {
        // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
}
