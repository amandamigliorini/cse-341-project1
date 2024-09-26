import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: globals.node, 
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  pluginJs.configs.recommended,
];