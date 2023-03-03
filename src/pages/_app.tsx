

import { appSettings } from '@/config/appSettings';
import { AuthProvider } from '@/context/auth'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import reactGA from "react-ga4";

import { globalStyle } from 'stitches.config'

const CookieWarn = dynamic(() => import('@/components/cookie-warn').then(t => t.CookieWarn), {
  ssr: false
})
const ToastProvider = dynamic(() => import('@/context').then(c => c.ToastProvider), {
  ssr: false
})

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()

    if (process.env.NODE_ENV === 'production' && appSettings.analytics) {
      reactGA.initialize(appSettings.analytics);
    }

  }, [])

  return (
    <ToastProvider>
      <CookieWarn />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  )
}
