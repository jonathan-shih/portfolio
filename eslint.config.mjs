import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  js.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
		{
			rules: {
				'unicorn/better-regex': 'warn',
			},
		},
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    files: ["**/*.{jsx,js}"],
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y
    },
    settings: {
      react: {
        version: "detect"
      }
    },
  }
];