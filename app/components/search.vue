<template>
    <div class="container">
        <div class="weui-search-bar" ref="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input  type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索玩家或者英雄"
                            @click="textInput" v-on:blur="searchBlur" ref="searchInput">
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" ref="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" ref="search_commit" @click="searchCommit">搜索</a>
        </div>
    </div>
</template>
<style>
    .container{
        margin-top: 58px;
    }
</style>
<script>
    import axios from 'axios';
    export default{
        beforeCreate(){
            this.$store.state.headerTitle = '搜索';
        },
        data(){
            return{

            }
        },
        methods:{
            textInput(){
                console.log('is click');
                this.$refs.searchBar.className = 'weui-search-bar weui-search-bar_focusing';
            },
            searchBlur(){
//                this.$refs.searchBar.className = 'weui-search-bar';
            },
            searchCommit(){
                console.log('commit');
                let self= this;
                if(self.$refs.searchInput.value.length) {
                    axios.get(self.$store.state.url + 'UserArea?keyword=' + encodeURI(self.$refs.searchInput.value),{
                        headers: self.$store.state.token
                    }).then(function (res) {
                        axios.get(self.$store.state.url + 'UserExtInfo?qquin=' +res.data.qquin+ '&vaid=' + res.data.area_id,{
                            headers: self.$store.state.token
                        }).then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.log('error' +err);
                        })
                    }).catch(function (err) {
                        console.log('error' + err);
                    })
                }
            }
        }

    }
</script>