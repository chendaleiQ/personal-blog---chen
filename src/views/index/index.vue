<template>
  <div class="index_box">
    <nav-bar :isIndex="true" />
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
      isActive: false,
    };
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.index_box {
  width: 100%;
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
