export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  token: string
  userInfo: UserInfo
}