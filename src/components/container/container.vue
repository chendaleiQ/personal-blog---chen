<template>
  <div
    class="container_box"
    :class="{ container_onload: onload }"
    ref="container"
  >
    <img
      src="https://2heng.xin/wp-content/uploads//2017/08/pixiv54839592.png"
      alt=""
    />
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "留言板",
    },
  },
  data() {
    return {
      onload: false,
    };
  },
  mounted() {
    this.$refs.container.style.height =
      document.documentElement.clientHeight / 2 + "px";
    setTimeout(() => {
      this.onload = true;
    }, 1);
  },
};
</script>

<style lang="less" scoped>
.container_box {
  transform: translateY(-30px);
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 1s;
  filter: blur(10px);
  img {
    width: 100%;
  }
  div {
    position: absolute;
    color: #fff;
    font-size: 40px;
    text-shadow: 2px 2px 10px #000;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    background: #fff;
    height: 100px;
    width: 200%;
    transform: translateY(90px);
  }
}
.container_onload {
 transform: translateY(0);
 filter: blur(0);
}
</style>