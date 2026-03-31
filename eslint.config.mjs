import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginJest from "eslint-plugin-jest";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      vue: pluginVue,
      jest: pluginJest,
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"],

      "jest/no-disabled-tests": "warn",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },

  ...pluginVue.configs["flat/essential"],
];