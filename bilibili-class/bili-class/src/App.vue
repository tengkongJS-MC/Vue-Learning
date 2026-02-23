<template>
  <h1 id="docTitle">Vue 学习小项目集</h1>

  <Mytitle>模板语法</Mytitle>
  <textGrammar></textGrammar>

  <Mytitle>条件渲染</Mytitle>
  <ifRender></ifRender>

  <Mytitle>列表渲染</Mytitle>
  <forRender></forRender>

  <Mytitle>事件处理</Mytitle>
  <eventHandle></eventHandle>

  <Mytitle>表单双向绑定</Mytitle>
  <formScope></formScope>

  <Mytitle>Props数据传递</Mytitle>
  <props :sendTo = "sendToPropsVue"></props>

  <Mytitle>$emit 自定义事件数据传递</Mytitle>
  <emitvue @onActive = "getDataHandle">{{ getFromEmit }}</emitvue>

  <Mytitle>Axios 网络请求封装</Mytitle>
  <axiosNetwork></axiosNetwork>

  <Mytitle>使用vueRouter的页面路由</Mytitle>
  <p>项目单独存放在bili-class-router中,其中有两个views文件夹和两个router/index.js，<br />
  一套是路由基础和路由传参，一套是路由嵌套，需要实现哪一套的效果就删除中文后缀就行，默认是路由嵌套的页面</p>

  <Mytitle>Vuex 状态管理</Mytitle>
  <p>项目单独存放在 bili-class-vuex中</p>

  <Mytitle>Ref和Reactive</Mytitle>
  <refReactive message="我是传递给refReactive组件的消息"></refReactive>

  <Mytitle>Pro和Inject的数据传递</Mytitle>
  <provideInject></provideInject>

  <Mytitle>Element-plus</Mytitle>
  <p>项目单独存放在bili-class-elementplus</p>
</template>

<script>
  import textGrammar from './components/text-grammar.vue';
  import ifRender from './components/if_render.vue';
  import forRender from './components/for_render.vue';
  import Mytitle from './components/title.vue';
  import eventHandle from './components/event_handle.vue';
  import formScope from './components/form_scope.vue';
  import props from './components/props.vue';
  import emitvue from './components/emitvue.vue';
  import axiosNetwork from './components/axios_network.vue';
  import refReactive from './components/ref_reactive.vue';
  import provideInject from './components/provide_inject.vue';
  import {provide} from 'vue';
  
  export default {
    data(){
      return {
        sendToPropsVue:"helloProps（该消息由App.vue向下传递而来）",
        getFromEmit:"",
      }
    },
    components:{
      textGrammar,
      ifRender,
      forRender,
      Mytitle,
      eventHandle,
      formScope,
      props,
      emitvue,
      axiosNetwork,
      refReactive,
      provideInject
    },
    methods:{
      getDataHandle(event){
        this.getFromEmit = event;
      }
    },
    setup(){

      provide("message","我是通过provide来传递的消息信息");

    }
  }
</script>

<style>
  *{
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    width: 100%;
    margin: 0;
    /* padding: 20px; */
    background: #d2f1d0;
  }
  html{
    display: flex;
    justify-content: center;
  }
  body{
    min-width: 700px;
    width: 50%;
    background: #f3fff2;
    padding: 0 30px 20px 30px;
  }

  #docTitle{
    color: rgb(25, 158, 40);
    font-weight: 800;
    font-size: 45px;
  }
  button{
    cursor: pointer;
  }
</style>
