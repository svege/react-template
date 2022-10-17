module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'header-match-team-pattern': ({ header }) => {
          const headerPattern = /^(feat|chore|fix|docs|refactor|style): (.*)$/;
          const errorMsg = "commit message must be in format '[type]: [subject]'";

          return headerPattern.test(header) ? [true, ''] : [false, errorMsg];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'subject-empty': [0, 'never'],
    'type-empty': [0, 'never'],
  },
};
