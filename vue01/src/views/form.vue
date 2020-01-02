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
        }
    }
}
</script>
<style scoped>

</style>