<template>
    <div class="col-xs-12 col-md-6 col-xl-4">
        <div class="card mx-3">
            <div class="card-header">
                {{companyName}} (price: {{price | currency}})
            </div>
            <div class="card-body">
                <div class="row justify-content-between">
                    <input
                            type="number"
                            placeholder="Quantity:"
                            min="1"
                            :max="maxStocksCount"
                            v-model.number="stocksCountToBuy"
                    >
                    <button
                            class="btn btn-secondary"
                            @click="buyStocks"
                            :disabled="!isQuantityValid"
                    >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MarketStock',
    data() {
      return {
        stocksCountToBuy: undefined,
      };
    },
    props: {
      companyName: String,
      price: Number,
      totalFunds: Number,
    },
    computed: {
      maxStocksCount() {
        return Math.floor(this.totalFunds / this.price);
      },
      isQuantityValid() {
        return Number.isInteger(this.stocksCountToBuy) && this.stocksCountToBuy <= this.maxStocksCount;
      },
    },
    methods: {
      buyStocks() {
        this.$store.commit('buyStocks', {
          companyName: this.companyName,
          stocksCount: this.stocksCountToBuy,
        });
        this.stocksCountToBuy = undefined;
      },
    },
  };
</script>

<style scoped>

</style>
