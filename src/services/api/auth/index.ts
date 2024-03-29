import { Me, ResetPasswordRequest, SignInWithEmailPasswordRequest, SignInWithEmailPasswordResponse, SignUpWithEmailPasswordRequest } from "./types";

import { api } from '@/services/api'

function signUpWithEmailPassword (payload: SignUpWithEmailPasswordRequest) {
  return api.post('/auth/sign-up', payload)
}

function me () {
  return api.get<Me>('/auth/me')
}

async function signInWithEmailPassword (payload: SignInWithEmailPasswordRequest) {
  const response =  await api.post<SignInWithEmailPasswordResponse>('/auth/login', payload)
  api.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`
  const { data } = await me()

  return data
}

function signOut () {
  delete api.defaults.headers['Authorization']
}

function resetPassword (payload: ResetPasswordRequest) {
  return api.post('/auth/reset-password', payload)
}

function deleteAccount () {
  return api.delete('/auth')
}

export const authService = {
  signUpWithEmailPassword,
  signInWithEmailPassword,
  me,
  signOut,
  resetPassword,
  delete: deleteAccount
}
