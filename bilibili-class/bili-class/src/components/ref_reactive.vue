<template>
    <div>{{ message }}</div>
    <ul>
        <li v-for="(item,index) in names.list" :key="index">{{ item }}</li>
    </ul>
    <div>{{ clickToChange }}</div>
    <button @click="addClickHandle">点击</button>
    <div>Props也可以在setup()中使用，只是仍然需要提前定义props</div>
    <div>{{ msg }}</div>
</template>

<script>
import {ref , reactive} from "vue";
export default {
    //组合式API,通过 ref 和 reactive 来进行 data 的声明
    props:{
        message:String,
    },
    setup(props,ctx){

        //setup中没有this，需要用ctx来获得当前实例对象
        
        //ref
        const message = ref("我是通过ref创建的数据,ref创建简单数据类型");

        //reactive
        const names = reactive({
            list:["reactive 创建对象数组等复杂数据类型","a","b","c"],
        })

        let clickToChange = ref("现在方法也写在setup中,但是注意要return出去,点击可以改变这行消息");
        let addClickHandle = () => {
            //一定要通过message.value来创建数据
            clickToChange.value = "已经改变该数据";
        }

        const msg = ref(props.message);


        return{
            message,names,addClickHandle,clickToChange,msg
        }
    }
}
</script>

<style>

</style>