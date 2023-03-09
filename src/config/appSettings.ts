import { Metadata } from "next"

export const appSettings = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || '@generic-name',
  siteUrl: process.env.SITE_URL || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) || process.env.URL || 'http://localhost:3000',
  backend_url: process.env.NEXT_PUBLIC_BACKEND_URL,
  ninjaApiKey: process.env.API_NINJAS_KEY,
  analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
} 

export const getMetaTag = (options: Metadata): Metadata => {
  const { 
    title, 
    description,
    openGraph,
    twitter,
    ...otherOptions
  } = options

  return {
    openGraph: {
      ...(title && ({ title })),
      ...(description && ({ description })),
      images: [
        'https://mycv-online.vercel.app/og-image.png'
      ],
      ...openGraph,
      type: 'website',
      locale: 'pt-BR'
    },
    twitter: {
      ...(title && ({ title })),
      ...(description && ({ description })),
      card: 'summary',
      ...twitter,
    },
    ...otherOptions,
  }
  
}