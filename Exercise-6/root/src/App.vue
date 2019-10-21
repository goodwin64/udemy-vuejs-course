<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li
                  class="list-group-item"
                  v-for="index in 5"
                  :key="index"
          >
            Server #{{ index }}
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import AppFooter from './components/AppFooter';
  import AppHeader from './components/AppHeader';
  import ServerDetails from './components/ServerDetails';

  export default {
    components: {
      AppFooter,
      AppHeader,
      ServerDetails,
    },
  };
</script>

<style>

</style>
