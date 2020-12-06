module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        svelteSortOrder: 'scripts-markup-styles',
        svelteBracketNewLine: true,
        svelteStrictMode: true,
        svelteAllowShorthand: false,
        svelteIndentScriptAndStyle: false,
      },
    },
  ],
};
