<template>
  <div>
    <template v-for="item in $router.options.routes">
      <router-link v-if="!item" :to="item.path">
        <el-menu-item :index="item.path" class="submenu-title-noDropdown">
          <i v-if="item.iconCls" :class="item.iconCls"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu :index="item.name" v-if="item.children && item.children.length>0">
        <template slot="title">
          <i v-if="item.iconCls" :class="item.iconCls"></i>
          <span>{{item.name}}</span>
        </template>

        <template v-for="child in item.children">
          <!-- 三级菜单 -->
          <template v-if="child.children&&child.children.length>0">
            <el-submenu :index="child.name">
              <template slot="title">
                <i v-if="child.iconCls" :class="child.iconCls"></i>
                <span>{{child.name}}</span>
              </template>
              <template v-for="sun in child.children">
                <router-link :to="child.path+'/'+sun.path">
                  <el-menu-item :index="child.path+'/'+sun.path">
                    <i v-if="sun.iconCls" :class="sun.iconCls"></i>
                    <span>{{sun.name}}</span>
                  </el-menu-item>
                </router-link>
              </template>
            </el-submenu>
          </template>
          <!-- 二级菜单 -->
          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <i v-if="child.iconCls" :class="child.iconCls"></i>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import MenuItem from "@/components/MenuItem";
export default {
  name: "menuItem",
  data() {
    return { routes2: this.routes };
  },
  props: {
    routes: {
      type: Array
    }
  },
  components: {
    MenuItem
  },
  created() {
    console.log("www--", this);
  }
};
</script>