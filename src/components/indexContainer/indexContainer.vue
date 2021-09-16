<template>
  <div class="index_container">
    <figure class="figure" ref="figure"></figure>
    <div class="con_title">
      <div class="title_text">HI,MASHIRO!</div>
      <div class="title_bottom">
        <div class="title_dot"></div>
        <div class="title_en">
          “You got to put the past behind you before you can move on.”
        </div>
        <div class="title_icon">
          <Icon type="icon-arrowleft" />
          <Icon type="icon-Facebook" />
          <Icon type="icon-twitter" />
          <Icon type="icon-linkedin" />
          <Icon type="icon-github" />
          <Icon type="icon-weibo" />
          <Icon type="icon-dingding" />
          <Icon type="icon-arrowright" />
        </div>
      </div>
    </div>
    <div class="con_bottom">
      <div class="bac_img1"></div>
      <div class="bac_img2"></div>
    </div>
    <div class="con_down">
      <Icon type="icon-arrowdown" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curHeight:null
    };
  },
  created() {}, 
  mounted() {
    this.$refs.figure.clientHeight;
    console.log(document.documentElement.clientHeight);
  },
  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.index_container {
  z-index: -1;
  position: relative;
  width: 100%;
  // max-height: 800px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-attachment: fixed;
    background: url("../../assets/dot.gif");
    background-repeat: repeat;
  }

  .figure {
    width: 100%;
    height: 800px;
    // height: 700px;
    background: url(https://api.2heng.xin/cover);
    background-size: cover;
  }
  .con_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 1000;
    z-index: 4;
    .title_text {
      font-size: 70px;
      margin-bottom: 30px;
    }
    .title_bottom {
      position: relative;
      background: rgba(0, 0, 0, 0.5);
      padding: 20px;
      box-sizing: border-box;
      border-radius: 10px;
      z-index: 4;

      &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: 30%;
        margin-left: -15px;
        border-width: 15px;
        border-style: solid;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: rgba(0, 0, 0, 0.5);
        border-left-color: transparent;
      }
      .title_en {
        margin-bottom: 10px;
      }
      .title_icon {
        display: flex;
        justify-content: space-around;
        font-weight: normal;
        font-size: 28px;
      }
    }
  }
  .con_bottom {
    position: absolute;
    bottom: 0;
    margin-top: auto;
    width: 100%;
    height: 65px;
    overflow: hidden;
    .bac_img1 {
      z-index: 4;
      height: 45px;
      position: absolute;
      width: 500%;
      bottom: 0;
      left: 0%;
      animation: bacsport 600s;
      background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png);
    }
    .bac_img2 {
      z-index: 4;
      height: 65px;
      position: absolute;
      width: 500%;
      bottom: 0;
      left: 0%;
      animation: bacsport 800s;
      background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave2.png);
    }
    @keyframes bacsport {
      0% {
        left: 0%;
      }
      50% {
        left: -400%;
      }
      100% {
        left: 0%;
      }
    }
  }
  .con_down {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    z-index: 4;
    animation: downsport 2s infinite;
  }
  @keyframes downsport {
    0% {
      top: 85%;
    }
    50% {
      top: 86%;
    }
    100% {
      top: 85%;
    }
  }
}
</style>