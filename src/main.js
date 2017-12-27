import Vue from 'vue'
import App from './App.vue'

import RLU from '@dp/rlu2'


// RLU.init(375, 50);

console.log(document.body.clientWidth)

document.addEventListener('DOMContentLoaded', function () {
    console.log(document.body.clientWidth)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
