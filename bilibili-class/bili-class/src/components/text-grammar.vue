<template>
    <h3>这是文本插值{{ message }}</h3>
    <button @click="changeMessage">点我更改</button>
</template>

<script>
export default {
    data(){
        return{
            message:"hello",
        }
    },
    methods:{
        changeMessage(){
            this.message = prompt("请输入文本");
        }
    }
}
</script>

<style>

</style>