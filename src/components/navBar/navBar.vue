// 传入show用来显示或隐藏组件
<template>
  <div :class="{ navBar_box: true, navBar_onload: show }">
    <div :class="{ nav_content: true, content_onload: show }">
      <ul>
        <li>
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
        <li>
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
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  color: inherit;
  font-size: inherit;
}
.navBar_box {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  height: 75px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 1px 40px -8px rgb(200, 200, 200, .1);
  color: #666;
  opacity: 0;
  background: #fff;
  transition: all 0.25s;
  .nav_content {
    height: 100%;
    font-size: 16px;
    margin-left: 20px;
    transition: all 0.5s ease-out;
    opacity: 0;
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
    margin-left: 0;
    opacity: 1;
  }
}
.navBar_onload {
  opacity: 1;
}
</style>