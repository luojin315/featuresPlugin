module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  singleQuote: true, // 使用单引号
  printWidth: 200, // 超过最大值换行
  htmlWhitespaceSensitivity: "ignore",
  semi: true, // 结尾分号
  bracketSpacing: true, // 对象文字中的括号之间打印空格
  jsxSingleQuote: true, // 在jsx中使用单引号
  arrowParens: "always", // 省略括号 例子：x => x
};
// 配置详情地址：https://prettier.io/docs/en/options.html
