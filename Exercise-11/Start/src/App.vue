<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>1</h3>
                <input type="text" v-model="ex1">
                <p>{{ex1 | reversed}}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>2</h3>
                <input type="text" v-model="ex2">
                <p v-show="ex2">{{ex2 | wordLength}}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>3</h3>
                <p>{{ex1reversed}}</p>
                <p>{{ex2length}}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>4</h3>
                <p>{{ex4length}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  import withWordLength from './mixins/withWordLength';

  export default {
    computed: {
      ex1reversed() {
        return this.ex1.split('').reverse().join('');
      },
      ex2length() {
        return this.ex2.length;
      },
    },
    data() {
      return {
        ex1: '',
        ex2: '',
      };
    },
    filters: {
      reversed(s) {
        return s.split('').reverse().join('');
      },
    },
    mixins: [withWordLength],
  };
</script>

<style>
</style>
