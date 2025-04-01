module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint", "prettier", "import"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: "module"
  },
  env: {
    "react-native/react-native": true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "off",
    "react-native/split-platform-components": "error",
    "react-native/no-raw-text": ["warn", { skip: ["CustomText"] }],

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        tabWidth: 2,
        bracketSameLine: false,
        bracketSpacing: true,
        jsxSingleQuote: false,
        singleQuote: false,
        printWidth: 100,
        arrowParens: "always"
      }
    ],

    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignore: [-1, 0, 1]
      }
    ],
    "no-console": ["error"],
    "no-duplicate-imports": ["error"],
    "no-nested-ternary": ["error"],
    "no-return-await": ["error"],
    "require-await": ["error"]
  }
};
