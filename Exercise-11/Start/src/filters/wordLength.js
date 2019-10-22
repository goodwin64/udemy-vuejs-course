import Vue from 'vue'

function wordLength(s) {
  return `(${s.trim().length})`;
}

Vue.filter('wordLength', wordLength);
