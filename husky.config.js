module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true'
  }
};
