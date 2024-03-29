'use client'

import { appSettings } from "@/config/appSettings";
import { paths } from "@/constants/routes";
import { useLocalStorage } from "@/hooks";
import { api } from "@/services/api";
import { authService } from "@/services/api/auth";
import { SignInWithEmailPasswordRequest, SignUpWithEmailPasswordRequest } from "@/services/api/auth/types";
import { API_ERRORS } from "@/services/api/errors";
import { isBrowser } from "@/utils/helpers";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { useToast } from "../toast";
import { Auth, AuthContextParams } from "./types";

const AuthContext  = createContext({} as AuthContextParams)

export const AUTH_KEY = `${appSettings.appName}:auth`

export function AuthProvider (props: PropsWithChildren) {
  const {
    children,
  } = props
  const router = useRouter()
  const { onNotify } = useToast()

  const [isLoading, setIsLoading] = useState(true)

  const [auth, setAuth] = useLocalStorage<Auth | null>(AUTH_KEY, null)

  const handleSystemSignOut = useCallback(() => {
    setAuth(null)
    authService.signOut()
  }, [setAuth])


  const handleAppSignOut = () => {
    handleSystemSignOut()
    router.push(paths.auth.signIn)
  }

  const handleSignInWithEmailPassword = async (payload: SignInWithEmailPasswordRequest) => {
    try {
      setIsLoading(true)
      handleSystemSignOut()
      const me = await authService.signInWithEmailPassword(payload)
      setAuth(me)

    } finally {
      setIsLoading(false)
    }
  }


  const handleSignUpWithEmailPassword = async (payload: SignUpWithEmailPasswordRequest) => {
    try {
      const { email, username, password } = payload
      
      setIsLoading(true)
      handleSystemSignOut()
      await authService.signUpWithEmailPassword({
        email, username, password 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAuth =async () => {
    try {
      if (auth) {
        api.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`;

        const { data: me } = await authService.me();
        
        api.defaults.headers.common.Authorization = `Bearer ${me.access_token}`;

        setAuth(prevState => {

          if (!prevState) return prevState

          return ({
            ...prevState,
            ...me
          })
        })
        return;
      }

      setAuth(null);
      delete api.defaults.headers.common.Authorization;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!auth) {
      setIsLoading(false)
      return
    };
    handleAuth();
  }, []);

  useEffect(() => {
    api.interceptors.response.use((response) => response, async (error: AxiosError) => {

      if (error?.response?.status === 401) handleSystemSignOut()

      return Promise.reject(error);
    })
  }, [handleSystemSignOut])

  useEffect(() => {
    api.interceptors.response.use((response) => response, async (data: AxiosError) => {
      const { response } = data;

      const { status } = response || {}
      const { description = '' } = (response?.data || {}) as { description?: string }

      if (status && status >= 500) {
        onNotify({
          title: 'Atenção 🚨',
          description: API_ERRORS.INTERNAL_SERVER_ERROR
        })
      }
      if (status && status >= 400 && description) {
        onNotify({
          title: 'Atenção 🚨',
          description: API_ERRORS?.[description as keyof typeof API_ERRORS]
        })
      }

      return Promise.reject(data);
    });
  }, []);

  function getStorage <T>(key: string) {
    const tokenStorage = localStorage.getItem(key)
  
    return tokenStorage ? (JSON.parse(tokenStorage) as T) : null
  }

  useEffect(() => {
    api.interceptors.request.use(async config => {
      const storage = isBrowser() ?  getStorage<Auth>(AUTH_KEY) : null
    
      if (storage) {
        config.headers.Authorization = `Bearer ${storage.access_token}`
      }
    
      return config
    }, error => Promise.reject(error))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        isLoading,
        isSigned: !!auth,
        onSignInWithEmailPassword: handleSignInWithEmailPassword,
        onSignOut: handleAppSignOut,
        onSignUpWithEmailPassword: handleSignUpWithEmailPassword,
        onAuth: handleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)