<template>
    <div class="page page__home">
        <!--<div class="page__hd">-->
            <!--<header-component headerTitle="资讯"></header-component>-->
        <!--</div>-->
        <!--<div class="page__bd">-->
            <!--<div class="me-image"></div>-->
        <!--</div>-->
        <router-view></router-view>
        <div class="page__ft">
            <div class="weui-tabbar">
                <a href="#/news" class="weui-tabbar__item">
                    <img src="../assets/image/new.png" class="weui-tabbar__icon new__img">
                    <p class="weui-tabbar__label">资讯</p>
                </a>
                <a href="#/hero" class="weui-tabbar__item">
                    <img src="../assets/image/lol.png" class="weui-tabbar__icon lol__img">
                    <p class="weui-tabbar__label">英雄</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <img src="../assets/image/player.png" class="weui-tabbar__icon player__img">
                    <p class="weui-tabbar__label">玩家</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                    <img src="../assets/image/my.png" class="weui-tabbar__icon my__img">
                    <p class="weui-tabbar__label">我的</p>
                </a>
            </div>
        </div>
    </div>
</template>
<style>
    .page__bd{
        height: 100%;
    }
    .me-image {
        height: 100%;
        background-image: url("../assets/image/me.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: -400px;
    }
    .new__img {
        color: #78a0d2
    }

    .lol__img {
        color: #3fb44f;
    }

    .player__img {
        color: #e6965a;
    }

    .my__img {
        color: #b783c8;
    }
</style>

<script>
    import 'weui';
    import header from './reuse/header.vue';
    export default{
        name: 'home',
        data(){
            return {}
        },
        mounted(){
            console.log('is mounted');
        },
        components: {
            'header-component': header
        }
    }
</script>