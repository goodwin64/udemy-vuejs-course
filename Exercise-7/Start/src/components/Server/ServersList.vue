<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <servers-list-item
              v-for="server in servers"
              :server="server"
              :selectServer="selectServer"
      ></servers-list-item>
    </ul>
  </div>
</template>

<script>
  import ServersListItem from './ServersListItem.vue';

  export default {
    components: { ServersListItem },
    props: ['selectServer'],
    data() {
      return {
        servers: [
          { id: 1, howBusy: 0.1 },
          { id: 2, howBusy: 0.98 },
          { id: 3, howBusy: 0.7 },
          { id: 4, howBusy: 0.3 },
        ],
      };
    },
  };
</script>

<style>

</style>
