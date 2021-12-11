<template>
	<view class="news">
		<news-list :list="newsList"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components:{
			newsList
		},
		
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/home/floordata'
				});
				// console.log(res.data.message)
				this.newsList = res.data.message;
				const fatherArr = res.data.message.map((item) => {
					const arr = item.product_list.map((list) => {
						// console.log(list)
						return list
					})
					return arr
				});
				console.log(fatherArr)
				// console.log(this)
				var newArr = [].concat.apply([], fatherArr);
				console.log(newArr)
				this.newsList = newArr
			}
		
		},
		computed:{

		}
		
		,
		onLoad() {
			this.getNews();
		}
	}
</script>

<style lang="scss">
	.news {
	
	}
</style>
