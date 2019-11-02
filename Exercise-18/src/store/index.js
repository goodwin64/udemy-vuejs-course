import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalFunds: 10000,
    myStocks: [],
    marketStocks: [
      { companyName: 'BMW', price: 75 },
      { companyName: 'Google', price: 114 },
      { companyName: 'Apple', price: 312 },
      { companyName: 'Twitter', price: 9 },
    ],
  },
  getters: {
    totalFunds: state => state.totalFunds,
    myStocks: state => state.myStocks,
    marketStocks: state => state.marketStocks,
  },
  mutations: {
    buyStocks(state, { companyName, stocksCount }) {
      const company = state.marketStocks.find((company) => company.companyName === companyName);
      const companyStockPrice = company ? company.price : 0;
      state.totalFunds -= stocksCount * companyStockPrice;

      const myStock = state.myStocks.find((company) => company.companyName === companyName);
      if (myStock) {
        myStock.count += stocksCount;
      } else {
        state.myStocks.push({
          companyName,
          count: stocksCount,
          price: companyStockPrice,
        });
      }
    },
    sellStocks(state, { companyName, stocksCount }) {
      const company = state.marketStocks.find((company) => company.companyName === companyName);
      const companyStockPrice = company ? company.price : 0;
      state.totalFunds += stocksCount * companyStockPrice;

      const myStock = state.myStocks.find((company) => company.companyName === companyName);
      if (myStock) {
        myStock.count -= stocksCount;
      }
      state.myStocks = state.myStocks.filter(({ count }) => count > 0);
    },
  },
  actions: {},
  modules: {},
});
