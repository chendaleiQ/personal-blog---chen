<template>
    <div class="comments_box">
        <el-row type="flex" justify="center">
            <el-col :span="10">
                <div class="comments">
                    <div class="userinfo">
                        <div class="avatar">
                            <img :src="data.avatar"
                                 alt="" />
                        </div>
                        <div class="userinfos">
                            <div class="username">
                                <span>chendaleiQ</span>
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
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: {
                lv: 'icon-VIP-1',
                avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100',
            },
        },
    },
}
</script>

<style lang="less" scoped>
.comments_box {
    margin-top: 30px;
    .comments {
        border-bottom: 1px solid #ddd;
        .userinfo {
            display: flex;
            .avatar {
                margin-right: 14px;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
            .userinfos {
                .username {
                    span {
                        margin-right: 5px;
                        color: #fe9600;
                        font-size: 15px;
                        font-weight: 600;
                    }
                }
            }
            .user {
                margin-top: 5px;
                font-size: 12px;
                letter-spacing: 0px;
                text-transform: none;
                color: rgba(0, 0, 0, 0.35);
            }
        }
        .comments_content {
            font-size: 14px;
            line-height: 30px;
            margin-top: 20px;
            padding-bottom: 30px;
            padding-left: 3px;
            color: #63686d;
        }
    }
}
</style>
