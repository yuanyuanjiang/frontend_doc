```bash
module.exports = {
  "extends": "react-app",
  "rules": {
    "import/no-webpack-loader-syntax": 0,
    "no-script-url": 0,
    "jsx-a11y/href-no-hash": 2,
    "indent": [
      "error",
      2,
      {
      "SwitchCase": 1,
      "flatTernaryExpressions": true
      }
    ],
    "space-before-function-paren": 2,
    "no-class-assign": 2, //禁止给类赋值
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-empty": 2, //块语句中的内容不能为空
    "no-func-assign": 2, //禁止重复的函数声明
    "no-redeclare": 2, //禁止重复声明变量
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-undef": 2, //不能有未定义的变量
    "no-use-before-define": 2, //未定义前不能使用
    "no-var": 2,
    "use-isnan": 2,
    "no-mixed-spaces-and-tabs": 2, //禁止混用tab和空格
    "react/boolean-prop-naming": 2
  }
}
```