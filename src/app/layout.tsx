import {getCssText, globalStyle} from 'stitches.config'

import { ToastProvider } from '@/context/toast'
import { CookieWarn } from '@/components/cookie-warn'
import { AuthProvider } from '@/context/auth'

export default function RootLayout({children}: {children: React.ReactNode}) {
  globalStyle()

  return (
    <html lang="pt-BR">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ToastProvider>
          <AuthProvider>
            <CookieWarn />
            {children}
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  )
}