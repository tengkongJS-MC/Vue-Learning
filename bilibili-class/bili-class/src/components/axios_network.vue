<template>
    <button @click = "getData">点击试图发起网络请求</button>
    <div>{{ "数据来自于：" + dataFrom }}</div>
    <ul>
        <li v-for="i in gettedData.result" :key="i.id">{{ i.title }}</li>
    </ul>
</template>

<script>

import api from "../api/index"
import path from "../api/path";

export default {
    data(){
        return{
            gettedData:{},
            dataFrom:"",
        }
    },
    // mounted(){

    // },
    methods:{
        getData(){
            api.getTuijian().then(res => {
                // console.log(res.data.data);
                console.log("请求成功");
                console.log("请求位置：" + path.baseUrl + path.tuijian);
                this.dataFrom = path.baseUrl + path.tuijian;
                this.gettedData = res.data.data;
            })
        }
    }
}
</script>

<style scoped>
    tr{
        border: 1px black solid;
    }
</style>