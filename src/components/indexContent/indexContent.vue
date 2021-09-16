<template>
  <div class="indexContent_box">
    <div class="cnt_dash">
      <div class="dash_title">
        <icon type="icon-anchor-full" style="font-size: 18px" />
        &nbsp;START:DASH!!
      </div>
      <div class="dash_content">
        <div class="con_list">
          <div class="after"></div>
          <img
            src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png"
            alt=""
          />
          <div class="list_top">SAKURA</div>
          <div class="list_bottom">本站WordPress主题</div>
        </div>
        <div class="con_list">
          <div class="after"></div>
          <img
            src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png"
            alt=""
          />
          <div class="list_top">SAKURA</div>
          <div class="list_bottom">本站WordPress主题</div>
        </div>
        <div class="con_list">
          <div class="after"></div>
          <img
            src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png"
            alt=""
          />
          <div class="list_top">SAKURA</div>
          <div class="list_bottom">本站WordPress主题</div>
        </div>
      </div>
    </div>
    <div class="cnt_discovery">
      <div class="dash_title">
        <icon type="icon-yezi" style="font-size: 28px" />
        &nbsp;Discovery
      </div>
      <index-discovery
        :blur="0"
        :ref="'disc' + index"
        v-for="(item, index) in data"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import icon from "../icon/icon.vue";
import IndexDiscovery from "../indexDiscovery/indexDiscovery.vue";
export default {
  components: { icon, IndexDiscovery },
  data() {
    return {
      data: [1, 2, 3, 4],
      scrollTop: 0,
      clientHeight: 0,
    };
  },
  methods: {
    getScroll(e) {
      this.scrollTop = e.target.scrollingElement.scrollTop;
      this.clientHeight = e.target.scrollingElement.clientHeight;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll, true);
  },
};
</script>

<style lang="less" scoped>
.indexContent_box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .cnt_dash,
  .cnt_discovery {
    margin-top: 50px;

    width: 800px;
    .dash_title {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      color: #666;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px dashed #eee;
      margin-bottom: 20px;
    }
    .dash_content {
      display: flex;
      width: 100%;
      position: relative;
      .con_list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32%;
        height: 150px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 1px 1px 3px #666;
        margin-right: 1%;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        .after {
          background: #333;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          transition: all 0.25s;
          opacity: 0;
        }
        &:hover .after {
          opacity: 0.6;
        }
        img {
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        &:hover img {
          width: 120%;
          height: 120%;
        }
        .list_top {
          position: absolute;
          left: -100%;
          opacity: 0;
          top: 20%;
          background: #000;
          color: #fff;
          font-weight: bold;
          width: 100%;
          height: 45px;
          line-height: 45px;
          text-align: center;
          transition: all 0.25s;

          z-index: 2;
        }
        .list_bottom {
          position: absolute;
          right: -100%;
          opacity: 0;
          bottom: 20%;
          color: #bbb;
          font-size: 12px;
          width: 100%;
          text-align: center;
          transition: all 0.25s;

          z-index: 2;
        }
        &:hover .list_top {
          left: 0;
          opacity: 1;
        }
        &:hover .list_bottom {
          right: 0;
          opacity: 1;
        }
      }
    }
  }
}
</style>