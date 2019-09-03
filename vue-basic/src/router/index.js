import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Form from '@/components/Form'
import List from '@/components/Todo/List'
import Dynamic from '@/components/Dynamic&Async/Dynamic'
import TransitionDemo from '@/components/TransitionDemo'
import AnimationDemo from '@/components/AnimationDemo'
import MixinDemo from '@/components/Mixin/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: HelloWorld.name,
      component: HelloWorld,
    },
    {
      path: '/test',
      name: Test.name,
      component: Test,
    },
    {
      path: '/test2',
      name: Test2.name,
      component: Test2,
    },
    {
      path: '/test3',
      name: Test3.name,
      component: Test3,
    },
    {
      path: '/form',
      name: Form.name,
      component: Form,
    },
    {
      path: '/list',
      name: List.name,
      component: List,
    },
    {
      path: '/dynamic',
      name: Dynamic.name,
      component: Dynamic,
    },
    {
      path: '/transition',
      name: TransitionDemo.name,
      component: TransitionDemo,
    },
    {
      path: '/animation',
      name: AnimationDemo.name,
      component: AnimationDemo,
    },
    {
      path: '/',
      name: MixinDemo.name,
      component: MixinDemo,
    },
  ],
})
