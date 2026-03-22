import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'error',
    style: 'error',
    perf: 'warn',
    restriction: 'warn',
    pedantic: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'import/no-cycle': ['error', { maxDepth: 3 }],
    'typescript/no-floating-promises': 'error',
    'accessor-pairs': 'warn',
    'no-self-compare': 'error',
  },

  plugins: ['import', 'react', 'react-perf'],

  options: {
    typeAware: true,
    typeCheck: true,
    reportUnusedDisableDirectives: 'warn',
  },

  ignorePatterns: [
    'dist/**',
    'coverage/**',
    'vendor/**',
    'test/snapshots/**',
    '.vscode/**',
    './vite.config.js',
  ],
});
