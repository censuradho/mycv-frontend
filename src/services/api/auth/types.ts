interface Avatar {
  id: string
  width: number
  height: number
  url: string
  format?: string
}

export interface User {
  id: string
  username: string
  email: string
  password: string
  role: string
  avatar?: Avatar
  created_at: string
  updated_at: string
}

export interface SignUpWithEmailPasswordRequest {
  username: string
  password: string
  email: string
}

export interface SignInWithEmailPasswordResponse {
  access_token: string
}

export interface SignInWithEmailPasswordRequest {
  password: string
  email: string
}

export interface Me {
  id: string
  username: string
  email: string
  role: string
  access_token: string  
}