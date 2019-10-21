new Vue({
  el: '#exercise',
  data: {
    value: 0,
  },
  computed: {
    result: function () {
      if (this.value !== 37) {
        return 'not there yet'
      }
      return 'done'
    }
  },
  watch: {
    result: function () {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    }
  }
});
