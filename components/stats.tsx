import { translations, Language } from "@/lib/i18n/translations"

interface StatsProps {
  lang: Language
}

export function Stats({ lang }: StatsProps) {
  const t = translations[lang]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-4">
              {t.stats.title}
            </div>
            <h2 className="text-3xl font-bold mb-2">{t.stats.title}</h2>
            <p className="text-gray-600">{t.stats.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-bold text-red-500 mb-2">{t.stats.response.value}</div>
              <div className="text-gray-600 font-medium">{t.stats.response.label}</div>
              <div className="text-sm text-gray-500">{t.stats.response.sublabel}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-bold text-red-500 mb-2">{t.stats.processed.value}</div>
              <div className="text-gray-600 font-medium">{t.stats.processed.label}</div>
              <div className="text-sm text-gray-500">{t.stats.processed.sublabel}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-6xl font-bold text-red-500 mb-2">{t.stats.success.value}</div>
              <div className="text-gray-600 font-medium">{t.stats.success.label}</div>
              <div className="text-sm text-gray-500">{t.stats.success.sublabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
