<template>
  <div class="col-xs-12 col-sm-6">
    <h3>Selected server</h3>
      <template v-if="selectedServer">
          <p>id: <span>{{selectedServer.id}}</span></p>
          <p>Busy value: <span>{{selectedServer.howBusy}}</span></p>
          <button @click="resetServer">X</button>
      </template>
      <p v-else>No selected server</p>
  </div>

</template>

<script>
  import { EventBus } from '../../main';

  export default {
    data() {
      return {
        selectedServer: null,
      };
    },
    created() {
      EventBus.$on('SELECT_SERVER', (server) => {
        this.selectedServer = server;
      });
    },
    methods: {
      resetServer(event) {
        EventBus.selectServer(null);
      },
    }
  };
</script>

<style>

</style>
