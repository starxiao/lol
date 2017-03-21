
<!--this is search page-->
<template>
    <div class="container">
        <div class="weui-search-bar" ref="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索玩家或者英雄"
                           @click="textInput" ref="searchInput">
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" ref="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" ref="search_commit" @click="searchCommit">搜索</a>
        </div>
        <div class="user-show">
            <div class="weui-cells" v-for="item in user" :key="item.id">
                <router-link class="weui-cell weui-cell_access" :to="{path: item.username}" append>
                    <div class="weui-cell__hd">
                        <img class="champion-image" :src="item.imgUrl" alt="">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p class="text">{{item.username}} {{item.areaName}}</p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style>
    .text{
        padding-left: 15px;
        color: #999;
    }
</style>
<script>
    import axios from 'axios';
    export default{
        beforeCreate(){
            this.$store.state.headerTitle = '搜索';
        },
        data(){
            return {
                username: '',
                user: [],
            }
        },
        methods: {
            textInput(){
                console.log('is click');
                this.$refs.searchBar.className = 'weui-search-bar weui-search-bar_focusing';
            },
            searchCommit(){
                console.log('commit');
                let self = this,
                    url = self.$store.state.url,
                    token = self.$store.state.token;
                //再次搜索时清除之前显示的加上判断排除第一次搜索没有user.length
                if(self.user.length){self.user.length = 0;}
                //搜到英雄展示
                if (self.$refs.searchInput.value.length) {

                    axios.get(url + 'UserArea?keyword=' + encodeURI(self.$refs.searchInput.value), {
                        headers: token
                    }).then(function (res) {

                        console.log(res.data);
                        for (let i = 0; i < res.data.data.length; i++) {

                            //变量记住每一个大区id；
                            axios.get(url + 'UserHotInfo?qquin=' + res.data.data[i].qquin +
                                '&vaid=' + res.data.data[i].area_id, {
                                headers: token
                            }).then(function (res) {
                                console.log(res.data);
                                //get areaName
                                axios.get(url + 'GetAreaName?id=' + res.data.data[0].area_id, {
                                    headers: token
                                }).then(function (data) {
                                    //get imgUrl
                                    axios.get(url + 'GetUserIcon?iconid=' + res.data.data[0].icon, {
                                        headers: token
                                    }).then(function (response) {
                                        self.user.push({
                                            id: String(res.data.data[0].area_id),
                                            username: self.$refs.searchInput.value,
                                            areaName: data.data.data[0].return,
                                            imgUrl: response.data.data[0].return
                                        });
                                        console.log(self.user);
                                    })
                                })
                            })
                        }
                    })
                }
            }
        },
    }
</script>