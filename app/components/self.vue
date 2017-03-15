<template>
    <div class="container">

    </div>
</template>
<style>
    .container{
        margin-top: 58px;
    }
</style>
<script>
    import axios from 'axios';
    import {router} from 'vue-router';
    export default{
        beforeCreate(){
            if(!(localStorage.getItem('username'))){
                this.$router.push({path:'login'});
            }
            this.$store.state.headerTitle = localStorage.getItem('username');
            axios.get(this.$store.state.url + 'UserArea?keyword=' + localStorage.getItem('username'),{
                headers: this.$store.state.token
            }).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log('error'+err);
            });
        },
        data(){
            return{

            }
        },
        created(){

        }
    }
</script>