<template>
    <div class="page page__hero">
        <div class="page__hd">
            <header-component headerTitle="英雄"></header-component>
        </div>
        <div class="page__bd">
            <div>this is hero</div>
        </div>
    </div>
</template>
<style>
    /*.page__hero,.page__hd{*/
        /*height: 100%;*/
    /*}*/
</style>
<script>
    import Header from './reuse/header.vue';
    export default{
        name: 'hero',
        components:{
            'header-component': Header
        }
    }
</script>