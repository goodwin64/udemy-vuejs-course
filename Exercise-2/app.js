new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    storeValue: function (e) {
      this.value = e.target.value;
    },
    alert: function () {
      alert()
    },
  },
});
