<template>
<div class="sidebar">
  <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :isCollapse="isCollapse">
    <MenuItem :routes='$router.options.routes'></MenuItem>
  </el-menu>
</div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
export default {
  name: 'leftMenu',
  components: {
    MenuItem
  }
}
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
  font-weight: 300
}

.sidebar {
  display: block;
  position: absolute;
  width: 160px;
  left: 0;
  top: 44px;
  bottom: 0;
  background: #2E363F;
}

.sidebar>ul {
  height: 100%;
}

.el-menu--dark .el-menu-item,
.el-menu--dark .el-submenu__title {
  color: #fff;
}

.el-submenu .el-menu-item {
  min-width: 0
}

.el-menu-item.is-active {
  color: #20a0ff;
}
</style>
