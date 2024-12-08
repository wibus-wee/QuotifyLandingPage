import SparklesText from "@/components/ui/sparkles-text"
import RetroGrid from "@/components/ui/retro-grid"
import Particles from "@/components/ui/particles"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import GradualSpacing from "@/components/ui/gradual-spacing"
import ShimmerButton from "@/components/ui/shimmer-button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MagicCard } from "@/components/ui/magic-card"
import Marquee from "@/components/ui/marquee"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Check } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"

export default function App() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/icon.png"
                alt="Quotify Logo"
                className="size-8"
              />
              <span className="text-xl font-bold">Quotify</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden gap-6 md:flex">
                {[
                  { href: "#features", label: "功能" },
                  { href: "#pricing", label: "价格" },
                  { href: "#faq", label: "常见问题" }
                ].map(item => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <ShimmerButton>
              <span className="text-primary">立即下载</span>
            </ShimmerButton>
          </div>
        </div>
      </header>

      {/* Background Effects */}
      <RetroGrid className="absolute inset-0" />
      <Particles
        quantity={200}
        className="absolute inset-0"
      />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div 
            className="mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/icon.png"
              alt="Quotify Icon"
              className="size-32 drop-shadow-2xl"
            />
          </motion.div>

          <SparklesText
            text="Quotify"
            sparklesCount={5}
            className="mb-4 text-6xl font-bold tracking-tight"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <AnimatedShinyText className="text-xl mx-2">
              ✨ 妙笔生花，一键成章
            </AnimatedShinyText>
          </motion.div>
          {/* 
          <p className="text-muted-foreground mx-2 mt-4 max-w-2xl">
          Your instant writing inspiration
          </p> */}

          <motion.div 
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ShimmerButton>
              <span className="text-primary">
                立即下载
              </span>
            </ShimmerButton>
          </motion.div>

          {/* 特性预览 */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { icon: "✨", text: "智能生成" },
              { icon: "🎯", text: "场景丰富" },
              { icon: "⚡", text: "快捷方便" },
              { icon: "🔒", text: "安全可靠" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradualSpacing
            text="主要功能"
            className="mb-12 text-center text-3xl font-bold"
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "AI 驱动",
              description: "智能语录生成系统",
              content: "基于 OpenAI 的强大模型，结合精心设计的提示词，生成高质量的语录内容",
              gradient: "from-purple-500/10"
            },
            {
              title: "场景丰富",
              description: "多样化的语录类型",
              content: "从日常社交到创意写作，覆盖多种场景需求，让你的表达更加生动有趣",
              gradient: "from-pink-500/10"
            },
            {
              title: "便捷集成",
              description: "无缝输入体验",
              content: "智能识别系统输入框，一键生成并插入内容，支持全局快捷键操作",
              gradient: "from-blue-500/10"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <MagicCard
                className="relative overflow-hidden"
                gradientSize={400}
              >
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent opacity-50 blur-xl`} />
                  <p className="relative">
                    {feature.content}
                  </p>
                </CardContent>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative px-4 py-20 bg-gradient-to-b from-background to-secondary/20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradualSpacing
            text="定价方案"
            className="mb-12 text-center text-3xl font-bold"
          />
        </motion.div>

        <div className="mb-8 flex items-center justify-center gap-4">
          <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>月付</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>年付</span>
            <span className="animate-pulse rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              省 20%
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:gap-8 lg:gap-12">
          {[
            {
              type: "free",
              title: "免费版",
              badge: "体验版",
              price: "0",
              period: "永久",
              description: "无需信用卡，立即开始使用",
              neonColors: {
                firstColor: "#4F46E5",
                secondColor: "#7C3AED"
              },
              features: [
                "每天 100 次使用次数",
                "天行 API 支持",
                "OpenAI API 支持",
                "最多添加 10 个自定义提示词",
                "基础社区支持",
                "自动更新"
              ]
            },
            {
              type: "basic",
              title: "基础版",
              badge: "基础版",
              price: isAnnual ? "45.6" : "4",
              period: isAnnual ? "年" : "月",
              monthlyPrice: isAnnual ? "3.8" : null,
              description: isAnnual ? "省 20%" : "灵活计费，随时取消",
              neonColors: {
                firstColor: "#F59E0B",
                secondColor: "#D97706"
              },
              features: [
                "每天 500 次使用次数",
                "所有免费版功能",
                "OpenAI API 支持",
                "最多添加 20 个自定义提示词",
                "社区技术支持"
              ]
            },
            {
              type: "pro",
              title: "专业版",
              badge: "推荐",
              price: isAnnual ? "91.2" : "8",
              period: isAnnual ? "年" : "月",
              monthlyPrice: isAnnual ? "7.6" : null,
              description: isAnnual ? "省 20%" : "灵活计费，随时取消",
              neonColors: {
                firstColor: "#7C3AED",
                secondColor: "#EC4899"
              },
              isPopular: true,
              features: [
                "每天无限次使用",
                "所有免费版功能",
                "更多自定义 AI 服务支持",
                "无限制自定义提示词",
                "自定义语录模板",
                "优先技术支持"
              ]
            },
            {
              type: "cloud",
              title: "云端版",
              badge: "无限制",
              price: isAnnual ? "129.6" : "12",
              period: isAnnual ? "年" : "月",
              monthlyPrice: isAnnual ? "10.8" : null,
              description: isAnnual ? "省 20%" : "灵活计费，随时取消",
              neonColors: {
                firstColor: "#059669",
                secondColor: "#0EA5E9"
              },
              features: [
                "每天 500 次调用云端服务",
                "所有专业版功能",
                "内置精选提示词库",
                "更多自定义 AI 服务支持",
                "云端 API 服务",
                "优先技术支持"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <NeonGradientCard
                className={`relative overflow-hidden backdrop-blur-sm bg-background/80 ${
                  plan.isPopular ? "scale-105 shadow-xl" : ""
                }`}
                neonColors={plan.neonColors}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[${plan.neonColors.firstColor}] to-[${plan.neonColors.secondColor}]`} />
                {plan.isPopular && (
                  <>
                    <div className="absolute -right-16 -top-16 size-32 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] opacity-20 blur-2xl" />
                    <div className="absolute -left-16 -bottom-16 size-32 bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] opacity-20 blur-2xl" />
                  </>
                )}
                <CardHeader>
                  <div className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {plan.badge}
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="space-y-1">
                    <CardDescription className="text-xl font-semibold">
                      ${plan.price}/{plan.period}
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground">
                      {plan.monthlyPrice ? (
                        <span>
                          相当于 <span className="font-semibold text-primary">${plan.monthlyPrice}/月</span>
                          <span className="ml-1 inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            {plan.description}
                          </span>
                        </span>
                      ) : (
                        plan.description
                      )}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-primary/10 grid place-items-center">
                          <Check className="size-3 text-primary" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </NeonGradientCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-4 py-20">
        <GradualSpacing
          text="用户评价"
          className="mb-12 text-center text-3xl font-bold"
        />

        <Marquee
          className="py-12"
          pauseOnHover
          speed={20}
        >
          {[
            {
              name: "张三",
              role: "自媒体创作者",
              content: "Quotify 让我的创作过程变得更加有趣，再也不用为找梗发愁了！",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" // 使用 DiceBear 生成头像
            },
            {
              name: "李四",
              role: "社区运营",
              content: "AI 生成的内容非常智能，完全符合我的需求，强烈推荐！",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
            },
            {
              name: "王五",
              role: "学生",
              content: "界面简洁，使用方便，生成的内容也很有趣，很喜欢！",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bailey"
            },
            {
              name: "赵六",
              role: "内容创作者",
              content: "一键生成各种风格的文案，提高了我的工作效率！",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
            }
          ].map((testimonial, i) => (
            <MagicCard
              key={i}
              className="mx-4 w-[350px] shrink-0"
              gradientSize={300}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-12 rounded-full bg-secondary"
                />
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {testimonial.content}
              </CardContent>
            </MagicCard>
          ))}
        </Marquee>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative px-4 py-20 bg-secondary/50">
        <GradualSpacing
          text="常见问题"
          className="mb-12 text-center text-3xl font-bold"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quotify 是如何工作的？</AccordionTrigger>
              <AccordionContent>
                Quotify 会智能识别系统中的输入框，当你需要生成内容时，只需使用全局快捷键呼出面板，
                选择合适的语录类型，AI 就会根据当前场景智能生成内容。支持一键插入，让写作过程更加流畅自然。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>各个版本有什么区别？</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4">
                  <li><span className="font-medium">免费版</span>：每天 100 次使用额度，支持基础语录类型和 OpenAI API，可添加 10 个自定义提示词</li>
                  <li><span className="font-medium">基础版</span>：每天 500 次使用额度，支持所有免费版功能，可添加 20 个自定义提示词</li>
                  <li><span className="font-medium">专业版</span>：无限使用次数，支持更多 AI 服务，无限制自定义提示词和语录模板</li>
                  <li><span className="font-medium">云端版</span>：包含专业版所有功能，额外提供每天 500 次云端 AI 服务调用，内置精选提示词库</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>如何配置 API？</AccordionTrigger>
              <AccordionContent>
                在设置面板中，你可以轻松配置 OpenAI API。云端版用户可以直接使用我们提供的云端服务，
                无需配置个人 API。我们提供详细的配置指南，确保你能快速开始使用。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>支持哪些支付方式？</AccordionTrigger>
              <AccordionContent>
                我们支持支付宝、微信支付等主流支付方式。选择你想要的版本后，点击购买按钮，
                根据提示完成支付即可。系统会自动为你开通相应功能，立即可用。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>如何获取技术支持？</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4">
                  <li><span className="font-medium">文档中心</span>：提供详细的使用指南和常见问题解答</li>
                  <li><span className="font-medium">GitHub Issues</span>：可以提交问题和功能建议</li>
                  <li><span className="font-medium">社区支持</span>：加入我们的用户社区，分享使用经验</li>
                  <li><span className="font-medium">专属支持</span>：云端版用户享有 24 小时优先响应服务</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>数据安全如何保障？</AccordionTrigger>
              <AccordionContent>
                我们高度重视用户数据安全。所有的 API 调用都是端到端加密的，不会存储任何用户的输入内容。
                云端版用户的数据存储在安全的云服务器上，采用行业标准的加密方案。你可以随时导出或删除你的数据。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
