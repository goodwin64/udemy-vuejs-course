import Vue from 'vue'
import App from './App.vue'

export const EventBus = new Vue({
  methods: {
    selectServer(server) {
      this.$emit('SELECT_SERVER', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
