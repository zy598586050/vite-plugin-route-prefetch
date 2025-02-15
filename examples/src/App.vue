<template>
  <h1>插件测试</h1>
  <nav class="nav">
    <router-link to="/">Page1</router-link>
    <router-link to="/page2">Page2</router-link>
    <router-link to="/page3">Page3</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-weight: 200;
}

.nav {
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
}
</style>