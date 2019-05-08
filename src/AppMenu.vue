<template>
  <div class="sidebar">
    <!-- <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :isCollapse="isCollapse"> -->
    <el-aside mode="vertical" theme="dark" collapse unique-opened :default-active="$route.path">
      <!-- <MenuItem :routes="$router.options.routes"></MenuItem> -->

      <el-menu index="1">ide-route</el-menu>
    </el-aside>

    <div class="routerItem">
      <router-link to="/node-doc">NODE搭建</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/ide-atom">IDE准备</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/eslint-doc">eslint配置</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/ative">赤兔宝开发及上线流程</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/screen-fit">多屏适配</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/mobile-base">基础</router-link>
    </div>
    <!-- react -->
    <div class="routerItem">
      <router-link to="/react-evn">React开发环境</router-link>
    </div>
    <!-- react native -->
    <div class="routerItem">
      <router-link to="/mac-os">MacOs开发环境</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/windows">widows开发环境</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/screen">屏幕适配</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/font">字体文件</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/eslint">eslint代码规范</router-link>
    </div>
    <!-- oms -->
    <div class="routerItem">
      <router-link to="/OmsLogin">登录</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/OmsPlatform">主项目</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/OMSSubTpl">子项目模板</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/OmsZoo">赤兔宝</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/OmsSystem">系统管理</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/ProjectWrite">项目语法规范</router-link>
    </div>
    <!-- 资料 -->
    <div class="routerItem">
      <router-link to="/MaterialMarkdown">markdown</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/MaterialReact">react</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/MaterialReactNative">reactnative</router-link>
    </div>
    <div class="routerItem">
      <router-link to="/NginxMarkDown">ngix环境配置</router-link>
    </div>
  </div>
</template>

<script>
// import MenuItem from "@/components/MenuItem";
export default {
  name: "leftMenu",
  components: {
    // MenuItem
  },
  data() {
    return {};
  }
};
</script>
<style>
.routerItem a {
  color: #fff;
  line-height: 40px;
}
.el-menu-item,
.el-submenu__title {
  height: 44px;
  line-height: 44px;
}

.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
  font-weight: 300;
}

.sidebar {
  display: block;
  position: absolute;
  width: 160px;
  padding: 20px 0 0 20px;
  left: 0;
  top: 44px;
  bottom: 0;
  background: #2e363f;
  overflow-y: auto;
}

.sidebar > ul {
  height: 100%;
}

.el-menu--dark .el-menu-item,
.el-menu--dark .el-submenu__title {
  color: #fff;
}

.el-submenu .el-menu-item {
  min-width: 0;
}

.el-menu-item.is-active {
  color: #20a0ff;
}
</style>
