import Vue from 'vue'
import Router from 'vue-router'
import first from '../components/first.vue'
import second from '../components/second.vue'
import third from '../components/third.vue'
import fourth from '../components/fourth.vue'
import fifth from '../components/fifth.vue'
import sixth from '../components/sixth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/first"
    },
    {
      path:"/first",
      component:first
    },
    {
      path:"/second",
      component:second
    },
    {
      path:"/third",
      component:third
    },
    {
      path:"/fourth",
      component:fourth
    },
    {
      path:"/fifth",
      component:fifth
    },
    {
      path:"/sixth",
      component:sixth
    }
  ]
})
