import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

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
		],
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, _, next) => {
	// 设置页面标题
	document.title = (to.meta.title as string) || ""
	next()
})

export default router
