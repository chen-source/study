<template>
  <div style="top:100px;width:300px">
    <el-form :model="form" label-width="120px">
      <el-form-item label="请输入文件名" required>
        <el-input v-model="form.fileName" auto-complete="off" class="el-col-width" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" >下载</el-button>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          :action="uploadUrl"
          :before-upload="handleBeforeUpload"
          :on-error="handleUploadError"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">不超过50Mb</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "upfile",
  data() {
    return {
      userName: "测试",
      form: {
        fileName: ""
      },
      uploadUrl: "/app/file/upload",
      fileList: []
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleUploadError(error, file) {
      this.$notify.error({
        title: "error",
        message: "上传出错:" + error,
        type: "error",
        position: "bottom-right"
      });
    },
    //测试上传文件(注意web的上下文)
    handleBeforeUpload(file) {
      alert("寄哪里了");
      let formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    this.$axios.post("/app/file/upload", formData,
        {

        headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        ).then(function(){
        console.log('SUCCESS!!');
        })
        .catch(function(){
            console.log('FAILURE!!');
        });
        return false;
    //   this.uploadUrl = '/app/file/upload';
    //   const isLt50M = file.size / 1024 / 1024 < 50;
    //   if (!isLt50M) {
    //     this.common.errorTip('上传文件大小不能超过 50MB!');
    //   }
    //   return isLt50M;
    }
  }
};
</script>