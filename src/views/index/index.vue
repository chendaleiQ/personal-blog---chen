<template>
  <div class="index_box">
    <div
      class="header"
      @mouseenter="isShow = true"
      @mouseleave="scrollTop==0?isShow = false:isShow = true"
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
    <index-container />
    <index-content />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navBar/navBar.vue";
import IndexContainer from '../../components/indexContainer/indexContainer.vue';
import IndexContent from '../../components/indexContent/indexContent.vue';
export default {
  components: {
    NavBar,
    IndexContainer,
    IndexContent
  },
  data() {
    return {
      onLoad: false,
      isShow: false,
      scrollTop:null
    };
  },
  created() {
    setTimeout(() => {
      this.onLoad = true;
    }, 1);
  },
  methods: {
    getScroll(e) {
      this.scrollTop = e.target.scrollingElement.scrollTop
      this.isShow = this.scrollTop == 0 ? false : true;
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
    z-index: 999;
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
  
}
.navBar_box {
}
</style>
