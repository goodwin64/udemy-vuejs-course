import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SaveOrLoad from '../views/SaveOrLoad';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/stocks/my',
    name: 'myStocks',
    component: () => import(/* webpackChunkName: "MyStocks" */ '../views/MyStocks.vue'),
  },
  {
    path: '/stocks/buy',
    name: 'buyStocks',
    component: () => import(/* webpackChunkName: "BuyStocks" */ '../views/BuyStocks.vue'),
  },
  {
    path: '/save-or-load',
    name: 'saveLoad',
    component: SaveOrLoad,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
