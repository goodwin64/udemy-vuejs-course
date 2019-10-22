<template>
    <div class="container">
        <div class="row" v-if="notDestroyedYet">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-custom-on:click="increment">+1</button>
<!--                <button v-custom-on:click="increment(5)">+5</button>-->
<!--                <input v-custom-on:change="increment($event)" type="number"/>-->
                <button v-custom-on:click="resetCounter">Reset</button>

                <p>{{counter}}</p>

                <button @click="notDestroyedYet = false">clear all</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        notDestroyedYet: true,
      };
    },
    directives: {
      'custom-on': {
        bind(el, binding, vnode, oldVnode) {
          console.log('vnode.context', vnode.context);
          const handler = getHandler(binding.expression, vnode.context);
          console.log('handler', handler);
          el.addEventListener(binding.arg, handler);
          el.customOnHandler = handler;
          console.log('binding', binding);
          console.log('----------------------------------------');
        },
        unbind(el, binding) {
          console.log('el.customOnHandler', el.customOnHandler);
          el.removeEventListener(binding.arg, el.customOnHandler);
        },
      },
    },
    methods: {
      increment(value) {
        value = Number.isFinite(value) ? value : 1;
        this.counter += value;
      },
      resetCounter() {
        this.counter = 0;
      },
    },
  };


  function getHandler(expression, context) {
    expression = expression.replace(/'/g, '"');
    const handlerAsIs = expression
      && expression in context
      && typeof context[expression] === 'function'
      && context[expression];
    if (handlerAsIs) {
      console.log('as is');
      return handlerAsIs;
    }

    const handlerName = expression.slice(0, expression.indexOf('('));
    const handlerParams = expression
      .slice(expression.indexOf('(') + 1, expression.indexOf(')'))
      .split(',')
      .map(param => JSON.parse(param.trim()));
    const handler = typeof expression === 'string'
      && handlerName
      && handlerName in context
      && typeof context[handlerName] === 'function'
      && context[handlerName];
    if (handler) {
      console.log('handlerWithParams', handler, handlerParams);
      return function () {
        handler(...handlerParams);
      };
    }

    const noopHandler = () => {
    };

    return noopHandler;
  }
</script>

<style>
</style>
