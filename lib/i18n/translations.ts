export type Language = "zh" | "en"

export const translations: Record<Language, Translation> = {
  zh: {
    common: {
      brand: "NotionStyle",
      tryNow: "立即体验",
    },
    nav: {
      features: "核心功能",
      faq: "常见问题",
      contact: "联系我们",
      tryNow: "立即体验"
    },
    hero: {
      title: "一键美化 Notion 内容，提升文档排版效果",
      subtitle: "NotionStyle 是专为 Notion 用户设计的 LaTeX 样式美化工具，快速生成专业且美观的格式化文本和公式。轻松提升您的文档视觉效果，节省排版时间，助力更高效的工作与学习。",
      capture: "开始美化",
      settings: {
        title: "截图设置",
        resolution: "分辨率",
        aspectRatio: "宽高比",
        colorTheme: "颜色主题",
        light: "浅色",
        dark: "深色"
      }
    },
    features: {
      title: "核心功能",
      visualCapture: {
        title: "丰富样式模板",
        description: "提供多种排版风格，包括学术、简约、创意等多种模式，满足不同用户需求。"
      },
      metadata: {
        title: "兼容性强",
        description: "与 Notion 无缝对接，也支持其他支持 LaTeX 渲染的文档工具。"
      },
      fullContent: {
        title: "智能优化",
        description: "自动根据输入内容推荐合适的排版样式，节省用户的编辑时间。"
      },
      exportShare: {
        title: "导出与分享",
        description: "支持将排版后的内容导出为图片或 PDF，方便离线存储和分享。"
      }
    },
    faq: {
      title: "常见问题",
      subtitle: "还有其他问题？请通过邮件联系我们。",
      items: [
        {
          question: "NotionStyle 是什么？它如何工作？",
          answer: "NotionStyle 是一个在线文字美化工具，专注于提升 Notion 文档的格式化与排版效果。用户通过简单输入文字，NotionStyle 自动应用 LaTeX 样式，生成美观的排版。"
        },
        {
          question: "我可以自定义样式吗？",
          answer: "是的，NotionStyle 提供灵活的样式自定义选项，您可以根据需要调整文字格式、字体大小、颜色等。"
        },
        {
          question: "支持哪些格式的内容？",
          answer: "NotionStyle 支持文本、数学公式以及符号的样式化，尤其适用于需要专业排版的教育、科研和创意类内容。"
        },
        {
          question: "使用 NotionStyle 有次数限制吗？",
          answer: "目前，NotionStyle 对使用次数没有限制，您可以根据需要随时使用。"
        }
      ]
    },
    footer: {
      description: "NotionStyle 是专为 Notion 用户设计的 LaTeX 样式美化工具，让您的文档更专业、更美观。",
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
      copyright: " 2025 NotionStyle. 保留所有权利。"
    }
  },
  en: {
    common: {
      brand: "NotionStyle",
      tryNow: "Try Now",
    },
    nav: {
      features: "Core Features",
      faq: "FAQ",
      contact: "Contact",
      tryNow: "Try Now"
    },
    hero: {
      title: "Enhance Your Notion Content with One Click",
      subtitle: "NotionStyle is a LaTeX styling tool designed specifically for Notion users, quickly generating professional and beautiful formatted text and formulas. Effortlessly enhance your document's visual appeal, save formatting time, and boost your work and study efficiency.",
      capture: "Start Styling",
      settings: {
        title: "Style Settings",
        resolution: "Resolution",
        aspectRatio: "Aspect Ratio",
        colorTheme: "Color Theme",
        light: "Light",
        dark: "Dark"
      }
    },
    features: {
      title: "Core Features",
      visualCapture: {
        title: "Rich Style Templates",
        description: "Offering various formatting styles including academic, minimalist, and creative modes to meet different user needs."
      },
      metadata: {
        title: "Strong Compatibility",
        description: "Seamlessly integrates with Notion and supports other document tools that render LaTeX."
      },
      fullContent: {
        title: "Smart Optimization",
        description: "Automatically recommends suitable formatting styles based on input content, saving users' editing time."
      },
      exportShare: {
        title: "Export & Share",
        description: "Export styled content as images or PDFs for offline storage and easy sharing."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Have more questions? Contact us via email.",
      items: [
        {
          question: "What is NotionStyle and how does it work?",
          answer: "NotionStyle is an online text beautification tool focused on enhancing the formatting and layout of Notion documents. Users simply input text, and NotionStyle automatically applies LaTeX styles to create beautiful typography."
        },
        {
          question: "Can I customize the styles?",
          answer: "Yes, NotionStyle offers flexible style customization options, allowing you to adjust text formatting, font size, colors, and more according to your needs."
        },
        {
          question: "What types of content are supported?",
          answer: "NotionStyle supports styling of text, mathematical formulas, and symbols, particularly suitable for educational, research, and creative content requiring professional formatting."
        },
        {
          question: "Is there a usage limit for NotionStyle?",
          answer: "Currently, NotionStyle has no usage limits, and you can use it whenever needed."
        }
      ]
    },
    footer: {
      description: "NotionStyle is a LaTeX styling tool designed for Notion users, making your documents more professional and beautiful.",
      about: {
        title: "About",
        features: "Core Features",
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
      copyright: " 2025 NotionStyle. All rights reserved."
    }
  }
}
