<template>
  <header class="header">
    <div class="header-left">
      <h2 class="logo">Stock trader</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/stocks">Stocks</router-link>
    </div>

    <div class="header-right">
      <button>End day</button>
      <button>Save & load</button>
      <p>Funds: $10'000</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
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
</style>
