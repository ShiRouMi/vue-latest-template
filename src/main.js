import Vue from 'vue'
import App from './App.vue'
import "@/element/element"

import VueDragging from "@/directives/dnd"
Vue.use(VueDragging)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
