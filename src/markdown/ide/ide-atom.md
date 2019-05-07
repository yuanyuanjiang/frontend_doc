#### ATOM
<br>
#### 插件安装（mac）
> "command + ,/ctrl + ," 打开插件安装页面

#### 插件安装（windows）
> 方法一：ide 设置中 install packages（必须翻墙下载）<br>
> 方法二：切到目录C:\Users\用户名\\.atom\packages下，利用git bash安装([atom官方插件库](https://atom.io/packages))，git clone之后，需要切到具体的插件目录下，初始化插件的依赖 npm install，重启atom

> 注意事项：<br>
**1. emmet语法在vue组件内失效** <br>
> C:\\Users\\用户名\\.atom 目录下，打开keymap.cson 文件，最后一行添加：
```bash
'atom-text-editor[data-grammar~="vue"]:not([mini])':
'tab': 'emmet:expand-abbreviation-with-tab'
```
**2. template标签格式化时失效** <br>
> 设置atom-beauty插件，vue的配置下，Unformatted 参数去掉template

#### vue插件

> language-vue <br>
> vuejs2-snippets

#### 其它插件
> Platformio-Ide-Terminal：命令行插件，快捷键ctrl-`<br>
> atom-beautify：代码格式化，支持保存时格式化，选择"Settings--Beautify on save"<br>
> File-Icons：在文件前新显示图标<br>
> minimap：前屏幕所处相对位置<br>
> 文件跳转先装hyperclick再装js-hyperclick<br>
> autocomplete-modules模块路径自动匹配<br>
> docblockr 注释插件<br>


#### React+ReactNative插件
> react-snippets <br>
> react-native-snippets react文件模板生成 <br>
> atom-react-autocomplete 项目内，组件名及状态的自动补全<br>
> Nuclide facebook官方推荐工具集, [链接](http://www.hangge.com/blog/cache/detail_1490.html)

