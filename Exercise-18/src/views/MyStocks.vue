<template>
  <div class="about">
    <h1>My stocks:</h1>
    <p v-if="myStocks.length === 0">You have no stocks</p>
    <div v-else class="row">
      <my-stock v-for="stock in myStocks" v-bind="stock"></my-stock>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MyStock from '../components/MyStock';

  export default {
    components: {
      'my-stock': MyStock,
    },
    computed: {
      ...mapGetters(['myStocks'])
    },
  }
</script>
