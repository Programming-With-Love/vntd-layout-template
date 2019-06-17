<template>
  <div id="myheader">
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
      <h1>头部</h1>
    </a-layout-header>
  </div>
</template>

<style lang="less">
</style>

<script>
export default {
  name: "myheader",
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>
