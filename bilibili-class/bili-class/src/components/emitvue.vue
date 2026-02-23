<template>
  <div>自定义事件传递数据 $emit</div>
  <button @click="sendClickHandle">点击传递</button>
  <div><slot></slot></div>
</template>

<script>
export default {
    data(){
        return {
            message:"我是子组件的数据,我通过自定义事件跳转到这里"
        }
    },
    methods:{
        sendClickHandle(){
            //两个参数，参数一是字符串,也就是自定义事件的名字，参数二是传递的数据
            this.$emit("onActive" , this.message);
        }
    }
}
</script>

<style>

</style>