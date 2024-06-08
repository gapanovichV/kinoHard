const { eslint } = require("@siberiacancode/eslint")

module.exports = {
  ...eslint.node,
  overrides: [
    ...eslint.node.overrides,
    {
      files: ["*.ts", "*.js"],
      rules: {
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "no-underscore-dangle": "off",
        "no-restricted-syntax": "off",
        "no-multi-assign": "off",
        "prettier/prettier": "off",
        "@typescript-eslint/require-await": "off",
        "no-void": "off",
        "no-unnecessary-type-assertion": "off",
      }
    }
  ]
}
