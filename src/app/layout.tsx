import {getCssText, globalStyle} from 'stitches.config'

export default function RootLayout({children}: {children: React.ReactNode}) {
  globalStyle()

  return (
    <html lang="pt-BR">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}