import { Palette, Layers, Sparkles, Share2 } from 'lucide-react'
import { translations, Language } from "@/lib/i18n/translations"

interface FeaturesProps {
  lang: Language
}

export function Features({ lang }: FeaturesProps) {
  const t = translations[lang]

  const features = [
    {
      icon: Palette,
      title: t.features.visualCapture.title,
      description: t.features.visualCapture.description,
    },
    {
      icon: Layers,
      title: t.features.metadata.title,
      description: t.features.metadata.description,
    },
    {
      icon: Sparkles,
      title: t.features.fullContent.title,
      description: t.features.fullContent.description,
    },
    {
      icon: Share2,
      title: t.features.exportShare.title,
      description: t.features.exportShare.description,
    },
  ]

  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-4">
              {t.features.title}
            </div>
            <h2 className="text-3xl font-bold mb-2">{t.features.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-red-100 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
