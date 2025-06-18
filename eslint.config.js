import js from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import eslintPluginReact from 'eslint-plugin-react'; // Add this

export default [
  js.configs.recommended,
  {
    ...eslintPluginUnicorn.configs.recommended,
    rules: {
      'unicorn/no-array-reduce': 'off',
      'unicorn/filename-case': 'off',
    },
  },
  {
    // React-specific settings
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error', // This fixes component usage detection
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
