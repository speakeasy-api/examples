import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },
  ignores: ['**/migrations/*'],
}, {
  rules: {
    'no-console': ['off'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'perfectionist/sort-imports': ['error', {
      internalPattern: ['@/**'],
    }],
  },
    overrides: [
    {
      files: ['*.md'],
      rules: {
        'format/prettier': 'off',
      },
    },
  ],
});
