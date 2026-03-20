import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",
    "eslint/no-alert": "error",
    "eslint/no-console": "warn",
    "import/no-cycle": ["error", { maxDepth: 3, }],
    "typescript/no-floating-promises": "error",
    "accessor-pairs": 'warn',
    
  },

  plugins: ["import", "react", "react-perf"],

  options: {
    typeAware: true,
    typeCheck: true,
    reportUnusedDisableDirectives: 'warn',
  },

  ignorePatterns: ["dist/**", "coverage/**", "vendor/**", "test/snapshots/**", ".vscode/**", "./vite.config.js"]
});