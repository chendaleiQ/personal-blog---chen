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
@import "//at.alicdn.com/t/font_2814313_2qopzc9nzlq.css"; 
/* share-icon */
@import "//at.alicdn.com/t/font_2815865_dp1osrldfwh.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
