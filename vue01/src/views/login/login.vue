<template>
  <div id="id1">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">登陆界面</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="loginForm.checkPass"
          auto-complete="off"
          placeholder="请输入密码"
          :show-password="true"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          class="loginBtn"
          @click.native.prevent="handleSubmit"
          :loading="logining"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { requestLogin } from "../../api/index";
export default {
  name: "login",
  data() {
    return {
      logining: false,
      loginForm: {
        account: "admin",
        checkPass: "123456"
      },
      loginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    handleSubmit(ev) {
      alert("ss");
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          var loginParams = {
            username: this.loginForm.account,
            password: this.loginForm.checkPass
          };
          requestLogin(loginParams).then(data => {
            this.logining = false;
            let { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: "error"
              });
            } else {
              // sessionStorage.setItem('user', JSON.stringify(user));
              // this.$router.push({path: '/home'});
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  border: 1px solid #eaeaea;
  background: #1083b1;
  color: #fff;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  .loginBtn {
    width: 100%;
    font-size: 20px;
    letter-spacing: 10px;
  }
  
}
</style>