<template>
  <h3>Props传递数据</h3>
  <p>{{ sendTo }}</p>
</template>

<script>
export default {
    name:"propsCommunicate",
    props:{
        // 属性的接收
        sendTo:{
            type:String,
            default:"",
        }
    }
}
</script>

<style>

</style>