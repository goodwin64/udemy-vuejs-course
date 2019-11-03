<template>
    <div id="nav">
        <template v-if="isAuthorized">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <button @click="submitLogout">Log out ({{userData.email}})</button>
        </template>
        <template v-else>
            <router-link to="/login">Log in</router-link>
            <router-link to="/signup">Sign up</router-link>
        </template>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['isAuthorized', 'userData']),
    },
    methods: {
      submitLogout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>

<style scoped>

</style>
