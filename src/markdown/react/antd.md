#### react 添加 antd
<br>

#### 按需加载（未eject配置）
> [参考官网-高级配置](http://ant.design/docs/react/use-with-create-react-app-cn)
<br>

#### 按需加载（eject配置之后，添加antd）
**1. 安装babel-plugin-import** <br>
``` bash
npm install babel-plugin-import --dev
```

**2. 修改babel（package.json）** <br>

``` bash
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  }
```
**3. 使用** <br>

``` bash
import { Input, Button, Form, Row, Col } from "antd";
```
