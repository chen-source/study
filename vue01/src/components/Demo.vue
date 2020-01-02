<template>
    <div>
        <button @click="back">返回</button>
        <h1>{{ title1 }}</h1>
    </div>
</template>

<script>
export default {
    name:'demo1',
    data(){
        return{
            title1:"新的页面"
        }
        

    },
    methods:{
        back:function(){
            this.$router.go(-1);
        }
    }
}
</script>