/**
 * Created by xiaoxx on 2017/3/6.
 */

import Vue from 'vue';
import Vuex from 'vuex';

// Vue.use(Vuex);
import {TOKEN} from './lib';
import {URL} from './lib';
export const store = new Vuex.Store({
    state:{
        token: TOKEN,
        url: URL,
        headerTitle: 'LOL',
        componentName: 'home',
    },

});
