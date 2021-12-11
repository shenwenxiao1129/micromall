<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper class="swiper" circular indicator-dots autoplay interval="1500">
			<swiper-item v-for="item in swipers" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods" @itemClick="goDetail"></goods-list>
		</view>

	</view>

</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '微超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					},
				]
			}
		},
		onLoad() {
			this.getSwiper();
			this.getHotGoods();
		},
		methods: {
			// 跳转商品详情界面
			goDetail(id){
				console.log(id);
				// 携带id进行页面跳转
				uni.navigateTo({
					url:'../goods-detail/goods-detail?goods_id='+id
				})
			},
			// getSwiper() {
			// 	this.$myRequest({
			// 		url:'/home/swiperdata'
			// 	}).then(res=>{
			// 		console.log(res.data)
			// 	})
			// }
			//请求轮播图数据
			async getSwiper() {
				const res = await this.$myRequest({
					url: '/home/swiperdata'
				})
				console.log(res)
				this.swipers = res.data.message
			},
			//请求推荐商品数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/goods/search',
				});
				console.log(res)
				let {
					message,
					meta
				} = res.data;
				if (meta.status === 200) {
					this.goods = message.goods
					console.log(this.goods)
				} else {
					this.uni.showToast({
						title: '推荐商品数据获取失败'
					})
				}

			},
			// 页面跳转
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav-item {
				flex: 1;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 50%;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot-goods {
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				margin: 7px auto;
				letter-spacing: 20px;
				text-align: center;
				background-color: #fff;
			}
		}

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
	}
</style>
