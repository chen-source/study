
//引入vue框架
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

//创建Vuex实例
const store=new Vuex.Store({
    state:{
      count:'store初始数据',
      sum:1
    },
    getters:{//类似vue的computed
      getStateCount:function(state){//传入上面的state
        return state.count+"已经修改了";
      }  
    },
    mutations:{//不建议直接通过vue文件中的方法直接调用，而是先调用actions，通过actions修改mutations中函数
      add(state,n){//上面定义的state
        state.sum=state.sum+n;
      },
      reduction(state){
        state.sum=state.sum-1;
      }
    },
    actions:{//注册actions 类似vue的actions
      addFun(context,n){
        context.commit("add",n);
      },
      reductionFun(context){
        context.commit("reduction");
      }
    }
})
//导出store
export default store

