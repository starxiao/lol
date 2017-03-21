<template>
    <div class="container">
        <user-component :username="getUsername"></user-component>
        <battle-component :username="getUsername"></battle-component>
    </div>
</template>
<style>
    .container {
        margin-top: 58px;
    }
</style>
<script>
    import axios from 'axios';
    import {router} from 'vue-router';
    import user from './reuse/user.vue';
    import battle from './reuse/battle.vue';
    export default{
//        beforeRouteEnter(to,from,next){
//            axios.get('http://lolapi.games-cube.com/UserArea?keyword=' + username, {
//                headers: vm.$store.state.token
//            }).then(function (res){
//                params.qquin = res.data.data[0].qquin;
//                params.vaid = res.data.data[0].area_id;
//            })
//            console.log('beforeRouteEnter');
//            next(function (vm) {
//                if(!(localStorage.getItem('username'))){
//                    vm.$router.push({path:'login'});
//                }
//                let username = localStorage.getItem('username');
//                vm.$store.state.headerTitle = username;
//
//            })
//        },
        beforeCreate(){

        },
        data(){
            return {
                username: '',
            }
        },
        created(){
            console.log(this.$route.path);
            console.log(this.$route.path.split('/'));
            let path = this.$route.path.split('/');
            if(path[2]  === undefined) {
                if (!(localStorage.getItem('username'))) {
                    this.$router.push({path: 'login'});
                }
                this.$store.state.headerTitle = localStorage.getItem('username');
                this.username = localStorage.getItem('username');
            }else{
                this.$store.state.headerTitle = path[2];
                this.username = path[2];
            }
        },
        beforeUpdate(){
            console.log('beforeCreate');
        },
        updated(){
            console.log('update');
        },
        computed: {
            getUsername(){
                return this.username;
            },
        },
        components: {
            'user-component': user,
            'battle-component': battle
        }

    }
</script>