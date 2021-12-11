<template>
	<view class="goods-list">
		<goods-list :goods="goods" @itemClick="goDetail"></goods-list>
		<view class="isOVer" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				pageIndex: 1,
				goods: [],
				flag: false,
				total:0
			}
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: '/goods/search',
					data: {
						pagenum: this.pageIndex,
						pagesize: 10
					}
				});
				let {
					message,
					meta
				} = res.data;
				if (meta.status === 200) {
					this.goods = [...this.goods, ...message.goods]
					callback && callback();
				} else {
					this.uni.showToast({
						title: '推荐商品数据获取失败'
					})
				}
				this.total = message.total
			},
			// 跳转商品详情页
			goDetail(id){
				console.log(id);
				// 携带id进行页面跳转
				uni.navigateTo({
					url:'../goods-detail/goods-detail?goods_id='+id
				})
			},
		},

		// 滑动到页面底部触发函数
		onReachBottom() {
			if (this.goods.length > this.total) return this.flag = true;
			this.pageIndex++;
			this.getGoodsList()
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('触发了下拉刷新');
			this.pageIndex = 1;
			this.goods = [];
			this.flag = false;
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh();
				})
			},1000)
		},
		onLoad() {
			this.getGoodsList();
		}
	}
</script>

<style lang="scss">
	.goods-list {
		background-color: #eee;
	}

	.isOVer {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
	}
</style>
