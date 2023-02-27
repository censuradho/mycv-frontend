

import { AuthProvider } from '@/context/auth'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { globalStyle } from 'stitches.config'

const ToastProvider = dynamic(() => import('@/context').then(c => c.ToastProvider), {
  ssr: false
})

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()

  }, [])

  return (
    <ToastProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  )
}
