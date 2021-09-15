<template>
  <i class="iconfont icon-container" :class="type"></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2814313_xizy1ucfpak.css";
@import "//at.alicdn.com/t/font_2815865_dp1osrldfwh.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
