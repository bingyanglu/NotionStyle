import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"
import { Language, translations } from "@/lib/i18n/translations"

export async function generateMetadata({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const lang = (searchParams?.lang as "zh" | "en") || "zh"
  const metadata = translations[lang].metadata
  const t = translations[lang]

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: 'https://notion-style.vercel.app',
      languages: {
        'zh-CN': 'https://notion-style.vercel.app?lang=zh',
        'en-US': 'https://notion-style.vercel.app?lang=en',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
  }
}

// 生成结构化数据
function generateStructuredData(lang: Language) {
  const t = translations[lang]
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": t.common.brand,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "description": t.metadata.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      t.features.visualCapture.title,
      t.features.metadata.title,
      t.features.fullContent.title,
      t.features.fonts.title,
      t.features.templates.title,
      t.features.export.title
    ]
  }
}

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const lang = (searchParams?.lang as Language) || "zh"
  const structuredData = generateStructuredData(lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader lang={lang} />
      <main>
        <HeroSection lang={lang} />
        <Features lang={lang} />
        <FAQ lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  )
}
