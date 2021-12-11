<template>
	<view class="news_detail">
		<text class="title">{{detail.goods_name}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | formDate}}</text>
			<text>浏览：{{detail.cat_id}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.goods_introduce"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url:'/goods/detail',
					data:{
						goods_id:this.id
					}
				})
				console.log(res)
				this.detail = res.data.message
			}
		},
		onLoad(options) {
			this.id = options.goods_id;
			this.getNewsDetail();
		}
	}
</script>

<style lang="scss">
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
