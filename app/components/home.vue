
<!-- this is home page-->

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
    import 'weui';                     // only import once
    import header from './reuse/header.vue';
    export default{
        name: 'home',
        beforeCreate(){
            console.log('is home');
            console.log(this.$route.path);
            this.$store.state.headerTitle = 'LOL';       //通过path判断headerTitle的值
        },
        data(){
            return {
                temp: true,
            }
        },
        beforeUpdate(){
            console.log('is beforeUpdate');
            if(this.$route.path === '/'){
                this.$store.state.headerTitle = 'LOL';
            }
        },
        computed: {
            getHeaderTitle(){
                return this.$store.state.headerTitle;              //return headerTitle to props
            },
        },
        components: {
            'header-component': header               // reuse header component
        }
    }
</script>