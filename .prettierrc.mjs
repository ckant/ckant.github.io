// noinspection JSUnusedGlobalSymbols
export default {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
  plugins: ["prettier-plugin-svelte", "prettier-plugin-css-order"],
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
}
