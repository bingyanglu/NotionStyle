export type Language = "zh" | "en"

export type Translation = {
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  common: {
    brand: string
    tryNow: string
  }
  nav: {
    features: string
    faq: string
    contact: string
    tryNow: string
    fonts: string
    templates: string
  }
  hero: {
    title: string
    subtitle: string
    capture: string
    katex: {
      title: string
      copy: string
    }
    input: {
      placeholder: string
      maxLength: string
    }
    settings: {
      title: string
      resolution: string
      aspectRatio: string
      colorTheme: string
      light: string
      dark: string
    }
  }
  features: {
    title: string
    visualCapture: {
      title: string
      description: string
    }
    metadata: {
      title: string
      description: string
    }
    fullContent: {
      title: string
      description: string
    }
    exportShare: {
      title: string
      description: string
    }
    fonts: {
      title: string
      description: string
    }
    templates: {
      title: string
      description: string
    }
    export: {
      title: string
      description: string
    }
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  footer: {
    description: string
    about: {
      title: string
      features: string
      faq: string
      contact: string
      tryNow: string
    }
    links: {
      title: string
      blog: string
      docs: string
      api: string
      status: string
    }
    legal: {
      title: string
      privacy: string
      terms: string
    }
    copyright: string
  }
}
// dfgdfgt
export const translations: Record<Language, Translation> = {
  zh: {
    metadata: {
        title: "Notion排版大师 - 提升笔记排版与文字美化",
        description: "Notion排版大师为用户提供专业的文字排版与美化工具，支持LaTeX和KaTeX排版，让您的Notion笔记更优雅、更专业。",
        keywords: ["Notion排版","Notion排版大师", "Notion字体美化", "LaTeX排版", "KaTeX排版", "文字美化工具", "优雅笔记排版", "Notion文字排版"]
  },
    common: {
      brand: "Notion排版大师",
      tryNow: "立即体验",
    },
    nav: {
      features: "核心功能",
      faq: "常见问题",
      contact: "联系我们",
      tryNow: "立即体验",
      fonts: "字体库",
      templates: "模板"
    },
    hero: {
      title: "让Notion笔记更优雅，排版更专业",
      subtitle: "Notion排版大师提供LaTeX与KaTeX支持，让您的笔记更具视觉魅力与专业感。",
      capture: "开始美化",
      katex: {
        title: "KaTeX表达式",
        copy: "复制"
      },
      input: {
        placeholder: "请输入要美化的文字...",
        maxLength: "字符"
      },
      settings: {
        title: "排版设置",
        resolution: "分辨率",
        aspectRatio: "宽高比",
        colorTheme: "主题",
        light: "浅色",
        dark: "深色"
      }
    },
    features: {
      title: "核心功能",
      visualCapture: {
        title: "LaTeX与KaTeX排版支持",
        description: "支持LaTeX和KaTeX排版引擎，轻松将数学公式、符号和文本转化为专业的排版效果，提升Notion笔记的学术感和专业度。"
      },
      metadata: {
        title: "字体与排版美化",
        description: "提供多种字体样式和排版模板，自动优化文本格式，让您的Notion笔记既美观又易读。"
      },
      fullContent: {
        title: "智能排版助手",
        description: "自动优化文本间距、对齐方式，帮助用户快速调整段落、标题和列表，保持排版整洁、专业。"
      },
      exportShare: {
        title: "一键复制与导出",
        description: "轻松将优化后的内容复制到Notion，支持一键导出排版后的内容，方便快捷地与他人分享。"
      },
      fonts: {
        title: "专业字体库",
        description: "提供多种精选字体，从优雅衬线到现代无衬线，满足不同风格需求。"
      },
      templates: {
        title: "优雅排版模板",
        description: "提供多种精美模板，适用于笔记、文章、简报等多种场景。"
      },
      export: {
        title: "多格式导出",
        description: "支持导出为PDF、图片等多种格式，保持排版效果的同时方便分享和打印。"
      }
    },
    faq: {
      title: "常见问题",
      subtitle: "还有其他问题？请通过邮件联系我们",
      items: [
        {
          question: "如何将排版内容复制到Notion中？",
          answer: "只需在网站上完成排版后，点击「一键复制」按钮，复制转换后的LaTeX或文本内容，直接粘贴到Notion中即可。"
        },
        {
          question: "网站支持哪些排版格式？",
          answer: "我们支持LaTeX和KaTeX格式的文字排版，以及文本的字体、大小、颜色、效果等常见排版样式。"
        },
        {
          question: "是否需要安装任何插件或扩展？",
          answer: "不需要。我们的网站完全基于浏览器操作，用户无需安装任何插件或扩展即可使用所有功能。"
        },
        {
          question: "是否支持导出为其他格式？",
          answer: "是的，您可以将排版后的内容导出为文本或直接复制，以便与他人分享或导入到其他平台。"
        }
      ]
    },
    footer: {
      description: "Notion排版大师提供LaTeX与KaTeX支持，让您的笔记更具视觉魅力与专业感。",
      about: {
        title: "关于",
        features: "核心功能",
        faq: "常见问题",
        contact: "联系我们"
      },
      links: {
        title: "链接",
        blog: "博客",
        docs: "文档",
        api: "API",
        status: "状态"
      },
      legal: {
        title: "法律",
        privacy: "隐私政策",
        terms: "服务条款"
      },
      copyright: " 2025 Notion排版大师. 保留所有权利。"
    }
  },
  en: {
    metadata: {
      title: "Notion Typography Master - Enhance Your Note Layout",
      description: "Notion Typography Master provides professional text layout and beautification tools, supporting LaTeX and KaTeX typesetting, making your Notion notes more elegant and professional.",
      keywords: ["Notion typography", "Notion Typography Master", "Notion font beautification", "LaTeX typography", "KaTeX typography", "text beautification tool", "elegant note layout", "Notion text layout"]
    },
    common: {
      brand: "Notion Typography Master",
      tryNow: "Try Now",
    },
    nav: {
      features: "Features",
      faq: "FAQ",
      contact: "Contact",
      tryNow: "Try Now",
      fonts: "Fonts",
      templates: "Templates"
    },
    hero: {
      title: "Make Your Notion Notes More Elegant, Layout More Professional",
      subtitle: "Notion Typography Master provides LaTeX and KaTeX support, adding visual appeal and professionalism to your notes.",
      capture: "Start Beautifying",
      katex: {
        title: "KaTeX Expression",
        copy: "Copy"
      },
      input: {
        placeholder: "Enter text to beautify...",
        maxLength: "characters"
      },
      settings: {
        title: "Layout Settings",
        resolution: "Resolution",
        aspectRatio: "Aspect Ratio",
        colorTheme: "Theme",
        light: "Light",
        dark: "Dark"
      }
    },
    features: {
      title: "Core Features",
      visualCapture: {
        title: "LaTeX & KaTeX Support",
        description: "Supports LaTeX and KaTeX typesetting engines, easily transform mathematical formulas, symbols, and text into professional typesetting effects, enhancing the academic and professional feel of your Notion notes."
      },
      metadata: {
        title: "Font & Layout Beautification",
        description: "Provides various font styles and layout templates, automatically optimizes text formatting to make your Notion notes both beautiful and readable."
      },
      fullContent: {
        title: "Smart Layout Assistant",
        description: "Automatically optimizes text spacing and alignment, helps users quickly adjust paragraphs, headings, and lists to maintain clean and professional layouts."
      },
      exportShare: {
        title: "One-Click Copy & Export",
        description: "Easily copy optimized content to Notion, supports one-click export of formatted content for convenient sharing with others."
      },
      fonts: {
        title: "Professional Font Library",
        description: "Provides a variety of curated fonts, from elegant serif to modern sans-serif, meeting different style needs."
      },
      templates: {
        title: "Elegant Layout Templates",
        description: "Provides multiple beautiful templates suitable for notes, articles, reports, and various scenarios."
      },
      export: {
        title: "Multi-format Export",
        description: "Supports export to PDF, images, and other formats while maintaining layout quality for easy sharing and printing."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "More questions? Contact us via email",
      items: [
        {
          question: "How to copy formatted content to Notion?",
          answer: "After completing the formatting on our website, simply click the 'Copy' button to copy the converted LaTeX or text content, then paste it directly into Notion."
        },
        {
          question: "What formatting options are supported?",
          answer: "We support LaTeX and KaTeX formatting for text, as well as common typography styles including font, size, color, and effects."
        },
        {
          question: "Do I need to install any plugins or extensions?",
          answer: "No. Our website is completely browser-based, and users can access all features without installing any plugins or extensions."
        },
        {
          question: "Can I export to other formats?",
          answer: "Yes, you can export your formatted content as text or copy it directly for sharing with others or importing into other platforms."
        }
      ]
    },
    footer: {
      description: "Notion Typography Master provides LaTeX and KaTeX support, adding visual appeal and professionalism to your notes.",
      about: {
        title: "About",
        features: "Features",
        faq: "FAQ",
        contact: "Contact",
        tryNow: "Try Now"
      },
      links: {
        title: "Links",
        blog: "Blog",
        docs: "Documentation",
        api: "API",
        status: "Status"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      copyright: " 2025 Notion Font Beautifier. All rights reserved."
    }
  }
}
