<template>
  <div class="container demo-1">
    <div id="large-header" class="large-header">
			<canvas id="demo-canvas"></canvas>
			<div class="logo_box">
				<h3>欢迎登录</h3>
				<form action="#" name="f" method="post">
					<div class="input_outer">
						<span class="u_user"></span>
						<input name="logname" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
					</div>
					<div class="input_outer">
						<span class="us_uer"></span>
						<input name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
					</div>
					<div class="mb2"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
				</form>
			</div>
		</div>
  </div>
</template>
<script>
import { requestLogin } from "../../api/index";

import bgPic from "../../../static/imgs/demo-1-bg.jpg";
import icoPic from "../../../static/imgs/login_ico.png";

import demo from "../../../static/jss/demo-1.js";
import EasePack from "../../../static/jss/EasePack.min.js";
import rAF from "../../../static/jss/rAF.js";
import TweenLite from "../../../static/jss/TweenLite.min.js";
export default {
  name: "loginOne11",
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
    
  }
};
</script>

<style lang="scss" scoped>

@import "../../../static/css/demo.css";
@import "../../../static/css/normalize.css";
@import "../../../static/css/component.css";


</style>