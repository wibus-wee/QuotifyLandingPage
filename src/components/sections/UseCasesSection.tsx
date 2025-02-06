import { motion } from "framer-motion"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import RetroGrid from "@/components/ui/retro-grid"

interface UseCase {
  title: string;
  description: string;
  icon: string;
  className: string;
  cta: string;
  quotes: {
    text: string;
    author?: string;
    source?: string;
    style?: string;
  }[];
}

const useCases: UseCase[] = [
  {
    title: "Social Media Creation",
    description: "Wherever you are, Quotify helps you generate eye-catching quotes.",
    icon: "📱",
    className: "md:col-span-2",
    cta: "Learn More",
    quotes: [
      {
        text: "生活不是等待暴风雨过去，而是学会在雨中翩翩起舞。",
        style: "励志"
      },
      {
        text: "追求卓越吧，因为即使你成功了，也只是在别人看来毫不起眼的平庸。",
        style: "毒鸡汤"
      }
    ]
  },
  {
    title: "Custom Assistant",
    description: "Create your own AI assistant with custom prompts, tailored to your needs.",
    icon: "🎯",
    className: "md:col-span-1", 
    cta: "Explore Custom Features",
    quotes: [
      {
        text: "通过精心设计的提示词模板，让AI成为你的得力助手。无论是写作风格、专业术语还是特定场景,都能按照你的需求定制。",
        style: "功能介绍"
      }
    ]
  },
  {
    title: "Creative Writing",
    description: "Provide suitable quotes for novels, essays, and poetry. AI understands context and generates quotes that fit the style of the work.",
    icon: "✍️",
    className: "md:col-span-1",
    cta: "Discover Creative Writing Features",
    quotes: [
      {
        text: "月光如水，倾泻在古老的街巷，仿佛时光停驻在某个永恒的瞬间。",
        style: "诗意描写"
      }
    ]
  },
  {
    title: "Entertainment",
    description: "Provide fun quotes for your daily social chats.",
    icon: "🎮",
    className: "md:col-span-2", 
    cta: "Explore Entertainment Features",
    quotes: [
      {
        text: "LMFAO, can you even spell 'win'?",
        style: "游戏高手"
      },
      {
        text: "我坐在窗边一直等了很多天终于忍不住问为什么从来不回我消息你秒回”也不想想你算什么东西”看到”想你”,我一下子就哭了原来你心里是有我的。",
        style: "舔狗语录"
      },
    ]
  }
]

const IconComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
      {children}
    </div>
  )
}

const QuoteDisplay = ({ quotes }: { quotes: UseCase['quotes'] }) => {
  return (
    <div className="absolute flex flex-col justify-center space-y-4 p-6">
      {quotes.map((quote, index) => (
        <div 
          key={index} 
          className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-white/5"
        >
          <p className="text-base font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">"{quote.text}"</p>
          {(quote.author || quote.source) && (
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {quote.author && <span className="font-medium">{quote.author}</span>}
              {quote.source && <span className="ml-1">- {quote.source}</span>}
            </p>
          )}
          {quote.style && (
            <div className="mt-2">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {quote.style}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative px-4 py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">
          Use Cases
        </h2>
        <p className="text-muted-foreground">
          Whether it's social media, custom assistants, creative writing, or entertainment, Quotify can help you.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <BentoGrid className="auto-rows-[24rem]">
          {useCases.map((useCase) => (
            <BentoCard
              key={useCase.title}
              name={useCase.title}
              description={useCase.description}
              className={useCase.className}
              Icon={() => (
                <IconComponent>
                  {useCase.icon}
                </IconComponent>
              )}
              background={
                <div className="relative size-full">
                  <RetroGrid className="opacity-10" />
                  <QuoteDisplay quotes={useCase.quotes} />
                </div>
              }
              href="#"
              cta={useCase.cta}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  )
} 