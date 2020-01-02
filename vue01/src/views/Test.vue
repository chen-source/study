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
            <li v-for="(arrJoke,index) in jokeList">{{ arrJoke }}</li>
        </ul>
        <br>
        <button id="btn" @click="getcan">post请求</button>
        {{ res }}
        <br>
    </div>
</template>
<script>
export default {
    name:'test',
    data(){
        return{
            msg:'测试',
            jokeList:[],
            res:''
        }
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
        }
    }
}
</script>