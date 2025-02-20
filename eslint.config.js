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
    "react-native/split-platform-components": "error",
    "rеact-nativе/no-inline-styles": "warn",
    "react-native/no-raw-text": ["warn", { skip: ["CustomText"] }],

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],

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
    ]
  }
};
