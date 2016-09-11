import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import Foo from './components/Foo'
import Home from './components/Home'
import Room from './components/Room'
import Jew from './components/Jew'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Hello
  },
  '/foo': {
    component: Foo
  },
  '/home': {
    component: Home
  }
})

router.start(App, '#app')
