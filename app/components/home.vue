<template>
    <div class="page page__home">
        <div class="page__hd">
            <header-component v-bind:headerTitle="getHeaderTitle"></header-component>
        </div>
        <div class="page__bd">
            <div class="weui-tab__panel">
                <router-view></router-view>
            </div>
            <div class="weui-tabbar">
                <a href="#/news" class="weui-tabbar__item">
                    <img src="../assets/image/new.png" class="weui-tabbar__icon new__img">
                    <p class="weui-tabbar__label">资讯</p>
                </a>
                <a href="#/hero" class="weui-tabbar__item">
                    <img src="../assets/image/lol.png" class="weui-tabbar__icon lol__img">
                    <p class="weui-tabbar__label">英雄</p>
                </a>
                <a href="#/search" class="weui-tabbar__item">
                    <img src="../assets/image/player.png" class="weui-tabbar__icon player__img">
                    <p class="weui-tabbar__label">玩家</p>
                </a>
                <a href="#/self" class="weui-tabbar__item">
                    <img src="../assets/image/my.png" class="weui-tabbar__icon my__img">
                    <p class="weui-tabbar__label">我的</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    import 'weui';
    import header from './reuse/header.vue';
    export default{
        name: 'home',
//        beforeRouteEnter(to,from,next){
//            console.log(this);
//            next(function (vm) {
//               // vm.$store.state.headerTitle = 'before';
//            })
//        },
        beforeCreate(){
            console.log(this.$route.path);
            this.$store.state.temp = (this.$route.path === '/');
            console.log(this.$store.state.temp);
            this.$store.state.headerTitle = 'LOL';
        },
        mounted(){
            console.log('is mounted');
        },
        data(){
            return {
                temp: true,
            }
        },
        computed: {
            getHeaderTitle(){
                return this.$store.state.headerTitle;
            },
            getTemp(){
                return this.$store.state.temp;
            }
        },
        components: {
            'header-component': header
        }
    }
</script>