<template>
  <div class="index_box">
    <div
      class="header"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <div :class="{ nav_left: true, left_onload: onLoad }" ref="nav1">
        <span>我的</span>
        个人博客
      </div>
      <nav-bar :show="isShow" />
      <div :class="{ nav_right: true, right_onload: onLoad }" ref="nav2">
        <div class="select">
          <Icon type="icon-sousuo" />
        </div>
        <div class="person">
          <div class="icon">
            <Icon type="icon-person" />
          </div>
          <div class="alert">
            <div class="triangle"></div>
            Whether to <strong>login</strong> now?
          </div>
        </div>
      </div>
    </div>
    <div class="index_container">
      <figure class="figure"></figure>
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
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/navBar/navBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      onLoad: false,
      isShow: false,
    };
  },
  created() {
    setTimeout(() => {
      this.onLoad = true;
    }, 1);
  },
  methods: {
    getScroll(e) {
      this.isShow = e.target.scrollingElement.scrollTop == 0 ? false : true;
      if (this.isShow) {
        this.$refs.nav1.style.color = "#000";
        this.$refs.nav2.style.color = "#000";
      } else {
        this.$refs.nav1.style.color = "#666";
        this.$refs.nav2.style.color = "#666";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll, true);
  },
};
</script>

<style lang="less" scoped>
.index_box {
  width: 100%;
  .header {
    position: fixed;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #666;
    .nav_left {
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 0;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 5;
      font-weight: 600;
      font-size: 28px;
    }
    .left_onload {
      margin-left: 30px;
      opacity: 1;
    }
    .nav_right {
      z-index: 5;
      display: flex;
      align-items: center;
      margin-right: 0;
      font-size: 32px;
      font-weight: 600;
      transition: all 0.5s ease-out;
      opacity: 0;
      .select {
        cursor: pointer;
        margin-right: 10px;
        transition: color 0.25s ease-out;
        &:hover {
          color: #fe9600;
        }
      }
      .person {
        cursor: pointer;
        .icon {
          @keyframes personsport {
            0% {
              transform: rotate(0);
            }
            12.5% {
              transform: rotate(30deg);
            }
            25% {
              transform: rotate(-30deg);
            }
            37.5% {
              transform: rotate(30deg);
            }
            50% {
              transform: rotate(-30deg);
            }
            62.5% {
              transform: rotate(30deg);
            }
            75% {
              transform: rotate(-30deg);
            }
            87.5% {
              transform: rotate(30deg);
            }
            100% {
              transform: rotate(0);
            }
          }
          &:hover {
            animation: personsport 2s linear;
          }
        }

        &:hover .alert {
          opacity: 1;
          top: 70px;
        }
      }
      .alert {
        position: absolute;
        top: 80px;
        opacity: 0;
        transition: all 0.25s;
        right: 20px;
        width: 110px;
        font-size: 14px;
        color: #000;
        font-weight: 500;
        border-radius: 5px;
        box-shadow: 0 1px 40px -8px rgb(0, 0, 0, 50%);
        background: #fff;
        padding: 15px;
        box-sizing: border-box;
        .triangle {
          transform: rotate(45deg);
          width: 14px;
          height: 14px;
          position: absolute;
          top: -7px;
          right: 20px;
          background: #fff;
        }
      }
    }
    .right_onload {
      margin-right: 30px;
      opacity: 1;
    }
  }
  .index_container {
    z-index: -1;
    position: relative;
    width: 100%;
    min-height: 600px;
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
      min-height: 600px;
      background: url(https://api.2heng.xin/cover/?2);
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
}
.navBar_box {
}
</style>
