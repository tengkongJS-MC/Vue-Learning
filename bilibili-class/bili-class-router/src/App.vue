<template>
  <!-- 路由的显示入口 -->
  <div id="linkBox">
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#linkBox > *{
  text-decoration: none;
  color: black;
  background: #c6ffb4;
  padding: 3px 10px 3px 10px;
  border-radius: 5px;
}

#linkBox > *:hover{
  background: #7cd062;
  color: white;
}
</style>
