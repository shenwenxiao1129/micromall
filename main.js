import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'

Vue.prototype.$myRequest = myRequest

Vue.filter('formDate',(time)=>{
	const nDate = new Date(time);
	const year = nDate.getFullYear();
	const month = (nDate.getMonth()+1).toString().padStart(2,0);
	const date = nDate.getDate().toString().padStart(2,0);
	return year+"-"+month+"-"+ date
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
