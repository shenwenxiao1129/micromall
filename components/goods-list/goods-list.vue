<template>
	<view>
		<view class="goods-list">
			<view class="goods-item" v-for="item in goods" :key="item.goods_id" @click="navigator(item.goods_id)">
				<image :src="item.goods_small_logo"></image>
				<view class="price">
					<text>￥{{item.goods_price}}</text>
					<text>￥{{item.goods_price + 300}}</text>
				</view>
				<view class="name" :title="item.goods_name">{{item.goods_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "goods-list",
		props: ['goods'],
		methods: {
			navigator(id) {
				this.$emit('itemClick', id);
				
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.goods-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods-item {
			background-color: #fff;
			width: 350rpx;
			margin: 10px 0;
			padding: 25rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150rpx;
				display: block;
				margin: 0 auto;
			}

			.price {
				padding: 25rpx 0;
				color: $shop-color;
				font-size: 36rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}

			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 12rpx;
				padding-top: 10rpx;
				width: 300rpx;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				/* 这里是超出几行省略 */
				overflow: hidden;
			}
		}
	}
</style>
