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
/* blog-icon */
@import "//at.alicdn.com/t/font_2814313_4rwdbeexsly.css"; 
/* share-icon */
@import "//at.alicdn.com/t/font_2815865_dp1osrldfwh.css";
/* lv等级 */
@import "//at.alicdn.com/t/font_2820602_z7xnihggyn.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
