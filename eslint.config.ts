import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { js, prettier, reactPlugin },
    extends: ['plugin:react/jsx-runtime'],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],
      'no-unused-vars': 'warn',
    },
  },
  tsPlugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
]);
