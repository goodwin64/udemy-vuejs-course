<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="c = 'Blue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="c = 'Green'" class="btn btn-success">Load Green Template</button>
        <button @click="c = 'Red'" class="btn btn-danger">Load Red Template</button>
        <hr>
        <template v-if="c === 'Blue'">
          <component is="app-blue"></component>
        </template>
        <template v-else-if="c === 'Green'">
          <component is="app-green"></component>
        </template>
        <template v-else>
          <component is="app-red"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
    },
    data() {
      return {
        c: 'Blue',
      };
    },
  };
</script>

<style>
</style>
