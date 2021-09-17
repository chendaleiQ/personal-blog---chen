<template>
  <div :class="{ back_top: true, back_active: isShow }" @click="backTop">
    <img src="../../assets/scroll.png" alt="" :class="{ img_active: isShow }" />
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
  },
};
</script>

<style lang= "less" scoped>
.back_top {
  z-index: 10;
  position: fixed;
  right: 20px;
  transform: translateY(-100%);
  transition: all 0.4s;
  img {
    animation: none;

  }
  .img_active {
    animation: backsport 2s infinite;
  }
  @keyframes backsport {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(1%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
.back_active {
  transform: translateY(-35%);
}
</style>