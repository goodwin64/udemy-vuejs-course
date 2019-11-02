<template>
    <div>
        <h1>Save/load</h1>
        <div>
            <button @click="save">Save</button>
        </div>

        <div>
            <textarea v-model="loadData" cols="30" rows="10"></textarea>
            <button @click="load" :disabled="isLoadDisabled">Load</button>
        </div>
    </div>
</template>

<script>
    import FileSaver from 'file-saver';
    import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        loadData: '',
      };
    },
    computed: {
      ...mapGetters(['entireStore']),
      isLoadDisabled() {
        return !this.loadData;
      },
    },
    name: 'SaveOrLoad',
    methods: {
      save() {
        const file = new File([JSON.stringify(this.entireStore, null, 4)], 'store.json');
        FileSaver.saveAs(file, 'store.json')
      },
      load() {
        try {
          const dataParsed = JSON.parse(this.loadData);
          this.$store.commit('loadData', dataParsed);
        } catch (e) {
          console.error('cannot parse loadData');
        }
        this.loadData = '';
      },
    },
  };
</script>

<style scoped>

</style>
