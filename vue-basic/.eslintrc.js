// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
  },

  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier/vue'],
  // required to lint *.vue files
  plugins: ['import'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // 'prettier/prettier': 1,
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'vue/require-default-prop': 0,
    // 'vue/max-attributes-per-line': [
    //   1,
    //   {
    //     singleline: 20,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],
    // 'vue/html-closing-bracket-newline': [
    //   1,
    //   {
    //     singleline: 'never',
    //     multiline: 'always',
    //   },
    // ],

    // 'vue/html-self-closing': [
    //   'error',
    //   { html: { void: 'always', normal: 'always', component: 'always' } },
    // ],
    // 'vue/component-name-in-template-casing': [1, 'kebab-case'],
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'PascalCase' | 'kebab-case',
    //   {
    //     registeredComponentsOnly: false,
    //   },
    // ],
    // 'vue/html-indent': [1, 2, { attribute: 1, closeBracket: 0 }],
  },
}
