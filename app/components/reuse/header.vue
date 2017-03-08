<template>
    <div class="page page__header">
        <div class="weui-navbar">
            <img class="goBack-img" src="../../assets/image/goback.png" alt="" @click="goBack">
            <div class="weui-navbar__item weui-bar__item_on header-text">
                {{headerTitle}}
            </div>
        </div>
    </div>
</template>
<style>
    .weui-navbar{
        background-color: #EAEAEA;
        align-items: center;
    }
    .goBack-img{
        width: 27px;
        height: 27px;
        margin-left: 20px;
    }
    .header-text{
        font-size: 20px;
    }
</style>
<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);
    const router = new VueRouter();
    export default{
        name: 'header',
        props:['headerTitle'],
        methods:{
            goBack(){
                router.back();
                console.log('is goback');
            }
        }
    }
</script>