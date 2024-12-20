import { defineStore } from "pinia"
import type { LoginResult } from "@/types/user"

export const useUserStore = defineStore("user", {
	persist: {
		storage: localStorage,
	},

	state: (): LoginResult => {
		return {
			token: "",
			userInfo: null,
		}
	},

	actions: {
		setUserInfo(info: UserInfo) {
			this.userInfo = info
		},

		setToken(newToken: string) {
			this.token = newToken
		},

		logout() {
			this.userInfo = null
			this.token = ""
		},
	},
})
