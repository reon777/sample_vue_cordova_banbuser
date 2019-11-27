<template>
  <div id="app">
    <div v-if="deviceready">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceready: false
    };
  },
  created() {
    window.setTimeout(() => {
      this.deviceready = true;
    }, 1000);
  }
};
</script>

<style>
html {
  background-color: #f7f5ff;
  height: 100%;
}
body {
  background-color: #f7f5ff;
  height: 100%;
  margin-top: 20px;
}
.body-transparent {
  background-color: transparent !important;
}
.btn {
  background-color: antiquewhite;
  height: 50px;
  line-height: 50px;
  width: 300px;
  text-align: center;
  display: inline-block;
  margin-bottom: 20px;
}
</style>
