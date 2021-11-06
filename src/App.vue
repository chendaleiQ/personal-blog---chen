<template>
  <div id="app">
    <RouterView />
  </div>
</template>
<script>
export default {
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-hibiki/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../live2dw/live2d-widget-model-hibiki/assets/hibiki.model.json",
        },
        display: { position: "left", width: 200, height: 465 },
        mobile: { show: true },
        log: false,
      });
    }, 1000);
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Merriweather Sans", Helvetica, Tahoma, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
}
body {
  height: 100%;
  // cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur),auto;
}
.el-main,header,footer{
  padding: 0 !important;
}
</style>
