<template>
    <div v-if="nowRender === true">我是nowRender为true时渲染出来的</div>
    <div v-else>我是nowRender为False的时候渲染出来的</div>
    <button @click="nowRender = !nowRender">切换</button>
</template>

<script>

export default {
    data(){
        return{
            nowRender:true,
        }
    }
}
</script>

<style>

</style>