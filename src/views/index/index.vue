<template>
  <div class="index_box">
    <div :class="{ back_top: true, back_active: isShow }" @click="backTop">
      <img src="../../assets/scroll.png" alt="" />
    </div>
    <div
      class="header"
      @mouseenter="isShow = true"
      @mouseleave="scrollTop == 0 ? (isShow = false) : (isShow = true)"
    >
      <div :class="{ nav_left: true, left_onload: onLoad, show: isShow }">
        <span>我的</span>
        个人博客
      </div>
      <nav-bar :show="isShow" />
      <div :class="{ nav_right: true, right_onload: onLoad, show: isShow }">
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
    <index-container />
    <index-content />
    <index-footer />
    <div
      class="theme"
      @click="isActive ? (isActive = false) : (isActive = true)"
    >
      切换主题 | SCHEME TOOL
      <icon type="icon-chilun" class="chilun" />
      <div :class="{ alert: true, alert_active: isActive }">
        <div class="triangle"></div>
        Whether to <strong>login</strong> now?
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navBar/navBar.vue";
import IndexContainer from "../../components/indexContainer/indexContainer.vue";
import IndexContent from "../../components/indexContent/indexContent.vue";
import IndexFooter from "../../components/indexFooter/indexFooter.vue";
import Icon from "../../components/icon/icon.vue";
export default {
  components: {
    NavBar,
    IndexContainer,
    IndexContent,
    IndexFooter,
    Icon,
  },
  data() {
    return {
      onLoad: false,
      isShow: false,
      scrollTop: null,
      isActive: false,
    };
  },
  created() {
    setTimeout(() => {
      this.onLoad = true;
    }, 1);
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
    getScroll(e) {
      this.scrollTop = e.target.scrollingElement.scrollTop;
      this.isShow = this.scrollTop == 0 ? false : true;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll, true);
  },
};
</script>

<style lang="less" scoped>
.index_box {
  width: 100%;
  .back_top {
    z-index: 99;
    position: fixed;
    right: 20px;
    top: -1000px;
    transition: all 0.5s ease-out;
  }
  .back_active {
    top: -250px;
    transform: translateY(0);
    animation: backsport 3s infinite 0.5s;
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
  .header {
    position: fixed;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #666;
    z-index: 999;
    .nav_left {
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 5;
      font-weight: 600;
      font-size: 28px;
    }
    .left_onload {
      transform: translateX(30px);
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
            animation: personsport 2s;
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
        right: -10px;
        width: 110px;
        font-size: 14px;
        color: #000;
        font-weight: 500;
        border-radius: 5px;
        box-shadow: 0 1px 40px -8px rgb(100, 100, 100, 50%);
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
      transform: translateX(-30px);
      opacity: 1;
    }
    .show {
      color: #666;
    }
  }
  .theme {
    cursor: pointer;
    position: fixed;
    right: 15px;
    bottom: 15px;
    user-select: none;
    .chilun {
      display: inline-block;
      animation: chilunsport 2s infinite linear;
      @keyframes chilunsport {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(180deg);
        }
      }
    }

    .alert {
      position: absolute;
      top: -50px;
      transition: all 0.25s;
      right: 0;
      width: 200px;
      font-size: 14px;
      opacity: 0;
      color: #000;
      font-weight: 500;
      border-radius: 5px;
      box-shadow: 0 1px 40px -8px rgb(100, 100, 100, 50%);
      background: #fff;
      padding: 15px;
      box-sizing: border-box;
      .triangle {
        transform: rotate(45deg);
        width: 14px;
        height: 14px;
        position: absolute;
        bottom: -7px;
        right: 93px;
        background: #fff;
      }
    }
    .alert_active {
      top: -80px;
      opacity: 1;
    }
  }
}
.navBar_box {
}
</style>
