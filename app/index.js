/**
 * Created by xiaoxx on 2017/3/6.
 */
import Vue from 'vue';
import View from './components/view.vue';
import router from './router.js';
import {store} from './store/store.js';
import 'vconsole';
import './assets/css/index.css';
const app = new Vue({
    router,
    store,
    render:function (h) {
        return h(View);
    }
}).$mount('#app');
