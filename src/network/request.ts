import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user';

class Request {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const userStore = useUserStore()
        if (userStore.token) {
          config.headers.Authorization = `Bearer ${userStore.token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { code, message, data } = response.data
        if (code === 200) {
          return data
        }
        ElMessage.error(message || '请求失败')
        return Promise.reject(new Error(message || '请求失败'))
      },
      (error) => {
        if (error.response?.status === 401) {
          const userStore = useUserStore()
          userStore.logout()
          window.location.href = '/login'
        }
        ElMessage.error(error.message || '请求失败')
        return Promise.reject(error)
      }
    )
  }

  public request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export default new Request({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})