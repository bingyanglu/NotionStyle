"use client"

import Link from "next/link"
import { Globe2, Clock, Mail, User2, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { translations, Language } from "@/lib/i18n/translations"

interface SiteHeaderProps {
  lang: Language
}

export function SiteHeader({ lang }: SiteHeaderProps) {
  const t = translations[lang]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-[#FF4D4D] p-2 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 4H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M11 13.5V16h2.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 2v4h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 2 16 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl text-[#FF4D4D]">{t.common.brand}</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <button
                onClick={() => scrollToSection("features")}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-[#FF4D4D] transition-colors"
              >
                <Globe2 className="h-4 w-4" />
                <span>{t.nav.features}</span>
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-[#FF4D4D] transition-colors"
              >
                <Clock className="h-4 w-4" />
                <span>{t.nav.faq}</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-[#FF4D4D] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{t.nav.contact}</span>
              </button>
              <LanguageToggle currentLang={lang} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
