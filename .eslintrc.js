module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      // 'prettier',
      // 'prettier/react',
      // 'prettier/@typescript-eslint',
      // 'plugin:prettier/recommended',
  ],
  env: {
      browser: true,
      jasmine: true,
      jest: true,
      node: true,
  },
  // Airbnb's ESLint config requires this
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-function-return-type': {
      allowExpressions: true
    }
  }
}