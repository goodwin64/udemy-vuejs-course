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
  import { EventBus } from '../../main';

  export default {
    props: {
      server: Object,
    },
    inheritAttrs: false,
    methods: {
      selectServer(server) {
          EventBus.selectServer(server);
      },
    },
  };
</script>

<style>

</style>
