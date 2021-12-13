/**
 *可查看配置地址 https://cloud.tencent.com/developer/section/1135629
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 对象的最后一个属性末尾必须有逗号
    // @off 没必要限制
    'comma-dangle': 'off',
    // jsx 中的属性必须用单引号
    'jsx-quotes': ['error', 'prefer-single'],
    // 在对象文字或解构赋值的大括号内强制执行一致的换行符
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always', // 需要大括号内的换行符
        ObjectPattern: {
          // 配置解构赋值的对象模式需要换行符
          multiline: true,
        },
      },
    ],
    // 函数必须有名字
    // @off 没必要限制
    'func-names': 'off',
  },
};
