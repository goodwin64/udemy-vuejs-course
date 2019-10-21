new Vue({
  el: '#exercise',
  data: {
    array: [{ name: 'Max' }, { name: 'Anna' }, { name: 'Chris' }, { name: 'Manu' }],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3',
    },
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21],
    },
    ex1show: true,
  },
  computed: {
    ex3entries: function () {
      return Object.entries(this.myObject);
    },
    ex4values: function () {
      return Object.values(this.testData)
    }
  }
});
