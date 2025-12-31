// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier を ESLint 経由で実行
      "prettier/prettier": "error",

      // React
      "react/react-in-jsx-scope": "off", // Next.js では不要
    },
  },

  // Prettier と競合するルールを無効化
  eslintConfigPrettier,
];
