module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'jest'],
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    radix: 'off',
    'no-use-before-define': 'off',
    'react/prefer-stateless-function': 'off',
    'no-unused-vars': 'warn',
    'unicorn/no-null': 'off',
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    'no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    camelcase: 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'no-empty-function': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
