module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./src/relay/schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/index.d.ts",
  ],
  language: "typescript",
  extensions: ["js", "jsx", "ts", "tsx"],
};
