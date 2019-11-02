<template>
    <div>
        <h1>Buy stocks</h1>
        <div class="row">
            <market-stock v-for="stock in marketStocks" v-bind="stock" :totalFunds="totalFunds"></market-stock>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MarketStock from '../components/MarketStock';

  export default {
    name: 'BuyStocks',
    computed: {
      ...mapGetters(['marketStocks', 'totalFunds']),
    },
    components: {
      'market-stock': MarketStock,
    },
  };
</script>

<style scoped>

</style>
