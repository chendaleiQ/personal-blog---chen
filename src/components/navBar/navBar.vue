// 传入show用来显示或隐藏组件
<template>
  <div>
    <div
      class="nav_container"
      :class="{ navBar_box: true, navBar_onload: isShow }"
      @mouseenter="isShow = true"
      @mouseleave="
        scrollTop == 0 && isIndex ? (isShow = false) : (isShow = true)
      "
    >
      <div :class="{ nav_left: true, left_onload: isShow, show: isShow }">
        <span></span>
        个人博客
      </div>
      <div :class="{ nav_content: true, content_onload: isShow }">
        <ul>
          <li @click="toIndex">
            <Icon type="icon-home" />
            <span> 首页</span>
          </li>
          <li>
            <Icon type="icon-paper" />
            <span> 归档</span>
          </li>
          <li>
            <Icon type="icon-sort" />
            <span> 清单</span>
          </li>
          <li @click="toMessage">
            <Icon type="icon-editor" />
            <span> 留言板</span>
          </li>
          <li>
            <Icon type="icon-link" />
            <span> 友人帐</span>
          </li>
          <!-- <li>
          <Icon type="icon-editor" />
          <span>赞赏</span>
        </li> -->
          <li>
            <Icon type="icon-guanyu" />
            <span> 关于</span>
          </li>
          <!-- <li>
          <Icon type="icon-chakan" />
          <span> APP</span>
        </li>
        <li>
          <Icon type="icon-menu21" />
          <span> 小森林</span>
        </li> -->
        </ul>
      </div>
      <div :class="{ nav_right: true, right_onload: isShow, show: isShow }">
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

    <back-top :isShow="isShow && scrollTop" />
  </div>
</template>

<script>
import backTop from "../backTop/backTop.vue";
export default {
  components: { backTop },
  data() {
    return {
      scrollTop: null,
      isShow: false,
      isActive: false,
    };
  },
  props: {
    isIndex: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toIndex() {
      this.$router.push(`/`);
    },
    toMessage() {
      this.$router.push(`/message`);
    },

    getScroll(e) {
      this.scrollTop = e.target.scrollingElement.scrollTop;
      this.isShow = this.scrollTop == 0 && this.isIndex ? false : true;
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.getScroll, true);
    setTimeout(() => {
      this.isIndex ? true : (this.isShow = true);
    }, 1);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll, true);
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  color: inherit;
  font-size: inherit;
}
.nav_container {
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  height: 75px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 1px 40px -8px rgb(200, 200, 200, 0.1);
  color: #666;
  background: #fff;
  transition: all 0.25s;
  opacity: 0;
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
    margin-right: auto;
  }
  .left_onload {
    transform: translateX(30px);
    opacity: 1;
  }
  .nav_content {
    height: 100%;
    font-size: 16px;
    transform: translateX(20px);
    transition: all 0.5s ease-out;
    opacity: 0;
    z-index: 100;
    ul {
      display: flex;
      align-items: center;
      height: 75px;
      li {
        cursor: pointer;
        @keyframes iconsport {
          0% {
            position: relative;
            top: 0px;
          }
          20% {
            position: relative;
            top: -3px;
          }
          40% {
            position: relative;
            top: 3px;
          }
          60% {
            position: relative;
            top: -3px;
          }
          80% {
            position: relative;
            top: 3px;
          }
          100% {
            position: relative;
            top: 0;
          }
        }
        position: relative;
        margin: 0 13px;
        span {
          transition: color 0.25s ease-out;
        }
        i {
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -16px;
          height: 6px;
          background-color: #fe9600;
          width: 0;
          transition: width 0.25s ease-out;
        }
        &:hover::after {
          width: 100%;
        }
        &:hover {
          color: #fe9600;
        }
        &:hover i {
          animation: iconsport 0.5s linear;
        }
      }
    }
  }
  .content_onload {
    transform: translateX(0);
    opacity: 1;
  }
  .nav_right {
    z-index: 5;
    display: flex;
    align-items: center;
    margin-left: auto;
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
.navBar_onload {
  opacity: 1;
}
</style>