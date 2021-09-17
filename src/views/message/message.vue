<template>
  <div class="message_box">
    <div class="message_container"></div>
    <nav-bar />
    <container />
    <div class="poetry_box" :class="{poetry_onload:onload}">
      <div class="poetry">
        <div class="poetry_title">念两句诗</div>
        <div class="poetry_content">床前明月光，疑是地上霜</div>
        <div class="poetry_bottom">【唐代】李白《静夜思》</div>
      </div>
    </div>
    <comments />
  </div>
</template>

<script>
import Comments from '../../components/comments/comments.vue';
import Container from "../../components/container/container.vue";
import navBar from "../../components/navBar/navBar.vue";
export default {
  components: { navBar, Container, Comments },
  data() {
    return {
      onload: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.onload = true;
    }, 1);
  },
};
</script>

<style lang="less" scoped>
.poetry_box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 150px 0;
  transform: translateY(30px);
  transition: all 1s;
  .poetry {
    width: 620px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #777;
    box-sizing: border-box;
    .poetry_title {
      width: 300px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #777;
      background: #fff;
      margin-top: -40px;
    }
    .poetry_content {
      font-size: 26px;
      color: #666;
    }
    .poetry_bottom {
      color: #888;
    }
  }
}
.poetry_onload{
  transform: translateY(0);
}
</style>