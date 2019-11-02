<template>
    <div class="col-xs-12 col-md-6 col-xl-4">
        <div class="card mx-3">
            <div class="card-header">
                {{companyName}} (price: {{price | currency}} | quantity: {{count}})
            </div>
            <div class="card-body">
                <div class="row justify-content-between">
                    <div>
                        <input
                                type="number"
                                placeholder="Quantity:"
                                min="1"
                                :max="count"
                                v-model.number="stocksCountToSell"
                                v-on:keypress.enter="sellStocks"
                        >
                        <button @click="stocksCountToSell = undefined">clear</button>
                        <button @click="stocksCountToSell = count">all</button>
                    </div>
                    <button class="btn btn-secondary" @click="sellStocks">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MyStock',
    data() {
      return {
        stocksCountToSell: undefined,
      };
    },
    methods: {
      sellStocks() {
        this.$store.commit('sellStocks', {
          companyName: this.companyName,
          stocksCount: this.stocksCountToSell,
        });
        this.stocksCountToSell = undefined;
      },
    },
    props: {
      companyName: String,
      price: Number,
      count: Number,
    },
  };
</script>

<style scoped>

</style>
