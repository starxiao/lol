<template>
    <div class="weui-grids">
        <div class="weui-grid" v-for="item in heroData" :key="item.key">
            <router-link :to="{path: item.key}" append>
                <div class="weui-grid__icon hero-image">
                    <img v-bind:src="item.url" alt="">
                </div>
                <p class="weui-grid__label">
                    {{item.id}}
                </p>
                <p class="weui-grid__label">
                    {{item.name}}
                </p>
            </router-link>
        </div>
    </div>
    <!--<router-view v-else></router-view>-->
</template>
<style>
    .weui-grids {
        margin-top: 58px;
    }

    .hero-image {
        width: 80px;
        height: 80px;
    }
</style>
<script>
    import axios from 'axios';
    export default{
        name: 'hero',
//        beforeRouteEnter(){
//        },
        beforeCreate(){
            this.$store.state.headerTitle = '周免英雄';
            this.$store.state.temp = (this.$route.path === '/');
            console.log(this.$store.state.temp);
        },
        data(){
            return {
                heroData: [],
                url: 'url',
                heroInfoTemp: true,
            }
        },
        created(){
            let self = this, resData = [];
            axios.get(self.$store.state.url + 'Free', {
                headers: self.$store.state.token,
            }).then(function (res) {
                console.log(res.data.data[0]);
                let item = Object.keys(res.data.data[0]);
                console.log(item);
                for (let i = 0; i < item.length; i++) {
                    //console.log(res.data.data[0][item[i]]);
                    resData[i] = {
                        key: 0,
                        id: '',
                        name: '',
                        url: '',
                    };
                    resData[i].key = res.data.data[0][item[i]].key;
                    resData[i].id = res.data.data[0][item[i]].id;
                    resData[i].name = res.data.data[0][item[i]].name;
                    //console.log(res.data.data[0][item[i]].key);
                    axios.get(self.$store.state.url + 'GetChampionIcon?id=' + res.data.data[0][item[i]].key, {
                        headers: self.$store.state.token,
                    }).then(function (res) {
                        //console.log(res.data.data[0]);
                        resData[i].url = res.data.data[0].return;
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
                console.log(resData);
                self.heroData = resData;

            }).catch(function (err) {
                console.log(err);
            })
        },
        mounted(){
            console.log('is mounted');
        },
        beforeUpdate(){
            console.log('is beforeUpdate');
        },
        updated(){
            console.log('updated');
        },
        methods: {
            click(){
                console.log(this.$router.path);
                this.heroInfoTemp = false;
                this.url = 'my url';
            },
        }

    }
</script>