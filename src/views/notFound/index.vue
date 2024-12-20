<template>
	<div class="container">
		<img src="@/assets/image/404.jpg" />
		<div class="tips">
			<span>页面飞走啦，</span>
			<span class="text-red-500">{{ countdown }}</span>
			<span>秒后去</span>
			<span @click="goHome" class="home">首页</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()
let countdown = ref(9)

const goHome = () => {
	router.push("/")
}

const timer = setInterval(() => {
	countdown.value--
	if (countdown.value === 0) {
		goHome()
	}
}, 1000)

onUnmounted(() => {
	clearInterval(timer)
})
</script>

<style scoped lang="scss">
.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.tips {
		font-size: 14px;
		color: #979484;
		text-align: center;
	}

	.home {
		color: #52acff;
		font-size: 20px;
		text-decoration: underline;
		cursor: pointer;
	}
}
</style>
