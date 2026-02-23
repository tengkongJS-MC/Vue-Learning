<template>
  <input type = "text" v-model="userName" />
  <p>用户名是：{{ userName }}</p>
  <button @click="getUserName">获取用户名</button>
</template>

<script>
export default {
    data(){
        return{
            userName:"",
        }
    },
    methods:{
        getUserName(){
            console.log(this.userName);
        }
    }
}
</script>

<style>

</style>