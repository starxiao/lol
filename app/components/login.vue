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
            </div>
        </form>
        <div class="weui-btn-area">
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="register">绑定</a>
        </div>
        <div ref="toast" class="toast">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">绑定完成</p>
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
    export default{
        beforeCreate(){
            this.$store.state.headerTitle = '绑定用户名';
        },
        methods:{
            register(){
                let self = this;
                localStorage.setItem('username',this.$refs.textInput.value);
                self.$refs.toast.style.display = 'block';
                window.setTimeout(function () {
                    self.$refs.toast.style.display = 'none';
                },1000);
            }
        }

    }
</script>