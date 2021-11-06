<template>
	<div class="message_box">
		<el-container>
			<el-header>
				<nav-bar />
			</el-header>
			<el-main>
				<container />
				<el-row type="flex" justify="center">
					<el-col :span="8">
						<div
							class="poetry_box"
							:class="{ poetry_onload: onload }"
						>
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
					</el-col>
				</el-row>
				<el-row type="flex" justify="center">
					<el-col :span="10">
						<div class="comments_title">
							<h3>Comments | <span>192条评论</span></h3>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<comments
						:data="{
							lv: 'icon-VIP-1',
							avatar:
								'https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100',
						}"
					/>
				</el-row>
				<el-row>
					<comments
						:data="{
							lv: 'icon-VIP-1',
							avatar:
								'https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100',
						}"
					/>
				</el-row>
				<el-row>
					<comments
						:data="{
							lv: 'icon-VIP-1',
							avatar:
								'https://q2.qlogo.cn/headimg_dl?dst_uin=2790561605&spec=100',
						}"
					/>
				</el-row>

				<div class="page_box">
					<!-- <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page="currentPage4"
                                   :page-sizes="[100, 200, 300, 400]"
                                   :page-size="100"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="400">
                    </el-pagination> -->
				</div>
				<el-row type="flex" justify="center">
					<el-col span="10">
						<el-input
							type="textarea"
							:autosize="{ minRows: 6, maxRows: 10 }"
							placeholder="请输入内容"
							v-model="textarea"
						>
						</el-input>
					</el-col>
				</el-row>
			</el-main>
			<el-footer
				>FooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooterFooter</el-footer
			>
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
            textarea:''
		}
	},
	mounted() {
		setTimeout(() => {
			this.onload = true
		}, 1)
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
		// margin-right: auto;
	}
	.page_box {
		display: flex;
		justify-content: center;
		margin-top: 30px;
		width: 100%;
	}
}
</style>
