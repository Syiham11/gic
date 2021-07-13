import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router,
    store,
}).$mount('#app')
