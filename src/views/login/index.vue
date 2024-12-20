<template>
	<div class="login-container">
		<el-card class="login-card">
			<h2>登录</h2>
			<el-form :model="loginForm" :rules="rules" ref="loginFormRef">
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup lang="ts">
// import { md5 } from "js-md5"
import { ElForm } from "element-plus"

const loginForm = reactive({
	username: "",
	password: "",
})

const rules = {
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }],
}

const loginFormRef = ref<InstanceType<typeof ElForm>>()

const login = () => {
	loginFormRef.value?.validate((valid: boolean) => {
		if (valid) {
			alert("登录成功")
		}
	})
}
</script>

<style lang="scss" scoped>
.login-container {
	width: 100vw;
	height: 100vh;
	background-image: url("../../assets/image/login_bg.jpg");
}

.login-card {
	width: 400px;
	position: absolute;
	top: 50%;
	right: 20%;
	transform: translate(0%, -50%);
}

.el-form-item {
	margin-bottom: 20px;
}
</style>
