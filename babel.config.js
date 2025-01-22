module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
          verbose: false
        }
      ],
      [
        "module-resolver",
        {
          root: ".",
          extensions: [".tsx", ".ts", ".js", ".jsx", ".png", "json"],
          alias: {
            "@lottie": "./assets/lottie",
            "@images": "./assets/images",
            "@components": "./src/components",
            "@schemas": "./src/schemas",
            "@services": "./src/services",
            "@type": "./src/types",
            "@utils": "./src/utils",
            "@constants": "./src/constants",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@context": "./src/context",
            "@styles": "./src/styles"
          }
        }
      ]
    ]
  };
};
