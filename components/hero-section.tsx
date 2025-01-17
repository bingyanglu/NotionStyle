"use client"

import { useState } from "react"
import { Type } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { translations, Language } from "@/lib/i18n/translations"

interface HeroSectionProps {
  lang: Language
}

export function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang]
  const [url, setUrl] = useState("")
  const [resolution, setResolution] = useState("full-hd")
  const [aspectRatio, setAspectRatio] = useState("16:9")
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-2 mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 top-3 flex items-start pointer-events-none">
                  <Type className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  placeholder={t.hero.input.placeholder}
                  value={url}
                  onChange={(e) => {
                    const text = e.target.value;
                    if (text.length <= 10000) {
                      setUrl(text);
                    }
                  }}
                  className="pl-10 w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
                <div className="absolute right-3 bottom-3 text-sm text-gray-400">
                  {url.length}/10000 {t.hero.input.maxLength}
                </div>
              </div>
              <Button size="lg" className="bg-[#FF4D4D] hover:bg-[#ff3333] text-white px-8">
                {t.hero.capture}
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-left">
              <h3 className="text-lg font-semibold mb-4">{t.hero.settings.title}</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-left block">{t.hero.settings.resolution}</Label>
                    <Select value={resolution} onValueChange={setResolution}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择分辨率" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hd">HD</SelectItem>
                        <SelectItem value="full-hd">Full HD</SelectItem>
                        <SelectItem value="qhd">QHD</SelectItem>
                        <SelectItem value="4k">4K</SelectItem>
                        <SelectItem value="5k">5K</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-left block">{t.hero.settings.aspectRatio}</Label>
                    <Select value={aspectRatio} onValueChange={setAspectRatio}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择宽高比" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16:9">16:9</SelectItem>
                        <SelectItem value="16:10">16:10</SelectItem>
                        <SelectItem value="1:1">1:1</SelectItem>
                        <SelectItem value="full">Full Page</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-left block">{t.hero.settings.colorTheme}</Label>
                    <div className="flex items-center space-x-2 h-10">
                      <Switch
                        checked={isDarkMode}
                        onCheckedChange={setIsDarkMode}
                      />
                      <span className="text-sm text-gray-500">
                        {isDarkMode ? t.hero.settings.dark : t.hero.settings.light}
                      </span>
                    </div>
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
