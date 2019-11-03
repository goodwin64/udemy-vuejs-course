<template>
    <div>
        <h1>Log in</h1>
        <form @submit.prevent="submitLogin">
            <label for="email">
                <input
                        type="email"
                        id="email"
                        v-model="email"
                        placeholder="Enter your email"
                >
            </label>
            <button type="submit" :disabled="!email">Log in</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: undefined,
      };
    },
    methods: {
      submitLogin() {
        this.$store.dispatch('login', {
          email: this.email,
        })
      }
    }
  };
</script>

<style scoped>

</style>
