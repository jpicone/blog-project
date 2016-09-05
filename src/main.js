import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */

Vue.use(VueRouter)

new Vue({
  el: 'body',
  components: {
    App
  }
})

var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

var router = new VueRouter()
router.map({
  '/foo': {
    component: Foo
  }
})

router.start(App, '#app')
