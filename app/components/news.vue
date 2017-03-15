<template>
    <div class="me-image"></div>
</template>
<style>
    .me-image {
        height: 100%;
        background-image: url("../assets/image/me.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: -400px;
    }
</style>
<script>
    export default{
        name: 'news',
        beforeCreate(){
            this.$store.state.headerTitle = '资讯';
            this.$store.state.temp = (this.$route.path === '/home');
            console.log(this.$store.state.temp);
        },
    }

</script>