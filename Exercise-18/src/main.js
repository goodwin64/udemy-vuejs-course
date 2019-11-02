import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (VueCurrencyFilter) {
  Vue.use(VueCurrencyFilter, {
    symbol: "$",
    thousandsSeparator: "'",
    fractionCount: 0,
    fractionSeparator: ".",
    symbolPosition: "front",
    symbolSpacing: false
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
