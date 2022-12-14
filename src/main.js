import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Icon from './components/icon/icon'
Vue.component('Icon', Icon)

import Footer from './components/indexFooter/indexFooter'
Vue.component('Footer', Footer)

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
