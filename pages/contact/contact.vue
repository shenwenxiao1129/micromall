<template>
	<view class="contact">
		<image class="img" src="../../static/img/about.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090</view>
			<view>小区地址：浙江省杭州市下沙经济开发区4好大街187号盛泰时代山</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.043635, //经度120.043635,30.379015
				latitude: 30.379015, //纬度
				scale:16,
				markers: [{
					longitude: 120.043635, //经度120.043635,30.379015
					latitude: 30.379015, //纬度
					iconPath: '../../static/img/logo.png',
					width: 30,
					height: 30,
					title: '甲骨文天眼梦溪小镇'
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;

			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
