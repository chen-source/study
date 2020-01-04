//引入vue框架
import Vue from 'vue'
//引入vue-router框架
import Router from 'vue-router'
//引入页面组件，命名为HelloWorld
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Test from '@/views/Test'
import ElementStudy from '@/views/ElementStudy'
import layout from '@/views/layout'
import form from '@/views/form'
import Sys from '@/router/sys/index'
//vue全局使用router
Vue.use(Router)
//定义路由配置
export default new Router({
  routes: [   //配置路由，这里是一个数组
    {   //每一个链接都是一个对象
      path: '/',  //链接路径
      name: 'HelloWorld2', //路由名称
      component: HelloWorld   //对应的组件模板
      // redirect:'/login' //重定向到登录页面
    },
    Sys,
    {
      path:'/de',
      name:'demo1',
      component:Demo 
    },
    {
      path:'/test',
      name:'test',
      component:Test
    },
    {
      path:'/elementStudy',
      name:'elementStudy',
      component:ElementStudy
    },
    {
      path:'/layout',
      name:'layout',
      component:layout
    },
    {
      path:'/form',
      name:'form1',
      component:form
    }
  ]
})
