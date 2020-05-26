import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import "@/element/element"

import VueDragging from "@/directives/dnd"
Vue.use(VueDragging)

import "@/components" // 导入全局组件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
