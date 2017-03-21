<template>
    <div class="container">
        <form>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="text-input">用户名</label>
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <input ref="textInput" id="text-input" class="weui-input" placeholder="请输入你的用户名">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="weui-label" for="area-input">大区名称</label>
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <input ref="areAInput" id="area-input" class="weui-input" placeholder="请输入你的大区名称">
                    </div>
                </div>
            </div>
        </form>
        <div class="weui-btn-area">
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="register">绑定</a>
        </div>
        <div ref="toast" class="toast">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">{{toastContent}}</p>
            </div>
        </div>
    </div>
</template>
<style>
    .container{
        margin-top: 58px;
    }
    .toast{
        display: none;
    }
</style>
<script>
    import axios from 'axios';
    let areaData = [];
    export default{
        beforeCreate(){
            this.$store.state.headerTitle = '绑定用户名';

            axios.get(this.$store.state.url + 'Area',{
                headers: this.$store.state.token
            }).then(function (res) {
                console.log(res);
                areaData = res.data.data;
            }).catch(function (err) {
                console.log('error' + err);
            });
        },
        data(){
            return{
                toastContent: '',
            }
        },
        methods:{
            register(){
                let username = this.$refs.textInput.value,
                    areaName = this.$refs.areAInput.value,
                    self = this;
                if(username.length>0 && areaName.length>0 && typeof username == 'string' &&typeof areaName == 'string') {
                    console.log(areaData);
                    for (let i = 0; i < areaData.length; i++) {
                        if (areaName == areaData[i].name) {

                            localStorage.setItem('areaName', areaData[i].id);
                            localStorage.setItem('username', username);
                            self.toastContent = '绑定完成';
                            self.$refs.toast.style.display = 'block';
                            window.setTimeout(function () {
                                self.$refs.toast.style.display = 'none';
                            }, 1000);
                            return;
                        }
                    }
                                           //判读匹配不到大区
                    self.toastContent = '大区输入有误';
                    self.$refs.toast.style.display = 'block';
                    window.setTimeout(function () {
                        self.$refs.toast.style.display = 'none';
                    }, 1000);

                }else{
                    self.toastContent = '输入有误';
                    self.$refs.toast.style.display = 'block';
                    window.setTimeout(function () {
                        self.$refs.toast.style.display = 'none';
                    }, 1000);
                    console.log('error');
                }
            }
        }

    }
</script>