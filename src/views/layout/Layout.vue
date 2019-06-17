<template>
  <div id="layout">
    <a-layout id="components-layout-demo-fixed-sider">
      <mysider></mysider>
      <a-layout :style="{ marginLeft: '200px' }">
        <myheader></myheader>
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="less">
</style>

<script>
import MyHeaderVue from "./MyHeader.vue";
import MySiderVue from "./MySider.vue";
export default {
  name: "layout",
  components: { myheader: MyHeaderVue, mysider: MySiderVue }
};
</script>
