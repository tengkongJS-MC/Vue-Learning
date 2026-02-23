import {createStore} from "vuex";

//vuex的核心作用就是帮我们管理组件之间的状态的
export default createStore({
    //所有的数据都放在这里
    state:{
        counter:0,
    },
    getters:{
        getCounter(state){
            return state.counter > 0 ? state.counter : "counter 数据异常";
        }
    },
    mutations:{
        addCounter(state , num){
            state.counter += num;
        }
    }
})
