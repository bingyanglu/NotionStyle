import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { translations, Language } from "@/lib/i18n/translations"

interface FAQProps {
  lang: Language
}

const faqs = [
  {
    question: "SiteSnapper 是什么，它是如何工作的?",
    answer: "SiteSnapper 是一款全能的网页归档工具，可以捕获网页截图、提取元数据（标题、描述、图标）并保存完整的文本内容。只需输入网址，根据需要调整设置，即可在几秒钟内获得完整的网页信息。"
  },
  {
    question: "我可以自定义捕获过程吗?",
    answer: "当然可以！您可以自定义捕获的等待时间、点击特定元素、注入自定CSS，并在明暗主题之间切换。这些高级选项可以帮助您精确获取所需内容。"
  },
  {
    question: "可以提取哪些网页内容?",
    answer: "SiteSnapper 可以捕获三种主要类型的内容：视觉内容（高质量截图）、元数据（标题、描述、图标）和文本内容（完整的网页文本）。这确保您能获得网页的全面归档。"
  },
  {
    question: "是否有使用次数限制?",
    answer: "是的，每位用户每天可以使用 50 次捕获功能。这有助于我们维持服务质量并确保所有用户能公平使用。"
  }
]

export function FAQ({ lang }: FAQProps) {
  const t = translations[lang]

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 mb-4">
              {t.faq.title}
            </div>
            <h2 className="text-3xl font-bold mb-2">{t.faq.title}</h2>
            <p className="text-gray-600">{t.faq.subtitle}</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
