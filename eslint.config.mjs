import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"],
    },
  },

  ...pluginVue.configs["flat/essential"],
];