#### atom 配置 eslint
<br>

#### 插件安装
> atom插件：linter-eslint
> 安装完成勾选 "Lint-HTML-Files" 启用对vue文件内的js校验
<br>

#### .eslintrc.js 和 .eslintignore
> 如果通过vue-cli脚手架工具生成项目会自带这两个文件，eslintrc.js（eslint校验规则）和.eslintignore校验忽略的目录
> 脚手架生成的校验规则较为严格并且与js-beautify格式化的风格有部分出入，根据实际情况做了部分调整，文件如下：

``` bash
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 2
      : 0,
    //引号控制
    'quotes': 0,
    //关键字后面加空格,与自动格式化有出入
    'keyword-spacing': 0,
    //函数声明时括号与函数名间加空格,与自动格式化有出入
    "space-before-function-paren": 0,
    //始终使用 === 替代 ==,与部分业务代码有出入
    "eqeqeq": 0,
    //多行 if 语句的的括号不能省，与部分业务代码有出入，之后项目必须加上
    "curly": 0,
    //不要使用分号，与部分业务代码有出入
    "semi": 0,
    //注释首尾留空格，无需控制
    "spaced-comment": 0,
    //使用两个空格进行缩进，与格式化插件有出入
    "indent": 0,
    //不要丢掉异常处理中err参数，与部分业务代码有出入，之后项目必须处理
    "handle-callback-err": 0,
    //与自动格式化有出入
    "key-spacing": 0
  }
}

```

#### eslint 常用技巧

> 禁用之后的代码
``` bash
/* eslint-disable */
```
> 禁用单行的代码
``` bash
/* eslint-disable no-new */
```
> eslint错误级别
> "off" or 0 - 关闭规则
> "warn" or 1 - 将规则视为一个警告（不会影响退出码）
> "error" or 2 - 将规则视为一个错误 (退出码为1)

<br>

#### eslint 参考资料
>中文文档：https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
