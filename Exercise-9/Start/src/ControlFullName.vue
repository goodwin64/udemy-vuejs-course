<template>
  <input type="text" class="form-control" @change="handleChange" />
</template>

<script>
  export default {
    methods: {
      handleChange(event) {
        this.$emit('input', event.target.value);
      }
    }
  }
</script>
