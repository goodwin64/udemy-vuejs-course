import Vue from 'vue';
import Vuex from 'vuex';
import random from 'random-all';

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
    entireStore: state => state,
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
    endDay(state) {
      state.marketStocks.forEach(stock => {
        const minDelta = stock.price < 20 ? 0 : -10;
        stock.price += random.getInt(minDelta, +10);
      });
    },
    loadData(state, loadData) {
      state.totalFunds = loadData.totalFunds;
      state.myStocks = loadData.myStocks;
      state.marketStocks = loadData.marketStocks;
    }
  },
  actions: {},
  modules: {},
});
