<template>
  <div class="indexFooter_box">
    <div class="foo">
      <div class="top">
        <icon type="icon-guanyu" />
        Crafted with by Mashiro
      </div>
      <div class="content">© 2020 樱花庄的白猫 沪ICP备17028213号</div>
      <div class="bottom">
        <icon type="icon-QQ" />CDN Sponsor <icon type="icon-weibo" />Server
        provider <icon type="icon-weixin" />jsDelivr
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../icon/icon.vue";
export default {
  components: { icon },
};
</script>

<style lang="less" scoped>
.indexFooter_box {
  margin: 200px 0 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  .foo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    .top {
      font-size: 12px;
    }
    .content {
      font-size: 14px;
      color: #999;
      font-weight: bold;
      margin: 10px 0 5px;

    }
  }
}
</style>