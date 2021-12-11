<template>
	<view class="news">
		<view class="news_item" v-for="(item,index) in list" :key="index">
			<image :src="item.image_src"></image>
			<view class="right">
				<view class="tit">
					{{item.name}}
				</view>
				<view class="info">
					<text>发表时间：2020-10-30</text>
					<text>浏览：{{123}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-item",
		props:['list']
		
	}
</script>

<style lang="scss">
.news {
		.news_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;

			image {
				width: 200rpx;
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}

			.right {
				margin-left: 15rpx;
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-between;

				.tit {
					font-size: 30rpx;
				}

				.info {
					font-size: 24rpx;

					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}

	}
</style>
