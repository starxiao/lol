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
const Free = Vue.component(
    'free',
    () => import('./components/free.vue')
)
const Hero = Vue.component(
    'hero',
    () => import('./components/reuse/hero.vue')
)
const Search = Vue.component(
    'search',
    () => import('./components/search.vue')
)
const Self = Vue.component(
    'self',
    () => import('./components/self.vue')
)
const Login = Vue.component(
    'login',
    () => import('./components/login.vue')
)

export{
    Home,
    News,
    Free,
    Hero,
    Search,
    Self,
    Login,
}