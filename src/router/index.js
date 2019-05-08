import Layout from "@/Layout.vue";
//node 安装
import NodeDoc from "@/markdown/env/node-doc.md";

//ide安装
import IDEAtom from "@/markdown/ide/ide-atom.md";
import EslintDoc from "@/markdown/ide/eslint-doc.md";

//mobile
import MobileBase from "@/markdown/mobile/base.md";
import ScreenFit from "@/markdown/mobile/screen-fit.md";
import Native from "@/markdown/mobile/native.md";

//react
import ReactEvn from "@/markdown/react/evn.md";

//react-native
import MacOs from "@/markdown/react-native/mac-os.md";
import Widows from "@/markdown/react-native/window.md";
import Screen from "@/markdown/react-native/screen.md";
import Font from "@/markdown/react-native/font.md";
import EslintRN from "@/markdown/react-native/eslint.md";

//运营平台说明
import OmsLogin from "@/markdown/oms/login.md";
import OmsPlatform from "@/markdown/oms/platform.md";
import OMSSubTpl from "@/markdown/oms/sub-tpl.md";
import OmsZoo from "@/markdown/oms/zoo.md";
import OmsSystem from "@/markdown/oms/system.md";
import ProjectWrite from "@/markdown/oms/projectWrite.md";

//资料
import MaterialMarkdown from "@/markdown/material/markdown.md";
import MaterialReact from "@/markdown/material/react.md";
import MaterialReactNative from "@/markdown/material/react-native.md";

//nginx
import NginxMarkDown from "@/markdown/nginx/env.md";

//

export default [
  {
    path: "",
    name: "node准备",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "node-doc",
        name: "node环境搭建",
        component: NodeDoc
      }
    ]
  },
  {
    path: "",
    name: "IDE准备",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "ide-atom",
        name: "atom",
        component: IDEAtom
      },
      {
        path: "eslint-doc",
        name: "eslint配置",
        component: EslintDoc
      }
    ]
  },
  {
    path: "",
    name: "移动端",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "ative",
        name: "赤兔宝开发及上线流程",
        component: Native
      },
      {
        path: "mobile-base",
        name: "基础",
        component: MobileBase
      },
      {
        path: "screen-fit",
        name: "多屏适配",
        component: ScreenFit
      }
    ]
  },
  {
    path: "",
    name: "react",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "react-evn",
        name: "React开发环境",
        component: ReactEvn
      }
    ]
  },
  {
    path: "",
    name: "react-native",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "mac-os",
        name: "MacOs开发环境",
        component: MacOs
      },
      {
        path: "windows",
        name: "widows开发环境",
        component: Widows
      },
      {
        path: "screen",
        name: "屏幕适配",
        component: Screen
      },
      {
        path: "font",
        name: "字体文件",
        component: Font
      },,
      {
        path: "eslint",
        name: "eslint代码规范",
        component: EslintRN
      }
    ]
  },
  {
    path: "",
    name: "运营平台",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "OmsLogin",
        name: "登陆",
        component: OmsLogin
      },
      {
        path: "OmsPlatform",
        name: "主项目",
        component: OmsPlatform
      },
      {
        path: "OMSSubTpl",
        name: "子项目模板",
        component: OMSSubTpl
      },
      {
        path: "OmsZoo",
        name: "赤兔宝",
        component: OmsZoo
      },
      {
        path: "OmsSystem",
        name: "系统管理",
        component: OmsSystem
      },
      {
        path: "ProjectWrite",
        name: "项目书写语法规范",
        component: ProjectWrite
      }
    ]
  },
  {
    path: "",
    name: "资料",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "MaterialMarkdown",
        name: "Markdown",
        component: MaterialMarkdown
      },
      {
        path: "MaterialReact",
        name: "React",
        component: MaterialReact
      },
      {
        path: "MaterialReactNative",
        name: "ReactNative",
        component: MaterialReactNative
      }
    ]
    // }, {
    //  path: '/',
    //  name: '主项目',
    //  redirect: '/main'
  },
  {
    path: "",
    name: "nginx",
    iconCls: "el-icon-menu",
    component: Layout,
    children: [
      {
        path: "NginxMarkDown",
        name: "环境配置",
        component: NginxMarkDown
      }
    ]
  }
];
