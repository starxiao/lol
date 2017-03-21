<!--this is free hero page-->

<template>
    <div class="container weui-grids">
        <div class="weui-grid" v-for="item in heroData" :key="item.key">
            <!--use router-link in vue-router unless a -->
            <!--router-link :to={path: 'path' or var}    append based on base url :key to use for v-for-->
            <router-link :to="{path: item.key}" append>
                <div class="weui-grid__icon hero-image">
                    <img :src="item.url" alt="">
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
</template>
<style>
    .hero-image {
        width: 80px;
        height: 80px;
    }
</style>
<script>
    import axios from 'axios';
    export default{
        name: 'hero',
        beforeCreate(){
            this.$store.state.headerTitle = '周免英雄';
        },
        data(){
            return {
                heroData: [],
            }
        },
        created(){
            let self = this, resData = [],
                url = self.$store.state.url,
                token = self.$store.state.token;
            axios.get(url + 'Free', {
                headers: token,
            }).then(function (res) {
                let item = Object.keys(res.data.data[0]);
                for (let i = 0; i < item.length; i++) {
                    resData[i] = {             //循环声明10个对象,如果没有就会导致显示不了
                        key: 0,
                        id: '',
                        name: '',
                        url: '',
                    };
                    resData[i].key = res.data.data[0][item[i]].key;
                    resData[i].id = res.data.data[0][item[i]].id;
                    resData[i].name = res.data.data[0][item[i]].name;
                    axios.get(url + 'GetChampionIcon?id=' + res.data.data[0][item[i]].key, {
                        headers: token,
                    }).then(function (res) {
                        resData[i].url = res.data.data[0].return;
                    })
                }
                self.heroData = resData;   //将数据动态绑定到heroData
                console.log(self.heroData);
            })
        },
    }
</script>