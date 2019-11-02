<template>
    <header class="header">
        <nav class="header-left">
            <h2 class="logo">Stock trader</h2>
            <router-link class="p-2" to="/">Home</router-link>
            <router-link class="p-2" to="/stocks/my">My stocks</router-link>
            <router-link class="p-2" to="/stocks/buy">Buy stocks</router-link>
            <router-link class="p-2" to="/save-or-load">Save/load</router-link>
        </nav>

        <div class="header-right">
            <button class="btn btn-primary" @click="endDay">End day</button>
            <p>Funds: {{totalFunds | currency}}</p>
        </div>
    </header>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['totalFunds']),
    },
    methods: {
      ...mapMutations(['endDay']),
    },
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
