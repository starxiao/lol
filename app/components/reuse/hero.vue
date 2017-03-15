<template>
    <div class="container">
    <div class="weui-panel wey=ui-panel_access">
        <div class="weui-panel__hd">
            attack:{{heroData.info.attack}} defense:{{heroData.info.defense}}
            magic:{{heroData.info.magic}} difficulty:{{heroData.info.difficulty}}
        </div>
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media__hd">
                    <img class="weui-media-box__thumb" src="" alt="">
                </div>
                <div class="weui-media__bd">
                    <h4 class="weui-media-box__title">{{heroData.passive.name}}</h4>
                    <p class="content-desc weui-media-box__desc">{{heroData.passive.description}}</p>
                </div>
            </div>
        </div>
        <div class="weui-panel__bd" v-for="item in heroData.spells">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media__hd">
                    <img class="weui-media-box__thumb" src="" alt="">
                </div>
                <div class="weui-media__bd">
                    <h4 class="weui-media-box__title">{{item.name}}</h4>
                    <p class="content-desc weui-media-box__desc">{{item.tooltip}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
    .container{
        margin-top: 58px;
    }
    .content-desc{
        display: block;
    }

</style>
<script>
    import axios from 'axios';
    export default{
        name: 'hero',
        data(){
            return{
                heroData:{}
            }
        },
        beforeCreate(){
            let self = this;
            console.log(this);
            let championId = this.$route.path.split('/');
            axios.get(self.$store.state.url + 'GetChampionDetail?champion_id=' + championId[2],{
                headers: self.$store.state.token
            }).then(function (res) {
                console.log(res);
                self.$store.state.headerTitle = res.data.data[0].name;
                axios.get(self.$store.state.url + 'GetSummonSpellIcon?summonspellid=' + res.data.data[0].id,{
                        headers: self.$store.state.token
                    }).then(function (res) {
                        console.log(res);
                        self.heroData.url.push(res.data.data[0].return);
                    }).catch(function (err) {
                    console.log(err);
                });
                for(let i=0; i<res.data.data[0].spells.length; i++){
                    axios.get(self.$store.state.url + 'GetSummonSpellIcon?summonspellid=' + res.data.data[0].spells[i].id,{
                        headers: self.$store.state.token
                    }).then(function (res) {
                        console.log(res);
                        self.heroData.url.push(res.data.data[0].return);
                    }).catch(function (err) {
                        console.log(err);
                    })
                }
                self.heroData = {
                    info: res.data.data[0].info,
                    passive: res.data.data[0].passive,
                    spells: res.data.data[0].spells,
                    trait: res.data.data[0].trait
                };
                console.log(res.data.data[0].info);
                console.log(res.data.data[0].passive);
                console.log(res.data.data[0].spells);
                console.log(res.data.data[0].trait);
            }).catch(function (err) {
                console.log(err)
            });

        },
        created(){
        },
        mounted(){
            console.log('is mounted');
        },
    }
</script>