import Login from '@/views/login/login'

const router={
    name:'login',
    path:'/login',
    component:Login,
    meta:{
        title:'登录'
    }
    // children:[
    //     {
    //         name:'a',
    //         path:'a',//子路由的开头  不要加  /  , 加了之后，就不能写成/login/loginOne  ，而是/loginOne
    //         component:()=>import('@/views/login/aOne'),
    //         meta:{
    //             title:'登录One'
    //         }
    //     }
    // ]
}

export default router