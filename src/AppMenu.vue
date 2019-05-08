<template>
  <div class="sidebar">
    <!-- <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :isCollapse="isCollapse"> -->
    <div>234--{{$route.path}}</div>
    <div>routes0==={{$router.options.routes[0].path}}</div>
    <div>routes0==={{$router.options.routes[0].name}}</div>
    <el-menu mode="vertical" theme="dark" collapse unique-opened :default-active="$route.path">
      <!-- <MenuItem :routes="$router.options.routes"></MenuItem> -->
      <!-- <el-menu-item :index="$router.options.routes[0].path" class="submenu-title-noDropdown"> -->
      <!-- <i v-if="$router.options.routes[0].iconCls" :class="item.iconCls"></i> -->
      <!-- <span>{{$router.options.routes[0].name}}</span> -->
      <!-- </el-menu-item> -->
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import MenuItem from "@/components/MenuItem";
import { Menu } from "element-ui";

Vue.use(Menu);
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
  left: 0;
  top: 44px;
  bottom: 0;
  background: #2e363f;
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
