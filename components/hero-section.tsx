"use client"

import { useState, useEffect, useMemo } from "react"
import { Type, Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { translations, Language } from "@/lib/i18n/translations"
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { colorOptions } from "@/lib/config/colors"

interface HeroSectionProps {
  lang: Language
}

export function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang]
  const [text, setText] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("")  // 将font改为backgroundColor
  const [size, setSize] = useState("normalsize")
  const [style, setStyle] = useState("normal")
  const [color, setColor] = useState("")  
  const [katexOutput, setKatexOutput] = useState("")
  const [katexText, setKatexText] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [bgSearchValue, setBgSearchValue] = useState("")  // 添加背景色搜索状态
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("")
  const [debouncedBgSearchValue, setDebouncedBgSearchValue] = useState("")  // 添加背景色防抖搜索状态
  const [filteredColors, setFilteredColors] = useState(colorOptions)
  const [filteredBgColors, setFilteredBgColors] = useState(colorOptions)  // 添加背景色过滤状态
  const [currentPage, setCurrentPage] = useState(1)
  const [bgCurrentPage, setBgCurrentPage] = useState(1)  // 添加背景色当前页状态
  const itemsPerPage = 20
  
  // 添加背景色防抖效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedBgSearchValue(bgSearchValue)
    }, 300)
  
    return () => clearTimeout(timer)
  }, [bgSearchValue])
  
  // 添加背景色搜索过滤效果
  useEffect(() => {
    const filtered = colorOptions.filter(option =>
      option.颜色名称.toLowerCase().includes(debouncedBgSearchValue.toLowerCase())
    )
    setFilteredBgColors(filtered)
    setBgCurrentPage(1)
  }, [debouncedBgSearchValue])

  // 添加背景色滚动加载处理
  const handleBgScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      setBgCurrentPage(prev => prev + 1)
    }
  }

  // 添加背景色选项渲染优化
  const memoizedBgColorOptions = useMemo(() => {
    const endIndex = bgCurrentPage * itemsPerPage
    return filteredBgColors.slice(0, endIndex).map((option) => (
      <SelectItem 
        key={option.色号} 
        value={`#${option.色号}`}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: `#${option.色号}` }}
          />
          <span>{option.颜色名称}</span>
        </div>
      </SelectItem>
    ))
  }, [filteredBgColors, bgCurrentPage])

  // 添加防抖效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue)
    }, 300)
  
    return () => clearTimeout(timer)
  }, [searchValue])
  
  // 根据防抖后的搜索值进行过滤
  useEffect(() => {
    const filtered = colorOptions.filter(option =>
      option.颜色名称.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    )
    setFilteredColors(filtered)
    setCurrentPage(1) // 重置页码
  }, [debouncedSearchValue])

  // 处理滚动加载
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      setCurrentPage(prev => prev + 1)
    }
  }

  // 使用useMemo优化颜色选项的渲染
  const memoizedColorOptions = useMemo(() => {
    const endIndex = currentPage * itemsPerPage
    return filteredColors.slice(0, endIndex).map((option) => (
      <SelectItem 
        key={option.色号} 
        value={`#${option.色号}`}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: `#${option.色号}` }}
          />
          <span>{option.颜色名称}</span>
        </div>
      </SelectItem>
    ))
  }, [filteredColors, currentPage])

  useEffect(() => {
    try {
      if (!text) {
        setKatexOutput('')
        setKatexText('')
        return
      }

      let processedText = text
      
      // 处理数学模式命令
      if (style !== 'normal') {
        // 数学模式命令需要放在$...$中
        if (backgroundColor && ['widetilde', 'utilde', 'overleftarrow', 'overrightarrow', 'underleftarrow', 'underrightarrow', 
            'overleftrightarrow', 'overbrace', 'underbrace', 'overline', 'underline'].includes(style)) {
          processedText = `$\\${style}{${processedText}}$`
        } else {
          // 其他样式直接使用命令
          processedText = `\\${style}{${processedText}}`
        }
      }

      // 添加字体大小
      if (size) {
        switch(size) {
          case 'tiny':
            processedText = `\\tiny{${processedText}}`
            break
          case 'scriptsize':
            processedText = `\\scriptsize{${processedText}}`
            break
          case 'footnotesize':
            processedText = `\\footnotesize{${processedText}}`
            break
          case 'small':
            processedText = `\\small{${processedText}}`
            break
          case 'normalsize':
            processedText = `\\normalsize{${processedText}}`
            break
          case 'large':
            processedText = `\\large{${processedText}}`
            break
          case 'Large':
            processedText = `\\Large{${processedText}}`
            break
          case 'LARGE':
            processedText = `\\LARGE{${processedText}}`
            break
          case 'huge':
            processedText = `\\huge{${processedText}}`
            break
          case 'Huge':
            processedText = `\\Huge{${processedText}}`
            break
        }
      }

      // 添加字体颜色和背景色
      if (color || backgroundColor) {
        if (color) {
          const colorValue = color.replace('#', '')
          processedText = `\\textcolor{${colorValue}}{${processedText}}`
        }
        if (backgroundColor) {
          const bgColorValue = backgroundColor.replace('#', '')
          processedText = `\\colorbox{${bgColorValue}}{${processedText}}`
        }
      }

      setKatexText(processedText)

      const html = katex.renderToString(processedText, {
        throwOnError: false,
        displayMode: true
      })
      setKatexOutput(html)
    } catch (error) {
      console.error('KaTeX渲染错误:', error)
      setKatexOutput('渲染错误，请检查输入')
    }
  }, [text, backgroundColor, size, style, color])

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
{/* 控制面板区域 */}
<div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* 背景色选择 */}
                <div className="space-y-2">
                  <Label>背景色</Label>
                  <Select
                    value={backgroundColor}
                    onValueChange={(value) => {
                      setBackgroundColor(value === 'clear' ? '' : value)
                      setBgSearchValue(bgSearchValue)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择背景色" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          placeholder="搜索背景色..."
                          className="mb-2"
                          value={bgSearchValue}
                          onChange={(e) => {
                            setBgSearchValue(e.target.value)
                            setBgCurrentPage(1)
                          }}
                        />
                      </div>
                      <div className="max-h-[300px] overflow-y-auto" onScroll={handleBgScroll}>
                        <SelectItem value="clear">清除背景色</SelectItem>
                        {memoizedBgColorOptions}
                      </div>
                    </SelectContent>
                  </Select>
                </div>

                {/* 字号选择 */}
                <div className="space-y-2">
                  <Label>字号</Label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.hero.settings.selectSize} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiny">极小</SelectItem>
                      <SelectItem value="scriptsize">超小</SelectItem>
                      <SelectItem value="footnotesize">脚注小号</SelectItem>
                      <SelectItem value="small">小号</SelectItem>
                      <SelectItem value="normalsize">标准</SelectItem>
                      <SelectItem value="large">大号</SelectItem>
                      <SelectItem value="Large">较大</SelectItem>
                      <SelectItem value="LARGE">超大</SelectItem>
                      <SelectItem value="huge">巨大</SelectItem>
                      <SelectItem value="Huge">特大</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 样式选择 */}
                <div className="space-y-2">
                  <Label>文字装饰</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.hero.settings.selectStyle} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">常规</SelectItem>
                      <SelectItem value="textbf">加粗</SelectItem>
                      <SelectItem value="textit">斜体</SelectItem>
                      <SelectItem value="widetilde">文字上方波浪线条</SelectItem>
                      <SelectItem value="utilde">文字下方波浪线条</SelectItem>
                      <SelectItem value="overleftarrow">文字上方往左箭头</SelectItem>
                      <SelectItem value="overrightarrow">文字上方往右箭头</SelectItem>
                      <SelectItem value="underleftarrow">文字下方往左箭头</SelectItem>
                      <SelectItem value="underrightarrow">文字下方往右箭头</SelectItem>
                      <SelectItem value="overleftrightarrow">文字上方双箭头</SelectItem>
                      <SelectItem value="overbrace">文字上方括号</SelectItem>
                      <SelectItem value="underbrace">文字下方括号</SelectItem>
                      <SelectItem value="overline">文字上方线条</SelectItem>
                      <SelectItem value="underline">文字下方线条</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 颜色选择 */}
                <div className="space-y-2">
                  <Label>颜色</Label>
                  <Select
                    value={color}
                    onValueChange={(value) => {
                      setColor(value === 'clear' ? '' : value)
                      setSearchValue(searchValue)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择颜色" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          placeholder="搜索颜色..."
                          className="mb-2"
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value)
                            setCurrentPage(1)
                          }}
                        />
                      </div>
                      <div className="max-h-[300px] overflow-y-auto" onScroll={handleScroll}>
                        <SelectItem value="clear">清除颜色</SelectItem>
                        {memoizedColorOptions}
                      </div>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-8 mb-8">
              {/* 文本输入区域 */}
              <div className="relative">
                <textarea
                  placeholder={t.hero.input.placeholder}
                  value={text}
                  onChange={(e) => {
                    const newText = e.target.value;
                    if (newText.length <= 1000) {
                      setText(newText);
                    }
                  }}
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
                <div className="absolute right-3 bottom-3 text-sm text-gray-400">
                  {text.length}/1000 {t.hero.input.maxLength}
                </div>
              </div>

              {/* 预览效果 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                {/* <h3 className="text-lg font-semibold mb-4">预览效果</h3> */}
                <div
                  className="katex-preview"
                  dangerouslySetInnerHTML={{ __html: katexOutput }}
                />
              </div>
              
              {/* KaTeX表达式 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
                  <span>{t.hero.katex.title}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(katexText);
                      const button = document.activeElement as HTMLButtonElement;
                      if (button) {
                        const originalText = button.innerHTML;
                        button.innerHTML = '已复制';
                        button.classList.add('bg-green-100', 'text-green-600');
                        setTimeout(() => {
                          button.innerHTML = originalText;
                          button.classList.remove('bg-green-100', 'text-green-600');
                        }, 1000);
                      }
                    }}
                    className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center gap-1 text-sm text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    {t.hero.katex.copy}
                  </button>
                </h3>
                <div className="relative">
                  <textarea
                    readOnly
                    value={katexText}
                    onClick={(e) => {
                      e.currentTarget.select();
                      navigator.clipboard.writeText(katexText);
                    }}
                    className="w-full min-h-[100px] rounded-md border border-input bg-muted px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
