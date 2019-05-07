#### react-native 配置 eslint
<br>

#### 安装eslint(尽量全局安装)
```bash
npm install eslint -g

eslint --init 
```
> init之后，操作如下：
出现选项界面,通过上下按键去选择.<br>
ESLint 风格选 Use a popular style guide<br>
遵循哪个标准选 Airbnb<br>
配置文件格式选 JSON 或 JavaScript<br>
是否支持 React 选 y<br>
会在项目根目录生成一个名为 .eslintrc.json 的配置文件.更改如下：
```bash
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "jest": true
  },
  "plugins": [
    "react", "react-native"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "never"
      }
    ],
    "no-underscore-dangle": [
      "error", {
        "allowAfterThis": true
      }
    ]
  },
  "globals": {
    "fetch": true
  }
}
```
<br>

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