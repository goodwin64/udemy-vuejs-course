<template>
  <header class="header">
    <nav class="header-left">
      <h2 class="logo">Stock trader</h2>
      <router-link class="p-2" to="/">Home</router-link>
      <router-link class="p-2" to="/stocks/my">My stocks</router-link>
      <router-link class="p-2" to="/stocks/buy">Buy stocks</router-link>
    </nav>

    <div class="header-right">
      <button class="btn btn-primary">End day</button>
      <button class="btn btn-secondary" disabled>Save & load</button>
      <p>Funds: {{totalFunds | currency}}</p>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['totalFunds'])
    }
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

  .header-left,
  .header-right {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline;
  }

  .router-link-exact-active {
    border-bottom: 3px solid var(--primary);
  }
</style>
