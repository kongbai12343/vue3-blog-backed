import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)
  const token = ref<string>('')

  function setUserInfo(info: UserInfo) {
    userInfo.value = info
  }

  function setToken(newToken: string) {
    token.value = newToken
  }

  function logout() {
    userInfo.value = null
    token.value = ''
  }

  return {
    userInfo,
    token,
    setUserInfo,
    setToken,
    logout,
  }
})