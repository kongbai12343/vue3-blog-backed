<template>
	<el-container class="layout-container">
		<Menu :isCollapse="isCollapse" />

		<el-container class="layout-container-main">
			<Header v-model:isCollapse="isCollapse" @update:isCollapse="changeCollapse" />
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import Header from "./header.vue"
import Menu from "./menu.vue"

const isCollapse = ref(false)

const changeCollapse = (value: boolean) => {
	isCollapse.value = value
}
</script>

<style scoped lang="scss">
.layout-container {
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;

	display: flex;

	.layout-container-main {
		display: flex;
		flex-direction: column;
	}
}
</style>
