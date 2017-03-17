<template>
    <div class="page page-battle">
        <div class="page-battle__hd">我的战绩</div>
        <div class="weui-panel weui-panel__access" v-for="item in battle">
            <div class="weui-panel__hd">{{item.gameTime}}</div>
            <div class="weui-panel__bd">
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__hd">
                            <img class="champion-image" v-bind:src="item.image" alt="">
                        </div>
                        <div class="weui-cell__bd weui-cell_primary">
                            <p class="text">{{item.gameType}} {{item.win}}</p>
                        </div>
                        <span class="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .page-battle__hd {
        margin-top: 10px;
        font-size: 18px;
        color: #999;
    }
    .text{
        padding-left: 15px;
        color: #999;
    }
    .champion-image {
        width: 50px;
        height: 50px;
    }

</style>
<script>
    import axios from 'axios';
    export default{
        name: 'battle',
        props: ['username'],
        data(){
            return {
                battle: []
            }
        },
        created(){
            console.log('battle');
            let self = this, gameType = '',
                url = self.$store.state.url,
                token = self.$store.state.token,
                qquin = self.$props.qquin,
                vaid = self.$props.vaid;
            axios.get(url + 'UserArea?keyword=' + self.$props.username, {
                headers: token
            }).then(function (res) {
                axios.get(url + 'CombatList?qquin=' + res.data.data[0].qquin +
                    '&vaid=' + res.data.data[0].area_id + '&p=0', {
                    headers: token
                }).then(function (res) {
                    console.log(res);
                    for (let i = 0; i < res.data.data[0].battle_list.length; i++) {
                        axios.get(url + 'GetChampionIcon?id=' + res.data.data[0].battle_list[i].champion_id, {
                            headers: token
                        }).then(function (data) {
                            switch (res.data.data[0].battle_list[i].game_type) {
                                case 1:
                                    gameType = '自定义';
                                    break;
                                case 2:
                                    gameType = '人机对战';
                                    break;
                                case 3:
                                    gameType = '经典匹配';
                                    break;
                                default :
                                    gameType = '大乱斗';
                                    break;
                            }
                            self.battle.push({
                                image: data.data.data[0].return,
                                gameTime: res.data.data[0].battle_list[i].battle_time,
                                gameType: gameType,
                                win: res.data.data[0].battle_list[i].win > 1 ? '失败' : '胜利',
                            });
                        }).catch(function (err) {
                            console.log('error' + err);
                        });
                    }
                }).catch(function (err) {
                    console.log('error' + err);
                })
            }).catch(function (err) {
                console.log('error' + err);
            });
        },

    }
</script>