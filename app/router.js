/**
 * Created by xiaoxx on 2017/3/6.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {
    Home,
    News,
    Free,
    Hero,
    Search,
    Self,
    Login,
} from './components.js';
const router = new VueRouter({
    //mode:'history',      //                需要后台支持  去掉#
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children:[
                {
                    path: '/news',
                    component: News,
                },
                {
                    path: '/hero',
                    name: 'hero',
                    component: Free,

                },
                {
                    path: '/hero/:id',
                    component: Hero
                },
                {
                    path: '/search',
                    component: Search,
                },
                {
                    path: '/search/:username',
                    component: Self,
                },
                {
                    path: '/self',
                    component: Self,
                },
                {
                    path: '/login',
                    component: Login

                }
            ]
        },
    ]
});

export default router;