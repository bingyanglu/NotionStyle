import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"
import { Language } from "@/lib/i18n/translations"

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const lang = (searchParams.lang as Language) || "zh"

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <HeroSection lang={lang} />
        <Features lang={lang} />
        <FAQ lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  )
}
