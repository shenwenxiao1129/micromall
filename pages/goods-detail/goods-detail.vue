<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" circular :interval="1500" indicator-color="rgba(255, 0, 0 ,.2)"
			indicator-active-color="#C41E00">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<view class="swiper-item">
					<image :src="item.pics_big_url"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{detail.goods_price}}</text>
				<text>￥{{detail.goods_price + 300}}</text>
			</view>
			<view class="goods_name">{{detail.goods_name}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：321sdf654</view>
			<view>库存：30</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="detail.goods_introduce"></rich-text>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 0,
				swipers: [], //轮播图数据
				detail: {}, //整个res对象
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}, ],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: '/goods/detail',
					data: {
						goods_id: this.id
					}
				})
				console.log(res)
				this.swipers = res.data.message.pics

				this.detail = res.data.message
				console.log(this.detail)
			},
			// 点击客服 店铺 购物车后触发
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			// 点击加入购买 立即购买 触发
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.goods_id;
			this.getNewsDetail();
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			.swiper-item {
				height: 100%;

				image {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 25rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			font-size: 30rpx;
			padding-bottom: 50px;

			.tit {
				font-size: 32rpx;
				padding-left: 10rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10rpx;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}

		.line {
			height: 10px;
			background-color: #eee;
		}

		.goods-nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
