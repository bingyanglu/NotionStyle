import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { translations } from '@/lib/i18n/translations'

// 使用 Inter 字体
const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export async function generateMetadata({ params, searchParams }: {
  params: { lang?: string }
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const lang = (params?.lang || searchParams?.lang || "zh") as "zh" | "en"
  const metadata = translations[lang].metadata

  return {
    title: {
      template: `%s | ${metadata.title}`,
      default: metadata.title,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: translations[lang].common.brand }],
    creator: translations[lang].common.brand,
    publisher: translations[lang].common.brand,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      url: 'https://notion-style.vercel.app/',
      siteName: translations[lang].common.brand,
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: translations[lang].common.brand,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: 'https://notion-style.vercel.app',
      languages: {
        'zh-CN': 'https://notion-style.vercel.app?lang=zh',
        'en-US': 'https://notion-style.vercel.app?lang=en',
      },
    },
    verification: {
      google: 'google-site-verification-code', // 需要替换为实际的验证码
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang?: string }
}) {
  const lang = params?.lang || 'zh'
  
  return (
    <html lang={lang === 'zh' ? 'zh-CN' : 'en'}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
