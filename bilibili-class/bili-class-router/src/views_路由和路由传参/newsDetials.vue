<!-- 这里需要根据不同的点击内容展示不同的新闻内容 -->
<template>
    <h3>新闻详情</h3>
    <div>  {{ dataFrom }}</div>
</template>

<script>
export default {
    data(){
        return{
            dataFrom:this.$route.params.name,
        }
    }
}
</script>

<style>

</style>