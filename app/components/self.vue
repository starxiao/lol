<template>
    <div class="container">
        <user-component :username="getUsername"></user-component>
        <battle-component :username="getUsername"></battle-component>
    </div>
</template>
<script>
    import axios from 'axios';
    import {router} from 'vue-router';
    import user from './reuse/user.vue';
    import battle from './reuse/battle.vue';
    export default{
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