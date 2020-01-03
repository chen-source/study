<template>
    <div>
        <button @click="back">返回</button>
        <h2>{{ msg }}</h2>
        <h2>{{$route.params.username}}</h2>
        <h2>{{ $route.params.pass }}</h2>
        <button id="btn" @click="getResult">get点击请求后台</button>
        <br>
        <button id="btn" @click="getNet">网络请求</button>
        <br>
        <ul >
            <li v-for="(arrJoke,index) in jokeList" :key="index">{{ arrJoke }}</li>
        </ul>
        <br>
        <button id="btn" @click="getcan">post请求</button>
        <el-button type="primary" @click="getcan">post请求</el-button>
        {{ res }}
        <br>
        <h5>修改前的值:{{ this.$store.state.count }}</h5>
        <h5>简写:{{ count1 }}</h5>
        <h5>我是修改后的值:{{ getStateCount1 }}</h5>
        <h5>{{ this.$store.state.sum }}</h5>
        <el-button type="primary" @click="addFun">+10</el-button>
        <el-button type="primary" @click="reductionFun">-1</el-button>
        <h5>{{ sum1 }}</h5>
        <el-button @click="goMock" >点击请求mock</el-button>
        <br>
        <!--3.引入导入的elementStudy标签-->
        <elementStudy></elementStudy>
    </div>
</template>
<script>
//1.先使用import导入你要在该组件中使用的子组件
import elementStudy from './ElementStudy'
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
    name:'test',
    data(){
        return{
            msg:'测试',
            jokeList:[],
            res:''
        }
    },
    computed:{
        ...mapState({
            sum1:state=>state.sum,
            count1:state=>state.count
        }),
        ...mapGetters({
            getStateCount1:'getStateCount'//getStateCount是方法名，getStateCount1给防范气的别名，可以直接引入getStateCount1，不需要在写this.$store.getters.getStateCount
        })
    },
    methods:{
        getResult:function(){
            // alert("ss");
            let that=this;
            that.$axios.get("/MyDemo/test").then(function(args){
                console.log(args.data);
                alert(args.data);
            },function(err){
                console.log(err);
            });
        },
        getNet:function(){
            let that=this;
            that.$axios.get("https://autumnfish.cn/api/joke/list?num=5").then(function(args){
                console.log(args);
                that.jokeList=args.data.jokes;
            },function(err){
                console.log(err);
            });
        },
        getcan:function(){
            let that=this;
            //get请求
            // that.$axios.get("/MyDemo/Demo",{params:{username:"测试"}}).then(function(args){
            //     console.log(args);
            //     that.res=args.data;
            // },function(err){ 
            //     console.log(err);
            // });
            //post请求
            //第一种方式 使用qs（推荐） 
            
            // qs.stringify()	转换成查询字符串
            // qs.parse()	转换成json对象
            let postData = this.$qs.stringify({
                    username: "我的空间"
            });
            //第二种方式 使用URLSearchParams
            // let postData= new URLSearchParams();
            // postData.append(username,"我的");
            that.$axios.post("/MyDemo/Demo",postData).then(function(args){
                console.log(args);
                that.res=args.data;
            },function(err){ 
                console.log(err);
            });
             
        },
        back:function(){
            this.$router.go(-1);
        },
        addFun:function(){
            var n=10;
            this.$store.dispatch("addFun",n);
            // this.$store.commit("add");
        },
        reductionFun:function(){
            this.$store.dispatch("reductionFun");
            // this.$store.commit("reduction");
        },
        goMock(){
            let that=this;
            that.$axios.get('/getUser').then(res=>{
                console.log(res);
                that.$message({
                    message:that.$qs.parse(res.data),
                    type:'success',
                    showClose:true
                });
            }).catch(error=>{
                console.log(error);
            })
        }
    },
    components:{
        //2.然后,在components中写入子组件
        elementStudy
    }
}
</script>
<style scoped>

</style>