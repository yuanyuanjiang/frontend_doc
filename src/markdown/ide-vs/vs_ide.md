## vscode插件
#### 版本
> vscode：1.23.1 （vscode有新版本会自动提示更新）

- Emmet支持内置于VS Code中，不需要扩展。Emmet 2.0支持Emmet的大部分操作，包括扩展Emmet缩写和片段。(Emmet缩写和片段写法参考：https://code.visualstudio.com/docs/editor/emmet).
- ESLint: 开源的 JavaScript 代码检查工具，由Node.js 编写。npm install -g eslint 全局安装eslint,在终端中运行eslint --init配置项目的.eslintrc文件（规则参考：http://eslint.cn/docs/rules/）
- React-Native/React/Redux snippets for es6/es7：React-Native/React/Redux/es6/es7/flowtype（流类型）的代码段
- EditorConfig for VS Code(vscode无需安装): 创建.editorconfig配置文件，统一团队代码风格https://www.cnblogs.com/xiaohuochai/p/7160067.html
- Prettier - Code formatter：格式化代码
- HTML Snippets：超级实用且初级的 H5代码片段以及提示
- vscode-icon：vscode 资源树目录加上图标，很好看
- Atuo Rename Tag：修改html标签，自动帮你完成尾部闭合标签的同步修改
- Git History：可以查看Git log, file, 和line 历史记录
- GitLens:丰富的git日志插件
- TODO Highlight：TODO注释
- Color Highlight: 颜色值在代码中高亮显示
- open-in-browser：在浏览器中预览HTML文件

#### 非必须插件
- Live Server: 为静态和动态页面启动具有本地重载功能的开发本地服务器
- HTML CSS Support：html标签上写class，智能提示当前项目所支持的样式，支持scss文件检索
- Path Intellisense：自动路径补全
- Bracket Pair Colorizer：对括号对进行着色,在括号多层嵌套时，很清晰
- markdownlint：markdown 语法提示器
- Color Picker: color拾色器
- JavaScript (ES6) code snippets: ES6语法代码段
- Dracula Official：比较好看的VScode主题

#### Settings配置

```bash
// 用户设置
{
    "editor.wordWrap": "on",
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorTheme": "Dracula",
    "editor.tabSize": 2,
    "prettier.eslintIntegration": true,
    "emmet.syntaxProfiles": { "javascript": "jsx" },
        "eslint.autoFixOnSave": true,
        "git.enableSmartCommit": true,
        "gitlens.advanced.messages": {
            "suppressCommitHasNoPreviousCommitWarning": false,
            "suppressCommitNotFoundWarning": false,
            "suppressFileNotUnderSourceControlWarning": false,
            "suppressGitVersionWarning": false,
            "suppressLineUncommittedWarning": false,
            "suppressNoRepositoryWarning": false,
            "suppressResultsExplorerNotice": false,
            "suppressShowKeyBindingsNotice": true,
            "suppressUpdateNotice": false,
            "suppressWelcomeNotice": true
        },
        "todohighlight.isEnable": true,
        "gitlens.keymap": "alternate",
        "git.confirmSync": false,
        "gitlens.historyExplorer.enabled": true,
        "emmet.triggerExpansionOnTab": true,
        "javascript.implicitProjectConfig.experimentalDecorators": false,
        "emmet.includeLanguages": {
            "javascript": "javascriptreact",
            "vue-html": "html"
        },
        "gitlens.gitExplorer.files.layout": "auto",
        "fileheader.Author": "hongdeng.ren",
        "fileheader.LastModifiedBy": "hongdeng.ren"
    }
```
```bash
// 工作区设置 mac: command+,
"editor.formatOnSave": true,
```

#### 项目根目录新建.eslintrc.js 文件，详细配置信息：
* [*.eslintrc.js*](http://git.server.gingkoo/wei.wang/frontend-doc/blob/master/src/markdown/ide-vs/react-eslint-config.md)
