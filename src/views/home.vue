<script setup lang="ts">
import wangEditor from "@/components/wangEditor.vue"
const title = ref("Vue 3 Admin")

const valueHtml = ref("")
const isDisabled = ref(false)
</script>

<template>
	<div class="home-container">
		<el-card>
			<template #header>
				<div class="card-header">
					<span>{{ title }}</span>
				</div>
			</template>
			<div class="card-content">欢迎使用 Vue 3 Admin 系统</div>
		</el-card>
	</div>
	<wangEditor v-model:value="valueHtml" :disabled="isDisabled" height="300px" />
</template>

<style scoped lang="scss">
.home-container {
	.card-header {
		font-size: 18px;
		font-weight: bold;
	}

	.card-content {
		padding: 20px 0;
	}
}
</style>
