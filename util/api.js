const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request({
			method:options.method || 'get',
			url: BASE_URL + options.url,
			data:options.data || {},
			success: (res) => {
				if (res.data.meta.status !== 200) {
					return uni.showToast({
						title: '数据获取失败',
					});
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败，请确认网址是否填写正确！',
				});
				reject(err)
			}
		})
	})
}
