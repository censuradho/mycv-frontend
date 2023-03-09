import {getCssText, globalStyle} from 'stitches.config'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  globalStyle()

  return (
    <html lang="pt-BR">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
      </head>
      <body>{children}</body>
    </html>
  )
}