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
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function App() {
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
            <div className="hidden items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary md:flex">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.539 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              macOS Native
            </div>
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
              content: "基于 OpenAI 的强大模型，结合设计提示词，生成高质量的语录内容",
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

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:gap-8 lg:gap-12">
          {[
            {
              type: "free",
              title: "免费版",
              badge: "体验版",
              price: "¥0",
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
              badge: "入门首选",
              price: "¥49",
              period: "永久",
              description: "一次付费，终身使用",
              neonColors: {
                firstColor: "#F59E0B",
                secondColor: "#D97706"
              },
              features: [
                "每天 1000 次使用次数",
                "所有免费版功能",
                "OpenAI API 支持",
                "最多添加 100 个自定义提示词",
                "社区技术支持",
                "终身免费更新"
              ]
            },
            {
              type: "pro",
              title: "专业版",
              badge: "推荐",
              price: "¥89",
              period: "永久",
              description: "一次付费，终身使用",
              neonColors: {
                firstColor: "#7C3AED",
                secondColor: "#EC4899"
              },
              isPopular: true,
              features: [
                "每天无限次使用",
                "所有基础版功能",
                "更多自定义 AI 服务支持",
                "无限制自定义提示词",
                "自定义语录模板",
                "优先技术支持",
                "终身免费更新"
              ]
            },
            {
              type: "cloud",
              title: "云端版",
              badge: "即将推出",
              price: "敬请期待",
              period: "",
              description: "更多精彩功能即将到来",
              neonColors: {
                firstColor: "#6B7280",
                secondColor: "#9CA3AF"
              },
              isComingSoon: true,
              features: [
                "每天 1000 次调用云端服务",
                "所有专业版功能",
                "内置精选提示词库",
                "更多自定义 AI 服务支持",
                "无需配置 API",
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
              whileHover={{ y: plan.isComingSoon ? 0 : -10 }}
            >
              <NeonGradientCard
                className={`relative overflow-hidden backdrop-blur-sm bg-background/80 ${
                  plan.isPopular ? "scale-105 shadow-xl" : ""
                } ${plan.isComingSoon ? "opacity-75" : ""}`}
                neonColors={plan.neonColors}
              >
                <div 
                  className="absolute inset-x-0 top-0 h-1.5" 
                  style={{
                    background: `linear-gradient(to right, ${plan.neonColors.firstColor}, ${plan.neonColors.secondColor})`
                  }}
                />
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
                      {plan.price}{plan.period ? `/${plan.period}` : ''}
                    </CardDescription>
                    {!plan.isComingSoon && (
                      <CardDescription className="text-sm text-muted-foreground">
                        {plan.description}
                      </CardDescription>
                    )}
                    {plan.isComingSoon && (
                      <CardDescription className="text-sm text-muted-foreground">
                        {plan.description}
                      </CardDescription>
                    )}
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
      {/* <section className="relative px-4 py-20">
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
              role: "自媒体���作者",
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
      </section> */}

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
                  <li><span className="font-medium">基础版</span>：¥49 买断，每天 1000 次使用额度，支持所有免费版功能，可添加 100 个自��义提示词，终身免费更新</li>
                  <li><span className="font-medium">专业版</span>：¥89 买断，无限使用次数，支持更多 AI 服务，无限制自定义提示词和语录模板，终身免费更新</li>
                  <li><span className="font-medium">云端版</span>：即将推出，包含专业版所有功能，额外提供每天 1000 次云端 AI 服务调用，无需配置 API</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>如何配置 API？</AccordionTrigger>
              <AccordionContent>
                在设置面板中，你可以轻松配�� OpenAI API。我们提供详细的配置指南，确保你能快速开始使用。
                未来推出的云端版用户可以直接使用我们提供的云端服务，无需配置个人 API。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>支持哪些支付方式？</AccordionTrigger>
              <AccordionContent>
                我们支持支付宝、微信支付等主流支付方式。选择你想要的版本后，点击购买按钮，
                根据提示完成一次性付款即可。系统会自动为你开通终身使用权限，立即可用。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>如何获取技术支持？</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4">
                  <li><span className="font-medium">文档中心</span>：提供详细的使用指南和常见问题解答</li>
                  <li><span className="font-medium">GitHub Issues</span>：可以提交问题和功能建议</li>
                  <li><span className="font-medium">社区支持</span>：加入我们的用户社区，分享使用经验</li>
                  <li><span className="font-medium">专属支持</span>：付费用户享有优先响应服务</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>数据安全如何保障？</AccordionTrigger>
              <AccordionContent>
                我们高度重视用户数据安全。所有的 API 调用都是端到端加密的，不会存储任何用户的输入内容。
                所有数据都在本地处理，确保你的隐私安全。未来推出的云端版本将采用行业标准的加密方案，
                确保云端数据的安全性。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/icon.png"
                  alt="Quotify Logo"
                  className="size-8"
                />
                <span className="text-xl font-bold">Quotify</span>
              </div>
              <p className="text-sm text-muted-foreground">
                妙笔生花，一键成章
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">快速链接</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary">功能介绍</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-primary">定价方案</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary">常见问题</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">资源</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {/* <li>
                  <a href="#" className="hover:text-primary">使用文档</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">更新日志</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">GitHub</a>
                </li> */}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">联系我们</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {/* <li>
                  <a href="#" className="hover:text-primary">反馈建议</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">加入社区</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">商务合作</a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Quotify. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary">隐私政策</a>
                <a href="#" className="hover:text-primary">服务条款</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
