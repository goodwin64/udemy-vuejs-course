<template>
  <li
          class="list-group-item btn"
          @click="selectServer(server)"
  >
    <p>Server #{{ server.id }}</p>
    <meter
            min="0"
            max="1"
            low="0.35"
            high="0.7"
            optimum="0.25"
            :value="server.howBusy"
            :title="server.howBusy"
    >
    </meter>
  </li>
</template>

<script>
  export default {
    props: {
      server: Object,
      selectServer: Function,
    },
    inheritAttrs: false,
  };
</script>

<style>

</style>
