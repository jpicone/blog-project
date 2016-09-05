import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Hello
  },
  '/foo': {
    component: Foo
  }
})

router.start(App, '#app')
