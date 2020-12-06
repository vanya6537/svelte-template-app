module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
      },
    ],
  ],
  plugins: ['add-module-exports', 'inline-dotenv', '@babel/plugin-transform-strict-mode'],
};
