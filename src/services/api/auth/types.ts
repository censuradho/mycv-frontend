import { Curriculum } from "../curriculum/types"

export interface Avatar {
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
  created_at: string
  updated_at: string
  avatar?: Avatar
  curriculum?: Pick<Curriculum, 'slug'>
}

export interface SignUpWithEmailPasswordRequest {
  username: string
  password: string
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

export interface SignInWithEmailPasswordResponse {
  access_token: string
}

export interface SignInWithEmailPasswordRequest {
  password: string
  email: string
}

export type Me = Omit<User, 'password' | 'created_at' | 'updated_at'>  & {
  access_token: string
}