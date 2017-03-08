/**
 * Created by xiaoxx on 2017/3/6.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {
    Home,
    News,
    Hero,
} from './components.js';

const router = new VueRouter({
    //   mode:'history',                需要后台支持  去掉#
    routes: [
        {
            path: '/',
            component: Home,
            children:[
                {
                    path: '/news',
                    component: News,
                },
                {
                    path: '/hero',
                    component: Hero,

                }
            ]
        },
    ]
});

export default router;