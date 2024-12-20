<template>
	<div class="meun">
		<el-aside :width="props.isCollapse ? '64px' : '200px'">
			<el-menu
				class="sidebar-menu"
				:collapse="props.isCollapse"
				:router="true"
				:collapse-transition="false"
				popper-effect="dark"
				default-active="/dashboard"
			>
				<el-menu-item index="/dashboard">
					<el-icon><PieChart /></el-icon>
					<span>dashboard</span>
				</el-menu-item>
				<el-menu-item index="/user">
					<el-icon><User /></el-icon>
					<span>用户管理</span>
				</el-menu-item>
				<el-menu-item index="/article">
					<el-icon><EditPen /></el-icon>
					<span>文章管理</span>
				</el-menu-item>
				<el-menu-item index="/comment">
					<el-icon><ChatDotSquare /></el-icon>
					<span>评论管理</span>
				</el-menu-item>
				<el-menu-item index="/category">
					<el-icon><Dish /></el-icon>
					<span>分类管理</span>
				</el-menu-item>
				<el-menu-item index="/tag">
					<el-icon><PriceTag /></el-icon>
					<span>标签管理</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	isCollapse: Boolean,
})
</script>

<style scoped lang="scss">
::v-deep(.el-menu) {
	border-right: none;
}
.meun {
	border-right: 1px solid var(--el-menu-border-color);
	// background-color: var(--bg);
}
</style>
