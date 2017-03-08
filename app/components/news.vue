<template>
    <div class="page page__news">
        <div class="page__hd">
            <header-component headerTitle="资讯"></header-component>
        </div>
        <div class="page__bd">
            <div class="me-image"></div>
        </div>
    </div>
</template>
<style>
    .page__news,.page__bd{
        height: 100%;
    }
    .me-image {
        height: 100%;
        background-image: url("../assets/image/me.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: -400px;
    }
</style>
<script>
    import Header from './reuse/header.vue';
    export default{
        name: 'news',
        components:{
            'header-component': Header
        }
    }

</script>