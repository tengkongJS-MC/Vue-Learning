<template>
    <span>点击加一</span>
    <div>{{ counter }}</div>
    <button @click="counter += 1"> +1 </button>
    <button @click="addFive"> +5 </button><br />
    <span>具有dom原生的事件对象</span><br />
    <button @click="logEvent">在控制台打印事件对象</button>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
        }
    },
    methods:{
        addFive(){
            this.counter += 5;
        },
        logEvent(e){
            console.log(e);
        }
    }
}
</script>

<style>

</style>