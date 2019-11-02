<template>
    <div class="home border col-12 col-md-6 mx-auto">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load data</p>
        <p>Click on "end day" to begin a new day</p>
        <p class="font-weight-bold">Your funds: {{totalFunds | currency}}</p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'home',
    computed: {
      ...mapGetters(['totalFunds']),
    },
  };
</script>

<style scoped>
</style>
