<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppMenu></AppMenu>
    <div class="App-content">
      <div class="App-content-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMenu from "./AppMenu.vue";
export default {
  name: "app",
  components: {
    AppMenu,
    AppHeader
  }
};
</script>

<style>
/*
  * @Author: shuang
  * @Date:   2017-02-23 16:19:39
 * @Last Modified by: Becky-J
 * @Last Modified time: 2019-05-08 17:57:29
  */

body,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
div,
input,
button,
a,
span {
  padding: 0;
  margin: 0;
  /*box-sizing: border-box;*/
  font-family: "Microsoft YaHei", Arial;
  box-sizing: border-box;
}

body {
  color: #666;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.App-content {
  position: absolute;
  left: 160px;
  right: 0;
  top: 44px;
  bottom: 0;
  overflow-y: auto;
  padding: 10px;
  background-color: #d8d9e2;
}

.App-content-wrap {
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
  padding: 10px;
}
code {
  display: block;
}

h1,
h2 {
  margin: 5px 0;
}

pre {
  border: 0;
  border-left: 4px solid #20a0ff;
  background-color: rgba(5, 165, 209, 0.05);
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  border-radius: 3px;
}
</style>
