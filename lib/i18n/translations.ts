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

export const translations: Record<Language, Translation> = {
  zh: {
    metadata: {
      title: "Notion字体美化 - 让你的笔记更优雅",
      description: "专业的Notion笔记美化工具，提供优雅的字体选择和排版样式。让你的笔记更加赏心悦目，提升阅读体验。",
      keywords: ["Notion美化", "字体美化", "笔记排版", "优雅笔记", "中文排版", "字体设计", "排版工具"]
    },
    common: {
      brand: "Notion字体美化",
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
      title: "让Notion笔记更优雅，让文字更有魅力",
      subtitle: "专业的Notion笔记美化工具，提供丰富的字体选择和优雅的排版样式。让你的每一篇笔记都成为视觉享受。",
      capture: "开始美化",
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
        title: "视觉美化",
        description: "智能识别页面布局，自动优化视觉效果，让笔记更加赏心悦目。"
      },
      metadata: {
        title: "智能排版",
        description: "自动优化文字间距、行高和段落布局，让文档结构更加清晰。"
      },
      fullContent: {
        title: "全文格式化",
        description: "一键美化整篇文档，包括标题、正文、列表等所有元素。"
      },
      exportShare: {
        title: "导出分享",
        description: "支持多种格式导出，保持完美排版，轻松分享给他人。"
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
          question: "支持哪些字体？",
          answer: "我们提供了多种精选字体，包括经典衬线字体、现代无衬线字体等，满足不同场景的排版需求。"
        },
        {
          question: "如何自定义模板？",
          answer: "在模板库中选择基础模板后，可以通过设置面板调整字体、颜色、间距等细节参数。"
        },
        {
          question: "支持批量处理吗？",
          answer: "是的，支持批量处理整个页面或数据库中的文本，一键美化所有内容。"
        },
        {
          question: "如何保持排版一致性？",
          answer: "我们提供样式预设功能，可以保存您喜欢的排版设置，确保所有文档风格统一。"
        }
      ]
    },
    footer: {
      description: "Notion字体美化是专业的笔记排版工具，让你的文字更优雅、更富有表现力。",
      about: {
        title: "关于",
        features: "核心功能",
        faq: "常见问题",
        contact: "联系我们",
        tryNow: "立即体验"
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
      copyright: " 2025 Notion字体美化. 保留所有权利。"
    }
  },
  en: {
    metadata: {
      title: "Notion Font Beautifier - Make Your Notes Elegant",
      description: "Professional Notion note beautification tool with elegant font selection and layout styles. Enhance your reading experience with beautiful typography.",
      keywords: ["Notion beautifier", "font customization", "note layout", "elegant notes", "typography", "font design", "layout tool"]
    },
    common: {
      brand: "Notion Font Beautifier",
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
      title: "Make Your Notion Notes Elegant, Make Text More Charming",
      subtitle: "Professional Notion note beautification tool with rich font selection and elegant layout styles. Turn every note into a visual delight.",
      capture: "Start Beautifying",
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
        title: "Visual Enhancement",
        description: "Intelligently recognizes page layout and automatically optimizes visual effects for more appealing notes."
      },
      metadata: {
        title: "Smart Typography",
        description: "Automatically optimizes text spacing, line height, and paragraph layout for clearer document structure."
      },
      fullContent: {
        title: "Full Content Formatting",
        description: "One-click beautification of entire documents, including headings, body text, lists, and all elements."
      },
      exportShare: {
        title: "Export & Share",
        description: "Support multiple export formats while maintaining perfect layout for easy sharing."
      },
      fonts: {
        title: "Professional Font Library",
        description: "Offering various curated fonts, from elegant serif to modern sans-serif, meeting different style needs."
      },
      templates: {
        title: "Elegant Layout Templates",
        description: "Providing multiple beautiful templates suitable for notes, articles, reports, and more."
      },
      export: {
        title: "Multi-format Export",
        description: "Export to PDF, images, and other formats while maintaining layout quality for easy sharing and printing."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "More questions? Contact us via email",
      items: [
        {
          question: "What fonts are supported?",
          answer: "We offer a variety of curated fonts, including classic serif and modern sans-serif fonts, suitable for different typography needs."
        },
        {
          question: "How to customize templates?",
          answer: "After selecting a base template from the library, you can adjust fonts, colors, spacing, and other parameters through the settings panel."
        },
        {
          question: "Is batch processing supported?",
          answer: "Yes, you can process text across an entire page or database, beautifying all content with one click."
        },
        {
          question: "How to maintain consistent typography?",
          answer: "We provide style presets feature where you can save your favorite typography settings to ensure consistency across all documents."
        }
      ]
    },
    footer: {
      description: "Notion Font Beautifier is a professional note typography tool that makes your text more elegant and expressive.",
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
