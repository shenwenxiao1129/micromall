<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="(active === index)? 'active' : '' " v-for="(item,index) in cates" :key="item.cat_id"
				@click="leftClickHandle(index,item.cat_id)">
				{{item.cat_name}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item">
				<rich-text :nodes="goods_introduce"></rich-text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				goods_introduce:''
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: "/categories"
				});
				// console.log(res);
				let {
					message,
					meta
				} = res.data
				if (meta.status === 200) {
					this.cates = message
				}
				this.leftClickHandle(0, this.cates[0].cat_id)
			},
			async leftClickHandle(index, id) {
				this.active = index;
				const res = await this.$myRequest({
					url: '/goods/detail',
					data: {
						goods_id: id
					}
				})
				this.goods_introduce = res.data.message.goods_introduce;
				// document.getElementById('innerHTML').innerHTML = res.data.message.goods_introduce;
			}
		},
		onLoad() {
			this.getPicsCate()
			// document.getElementById('innerHTML').addEventListener('click',(e)=>{
			// 	e.preventDefault()
			// 	alert(11)
			// })
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: white;
			}
		}

		.right {
			height: 100%;
			width: 530rpx;
			margin: 0 auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
