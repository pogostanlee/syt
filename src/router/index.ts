import {createRouter, createWebHashHistory} from 'vue-router';
//获取路由实例
export default createRouter({
    history: createWebHashHistory(),
    //管理路由
    routes: [
        //首页
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home/index.vue')
        },
        //医院页面
        {
            path: '/hospital',
            name: 'hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        //根目录重定向
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为
    scrollBehavior(){
        return{
            left: 0,
            top: 0
        }
    },

})

