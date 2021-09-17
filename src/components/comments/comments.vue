<template>
  <div class="comments_box">
    <div class="comments">
      <div class="userinfo">
        <div class="avatar">
          <img :src="data.avatar" alt="" />
        </div>
        <div class="userinfos">
          <div class="username">
            <span></span>
            <icon :type="data.lv" />
          </div>
          <div class="user">
            发布于 14 天前  (  Google Chrome 91.0.4472.114 Windows 10 ) 来自:
            河南省洛阳市 移动
          </div>
        </div>
      </div>
      <div class="comments_content">
        大佬你那个 mac风格的代码块是怎么弄的呀，highlightjs上没找到,能告知一下吗
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        lv: "icon-VIP-1",
        avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100",
      },
    },
  },
};
</script>

<style lang="less" scoped>
.comments_box{
    width: 780px;
    height: 130px;
}
</style>