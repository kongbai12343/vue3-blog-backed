<template>
	<el-header class="header">
		<div class="header-left">
			<el-button type="text" @click="changeCollapse">
				<el-icon><Fold v-if="!props.isCollapse" /><Expand v-else /></el-icon>
			</el-button>
		</div>
		<el-switch v-model="on_off">
			<template #active-action>
				<el-icon><Sunny /></el-icon>
			</template>
			<template #inactive-action>
				<el-icon><Moon /></el-icon>
			</template>
		</el-switch>
		<div class="header-right">
			<el-dropdown @command="handleLogout">
				<span class="user-info">
					{{ userStore.userInfo?.username }}
					<el-icon><ArrowDown /></el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</el-header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/user"

const router = useRouter()
const userStore = useUserStore()

const props = defineProps({
	isCollapse: Boolean,
})

const emit = defineEmits(["update:isCollapse"])

const on_off = ref(true)

watch(
	() => on_off.value,
	(newValue) => {
		if (newValue) {
			document.documentElement.classList.remove("dark")
		} else {
			document.documentElement.classList.add("dark")
		}
	},
)

const handleLogout = () => {
	console.log("///import.mate.env", import.meta.env)
	userStore.logout()
	router.push("/login")
}

const changeCollapse = () => {
	emit("update:isCollapse", !props.isCollapse)
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #f2f2f2;
	box-sizing: border-box;
}
</style>
