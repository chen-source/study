<template>
    <div>
        <el-button type="primary" @click="back">返回</el-button>
        <h5>elmment</h5>
        <el-alert type="success"  :closable="false">
            测试
        </el-alert>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 8" :key="item" >
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <!--button按钮开始-->
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary" @click="get">主要按钮</el-button>
            <el-button type="success" round>成功按钮(圆角)</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="info" disabled>不能点击</el-button>
           
        </el-row>
        <br>
        <el-row>
            <el-button  icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
        </el-row>
        <br>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" :loading="true">加载中...</el-button>
        </el-button-group>
         <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <!--button按钮结束-->
        <!--link开始-->
        <el-link href="https://element.eleme.io" target="_blank">默认连接</el-link>
        <el-link type="primary">主要连接</el-link>
        <el-link type="success" :underline="false">成功连接(无下划线)</el-link>
        <el-link type="danger">危险连接</el-link>
        <el-link type="warning">警告连接</el-link>
        <el-link type="info">信息连接</el-link>
        <el-link class="el-icon-edit" :underline="false">编辑</el-link>
        <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
        <!--link结束-->
    </div>
</template>
<script>
export default {
    name:'elementStudy',
    data(){
        return{

        }
    },
    methods:{
        get(){
            alert("点击了");
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .el-carousel__item h3 {
    color: #20ca97;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
   .el-carousel__item:nth-child(2n) {
    background-color: #531abd;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #ab20b8;
  } 
</style>