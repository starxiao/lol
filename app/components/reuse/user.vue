<template>
    <div class="page page-user">
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder" id="user-image">
                    <img :src="user.imgUrl" alt="">
                </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">
                    {{user.areaName}} | {{user.level}}级
                </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">
                    战斗力: {{user.powerValue}} | battle: {{user.praiseNum}}
                </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">超神: {{user.god_like_num}}</div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">匹配MVP: {{user.total_match_mvps}}</div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">排位MVP: {{user.total_rank_mvps}}</div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item">
                <div class="placeholder">五杀: {{user.penta_kills}}</div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">四杀: {{user.quadra_kills}}</div>
            </div>
            <div class="weui-flex__item">
                <div class="placeholder">三杀: {{user.triple_kills}}</div>
            </div>
        </div>
    </div>
</template>
<style>
    .page-user {
        background-color: slategrey;
    }

    .weui-flex__item .placeholder {
        margin: 5px;
        padding: 0 10px;
        height: 2.3em;
        line-height: 2.3em;
        text-align: center;
        color: #cfcfcf;
    }

    #user-image {
        height: 5em;
    }
</style>

<script>
    import axios from 'axios';

    export default{
        name: 'user',
        props: ['username'],
        data(){
            return {
                user: {
                    imgUrl: '',
                    areaName: '',
                    level: '',
                    powerValue: 0,
                    praiseNum: 0,
                    triple_kills: 0,
                    quadra_kills: 0,
                    penta_kills: 0,
                    god_like_num: 0,
                    total_match_mvps: 0,
                    total_rank_mvps: 0,
                }
            }
        },
        created(){
            console.log(this.$props.username);
            let self = this,
                url = self.$store.state.url,   //get host url;
                token = self.$store.state.token;  // get header token

            // get qquin vaid
            axios.get(url + 'UserArea?keyword=' + self.$props.username, {
                headers: token
            }).then(function (res) {
                // get icon_id area_id lever powerValue battle
                axios.get(url + 'UserHotInfo?qquin=' + res.data.data[0].qquin +
                    '&vaid=' + res.data.data[0].area_id, {
                    headers: token
                }).then(function (res) {
                    console.log(res.data);
                    //get imgUrl
                    axios.get(url + 'GetUserIcon?iconid=' + res.data.data[0].icon, {
                        headers: token
                    }).then(function (res) {
                        self.user.imgUrl = res.data.data[0].return;
                    });

                    //get areaName
                    axios.get(url + 'GetAreaName?id=' + res.data.data[0].area_id, {
                        headers: token
                    }).then(function (res) {
                        self.user.areaName = res.data.data[0].return;
                    }).catch(function (err) {
                        console.log('error' + err);
                    });

                    //set  lever powerValue battle

                    self.user.level = res.data.data[0].level;
                    self.user.powerValue = res.data.data[0].power_value;
                    self.user.praiseNum = res.data.data[0].praise_num;

                }).catch(function (err) {
                    console.log('error' + err);
                });

                // get chaoshen mvp,
                axios.get(url + 'UserExtInfo?qquin=' + res.data.data[0].qquin +
                    '&vaid=' + res.data.data[0].area_id, {
                    headers: token
                }).then(function (res) {
                    console.log(res);
                    self.user.triple_kills = res.data.data[1].triple_kills;
                    self.user.quadra_kills = res.data.data[1].quadra_kills;
                    self.user.penta_kills = res.data.data[1].penta_kills;
                    self.user.god_like_num = res.data.data[1].god_like_num;
                    self.user.total_match_mvps = res.data.data[2].total_match_mvps;
                    self.user.total_rank_mvps = res.data.data[2].total_rank_mvps;

                }).catch(function (err) {
                    console.log('error' + err);
                })
            }).catch(function (err) {
                console.log('error' + err);
            });
        },
        beforeMount(){
        },
    }
</script>