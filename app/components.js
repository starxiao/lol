/**
 * Created by xiaoxx on 2017/3/6.
 */
import Vue from 'vue';


const Home = Vue.component(
    'home',
    () => import('./components/home.vue')
)
const News = Vue.component(
    'news',
    () => import('./components/news.vue')
)
const Hero = Vue.component(
    'hero',
    () => import('./components/hero.vue')
)
export{
    Home,
    News,
    Hero,
}