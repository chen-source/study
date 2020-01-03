<template>
    <div>
        <el-button type="primary" @click="back">返回</el-button>
        <el-radio v-model="radio" label="1">选择1</el-radio>
        <el-radio v-model="radio" label="2">选择2</el-radio>
        <el-radio v-model="radio" label="3" disabled>禁用3</el-radio>
        <el-radio v-model="radio" label="4">禁用4</el-radio>
        <el-radio-group v-model="co" @change="handleChange">
            <el-radio :label="1">单选1</el-radio>
            <el-radio :label="2">单选2</el-radio>
            <el-radio :label="6" border>单选6(带边框)</el-radio>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio2" size="medium">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="郑州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
        <br>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框A"></el-checkbox>
            <el-checkbox label="复选框B"></el-checkbox>
            <el-checkbox label="复选框C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
        <el-input placeholder="请输入内容" v-model="text"></el-input>
        <el-input placeholder="请输入内容2" v-model="text" :disabled="true"></el-input>
        <el-input placeholder="请输入密码" v-model="text" show-password></el-input>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="100" label="描述"></el-input-number>
        <br>
        <el-select v-model="value" placeholder="请选择" @change="handleChange">
            <el-option v-for="(item,index) in cities" :key="index" :label="item.label" :value="item.value" >
                <span style="float:left">{{ item.label }}</span>
                <span style="float:right;color:#8492a6;font-size:13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <br>
        <!--级联选择 show-all-levels  为true显示所有，为false显示最后一个-->
        <el-cascader :options="options" clearable @change="handleChange" :show-all-levels="true"></el-cascader>
        <!--swich开关 -->
        <el-switch :active-text="msg" v-model="value1" :disabled="false" :inactive-text="msg1" @change="handleChange">
            
        </el-switch>
        <!--slide开关 -->
        <el-slider v-model="value3" show-input>

        </el-slider>
        <!--时间和日期-->
        <el-time-picker v-model="value4" placeholder="选择时间" :editable="false">
        </el-time-picker>
        <el-date-picker v-model="value5" type="date" placeholder="选择日期" :editable="false">

        </el-date-picker>
        <!--rate评分-->
        <el-rate v-model="value6" show-text :texts="value7"></el-rate>
        <!--tag标签-->
        <div class="tag-group">
            <el-tag v-for="(item,index) in value8" :key="index" :type="item.type" closable effect="dark">
                {{ item.label }}
            </el-tag>
        </div>
        <!--pagination分页-->
        <el-pagination background layout="prev,pager,next" :total="1000">

        </el-pagination>
        <!--标记-->
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="1" type="primary" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="15" type="success" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="370" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">点我查看<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论<el-badge class="mark" :value="12"/>
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复<el-badge class="mark" :value="3"/>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <!--头像-->
            <div v-for="(fit,index) in fits" :key="index" >
                <span class="title">{{ fit }}</span>
                <el-avatar shape="square" :size="50" :fit="fit" :src="url"></el-avatar>
            </div>
        <el-button @click="openFullScreen2">点击增加遮罩</el-button>
        <el-button @click="open" :plain="true">成功</el-button>
        <el-button @click="open2" :plain="true">测试</el-button>
        <el-button @click="open3" :plain="true">点击</el-button>
        <el-page-header @back="goBack" content="页面"></el-page-header>
        <!--懒加载-->
        <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
        </div>
    </div>
</template>
<script>
export default {
    name:'form1',
    data(){
        
        return{
            radio:'3',
            co:2,
            radio2:'上海',
            checkList:['复选框A','选中且禁用'],
            text:'',
            num:1,
            value1:true,
            msg:'按月付费',
            msg1:'按年收费',
            value3:0,
            value4:new Date(),
            value5:'',
            value6:null,
            value7:['极差', '失望', '一般', '满意', '惊喜1'],
            value8:[
                {type:'',label:'标签一'},
                {type:'success',label:'标签二'},
                {type:'danger',label:'标签三'},
                {type:'waring',label:'标签四'},
                {type:'info',label:'标签五'}
            ],
            fits: ['fill','contain','cover','none','scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
             urls: [
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
            cities:[{
                value: 'Beijing',
                label: '北京'
                }, {
                value: 'Shanghai',
                label: '上海'
                }, {
                value: 'Nanjing',
                label: '南京'
                }, {
                value: 'Chengdu',
                label: '成都'
                }, {
                value: 'Shenzhen',
                label: '深圳'
                }, {
                value: 'Guangzhou',
                label: '广州'
             }],
            value:'',
             options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                    value: 'yizhi',
                    label: '一致'
                    }, {
                    value: 'fankui',
                    label: '反馈'
                    }, {
                    value: 'xiaolv',
                    label: '效率'
                    }, {
                    value: 'kekong',
                    label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                    }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                    }]
                }]
                }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                    }, {
                    value: 'color',
                    label: 'Color 色彩'
                    }, {
                    value: 'typography',
                    label: 'Typography 字体'
                    }, {
                    value: 'icon',
                    label: 'Icon 图标'
                    }, {
                    value: 'button',
                    label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                    }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                    }, {
                    value: 'input',
                    label: 'Input 输入框'
                    }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                    }, {
                    value: 'select',
                    label: 'Select 选择器'
                    }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                    }, {
                    value: 'switch',
                    label: 'Switch 开关'
                    }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                    }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                    }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                    }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                    }, {
                    value: 'upload',
                    label: 'Upload 上传'
                    }, {
                    value: 'rate',
                    label: 'Rate 评分'
                    }, {
                    value: 'form',
                    label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                    value: 'table',
                    label: 'Table 表格'
                    }, {
                    value: 'tag',
                    label: 'Tag 标签'
                    }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                    }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                    }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                    }, {
                    value: 'badge',
                    label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                    }, {
                    value: 'loading',
                    label: 'Loading 加载'
                    }, {
                    value: 'message',
                    label: 'Message 消息提示'
                    }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                    }, {
                    value: 'notification',
                    label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                    }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                    }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                    }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                    }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                    }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                    }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                    }, {
                    value: 'card',
                    label: 'Card 卡片'
                    }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                    }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                    }]
                }]
                }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
             }]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        handleChange(value) {
            console.log(value);
        },
        openFullScreen2() {
            const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
            loading.close();
            }, 2000);
      },
      open(){
          this.$message({
              message:"弹出信息",
              type:'success'//type包含success,waring.error等
          });
      },
      open2(){
          this.$alert('这是一段内容','标题名称',{
              confirmButtonText:'确定',
              callback:action=>{
                  this.$message({
                      type:'info',
                      message:'测试'
                  });
              }
          });
      },
      open3(){
          this.$confirm('此操作将永久删除该文件,是否继续?','提示',{
              confirmButtonText:'确定',
              cancelButtonText:'取消',
              type:'warning',
              center:true
          }).then(()=>{
              this.$message({
                  message:'删除成功!',
                  type:'success'
              });
          }).catch(()=>{
              this.$message({
                  type:'info',
                  message:'已取消删除'
              })
          });
      },
      goBack(){
          this.$router.go(-1);
          console.log("返回");
      }
    }
}
</script>
<style scoped>
    .item{
        margin-top: 10px;
        margin-right: 40px;
    }
</style>