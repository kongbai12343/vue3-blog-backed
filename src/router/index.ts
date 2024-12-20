import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { getToken } from "@/utils/getToken"

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("@/layouts/index.vue"),
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				name: "dashboard",
				component: () => import("@/views/dashboard/index.vue"),
				meta: {
					title: "Dashboard",
				},
			},
			{
				path: "user",
				name: "user",
				component: () => import("@/views/user/list.vue"),
				meta: {
					title: "用户管理",
				},
			},
			{
				path: "article",
				name: "article",
				component: () => import("@/views/article/list.vue"),
				meta: {
					title: "文章管理",
				},
			},
			{
				path: "comment",
				name: "comment",
				component: () => import("@/views/comment/list.vue"),
				meta: {
					title: "评论管理",
				},
			},
			{
				path: "category",
				name: "category",
				component: () => import("@/views/category/list.vue"),
				meta: {
					title: "分类管理",
				},
			},
			{
				path: "tag",
				name: "tag",
				component: () => import("@/views/tag/list.vue"),
				meta: {
					title: "标签管理",
				},
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: () => import("@/views/notFound/index.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, _) => {
	// 设置页面标题
	document.title = (to.meta.title as string) || ""

	// 登录校验
	const token = getToken()
	if (!token && to.path !== "/login") {
		return "/login"
	}
})

export default router
