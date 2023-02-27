import { Me, SignInWithEmailPasswordRequest, SignUpWithEmailPasswordRequest } from "@/services/api/auth/types"

export interface Auth extends Me {
  access_token: string
}

export interface AuthContextParams {
  auth: Auth | null
  isLoading: boolean
  isSigned?: boolean
  onSignInWithEmailPassword: (payload: SignInWithEmailPasswordRequest) => Promise<void>,
  onSignUpWithEmailPassword:  (payload: SignUpWithEmailPasswordRequest) =>  Promise<void>
  onSignOut: () => void
  onAuth: () => Promise<void>
}