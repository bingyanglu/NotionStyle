import Image from "next/image"
import { Palette, Share2, Sparkles, Layers } from 'lucide-react'
import { translations, Language } from "@/lib/i18n/translations"

interface ProductIntroProps {
  lang: Language
}

export function ProductIntro({ lang }: ProductIntroProps) {
  const t = translations[lang]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5mb3W9d0UIK51dvn0FR0zPUfAlktB3.png"
                alt="NotionStyle Interface"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{t.features.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <Palette className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.features.visualCapture.title}</h3>
                    <p className="text-gray-600">{t.features.visualCapture.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <Layers className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.features.metadata.title}</h3>
                    <p className="text-gray-600">{t.features.metadata.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <Sparkles className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.features.fullContent.title}</h3>
                    <p className="text-gray-600">{t.features.fullContent.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <Share2 className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.features.exportShare.title}</h3>
                    <p className="text-gray-600">{t.features.exportShare.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
