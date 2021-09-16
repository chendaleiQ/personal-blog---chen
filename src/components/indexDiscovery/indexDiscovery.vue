<template>
  <div class="indexDiscovery_box">
    <div class="disc_left">
      <div class="disc_time">
        <icon type="icon-schedule" />
        发布于 2021-07-30
      </div>
      <div class="disc_title">基于 SCSS mixin 的 flex gap polyfill</div>
      <div class="disc_all">
        <div class="all1">
          <icon type="icon-chakan" />
          3305热度
        </div>
        <div class="all2">
          <icon type="icon-speechbubble" />
          26 条评论
        </div>
        <div class="all3">
          <icon type="icon-folder" />
          碎碎念
        </div>
      </div>
      <div class="disc_text">
        一直以来，习惯在 flex 布局中使用 gap
        这个属性设置间距，一直以来也都是在最新的 Chrome 上调试，所以从来没有想在
        flex gap 在其他浏览器上存在兼容性问题。最近看了一下文档才反应过来，gap
        原来只是 grid
        布局的属性，虽然近些年来主流浏览器都已经支持了，但是一些使用人数不少的浏览器其实仍然没有支持，包括
        UC、QQ，以及运行在 Android 11 上的最新版 MS Edge。
      </div>
      <div class="disc_more">···</div>
    </div>
    <div class="disc_right">
      
      <img src="../../assets/blog_img.jpg" :style="{'filter': 'blur('+blur+'px)'}"/>
    </div>
  </div>
</template>

<script>
import icon from "../icon/icon.vue";
export default {
  components: { icon },
  props:{
      blur:{
          type:Number,
          default:5
      }
  }
};
</script>

<style lang="less" scoped>
.indexDiscovery_box {
  margin-top: 50px;
  width: 800px;
  height: 300px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 1px 10px -6px rgb(0, 0, 0, 0.1);
  transition: all 0.5s;
  border-radius: 10px;
  box-sizing: border-box;
  .disc_left {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 5%;
    padding: 30px;
    .disc_time {
      font-size: 12px;
      color: #888;
    }
    .disc_title {
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      margin: 15px 0 25px;
      &:hover {
        color: #fe9600;
      }
    }
    .disc_all {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: #888;
      margin-bottom: 15px;
      .all1 {
        margin-right: 10px;
      }
      .all2 {
        cursor: pointer;
        margin-right: 10px;
        &:hover {
          color: #fe9600;
        }
      }
      .all13 {
      }
    }
    .disc_text {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.66);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .disc_more {
      cursor: pointer;
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      opacity: 0.6;
      &:hover {
        color: #fe9600;
      }
    }
  }
  .disc_right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    overflow: hidden;
    img {
      cursor: pointer;
      width: 100%;
      transition: all 0.5s;
      // height: 300px;
    }
  }
  &:hover .disc_right > img {
    width: 110%;
  }
  &:hover {
    box-shadow: 0 1px 20px -6px rgb(0, 0, 0, 0.5);
  }
}
</style>