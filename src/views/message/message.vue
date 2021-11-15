<template>
    <div class="message_box">
        <el-container>
            <el-header>
                <nav-bar />
            </el-header>
            <el-main>
                <container />
                <ElRow type="flex" justify="center">
                    <ElCol :span="10">
                        <ElCol :span="18" :offset="3">
                            <div class="poetry_box" :class="{ poetry_onload: onload }">
                                <div class="poetry">
                                    <div class="poetry_title">念两句诗</div>
                                    <div class="poetry_content">
                                        床前明月光，疑是地上霜
                                    </div>
                                    <div class="poetry_bottom">
                                        【唐代】李白《静夜思》
                                    </div>
                                </div>
                            </div>
                        </ElCol>
                        <ElCol>
                            <div class="comments_title">
                                <h3>Comments | <span>192条评论</span></h3>
                            </div>
                        </ElCol>
                        <ElCol>
                            <comments :data="{
							lv: 'icon-VIP-1',
							avatar:
								'https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100',
						}" />
                        </ElCol>
                        <ElCol>
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
                            </el-pagination>
                        </ElCol>
                        <ElCol style="position:relative">
                            <div class="input_title" :class="{'input_untitle':isFocus}">我是一句有动画的文字</div>
                            <textarea class="textarea" v-model="textarea" @focus="isFocus = true" @blur="isFocus = false" cols="100" rows="10"></textarea>
                        </ElCol>
                        <ElCol>
                            <ElRow type="flex" justify="center">
                                <ElCol :span="8">
                                    昵称：
                                    <el-input v-model="input" placeholder="昵称或者QQ号（必填）"></el-input>
                                </ElCol>
                                <ElCol :span="8">
                                    电子邮箱：
                                    <el-input v-model="input" placeholder="邮箱（必填）"></el-input>
                                </ElCol>
                                <ElCol :span="8">
                                    网站：
                                    <el-input v-model="input" placeholder="网址（选填）"></el-input>
                                </ElCol>
                            </ElRow>
                        </ElCol>
                        <ElCol>
                            <el-button size="medium">biubiubiu~</el-button>
                        </ElCol>
                    </ElCol>

                </ElRow>
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Comments from '../../components/comments/comments.vue'
import Container from '../../components/container/container.vue'
import navBar from '../../components/navBar/navBar.vue'
export default {
    components: { navBar, Container, Comments },
    data() {
        return {
            onload: false,
            textarea: '',
            isFocus: false, //回复框体焦点
            currentPage4: 1,
            input:''
        }
    },
    mounted() {
        setTimeout(() => {
            this.onload = true
        }, 1)
    },
    methods: {
        handleCurrentChange() {},
        handleSizeChange() {},
    },
}
</script>

<style lang="less" scoped>
.message_box {
    .poetry_box {
        margin: 150px 0;
        transform: translateY(30px);
        transition: all 1s;
        .poetry {
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
    .poetry_onload {
        transform: translateY(0);
    }
    .comments_title {
        h3 {
            display: inline-block;
            font-weight: 400;
            color: #7d7d7d;
            span {
                font-size: 14px;
            }
        }
    }
    .input_title {
        position: absolute;
        transform: translate(10px, 8px);
        font-size: 18px;
        color: #000;
        z-index: 99;
        transition: all 0.5s;
    }
    .input_untitle {
        transform: translate(10px, -5px);
        background: #000;
        color: #fff;
        font-size: 14px;
    }
    .textarea {
        padding: 20px;
    }
}
</style>
