import Link from "next/link"
import { Mail, Twitter } from 'lucide-react'
import { translations, Language } from "@/lib/i18n/translations"

interface SiteFooterProps {
  lang: Language
}

export function SiteFooter({ lang }: SiteFooterProps) {
  const t = translations[lang]

  return (
    <footer className="bg-[#FFF5EB] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-[#FF4D4D] p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M12 4H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6" />
                    <path d="M11 13.5V16h2.5" />
                    <path d="M16 2v4h4" />
                    <path d="M21 2 16 7" />
                  </svg>
                </div>
                <span className="font-bold text-xl">{t.common.brand}</span>
              </Link>
              <p className="text-gray-600 leading-relaxed">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t.footer.about.title}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.about.features}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.about.faq}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.about.contact}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.about.tryNow}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t.footer.links.title}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.links.blog}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.links.docs}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.links.api}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.links.status}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t.footer.legal.title}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.legal.privacy}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-[#FF4D4D] transition-colors"
                  >
                    {t.footer.legal.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
