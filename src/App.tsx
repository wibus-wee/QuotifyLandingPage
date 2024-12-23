import SparklesText from "@/components/ui/sparkles-text"
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
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Layout from "@/components/layout"

export default function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left lg:ml-16">
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
              <AnimatedShinyText className="text-xl">
                ✨ Craft Perfect Quotes Instantly
              </AnimatedShinyText>
            </motion.div>

            <motion.div 
              className="mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <ShimmerButton>
                <span className="text-primary">
                  Download Now
                </span>
              </ShimmerButton>
            </motion.div>

            {/* Features Preview */}
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { icon: "✨", text: "AI-Powered" },
                { icon: "🎯", text: "Versatile" },
                { icon: "⚡", text: "Fast & Easy" },
                { icon: "🔒", text: "Secure" },
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

          {/* Right product screenshots */}
          <motion.div 
            className="flex-1"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="relative flex flex-col items-center">
              <motion.img 
                src="/screenshot-setting.png" 
                alt="Quotify Screenshot" 
                className="w-[400px] shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.img 
                src="/screenshot-item.png" 
                alt="Quotify Screenshot" 
                className="w-[1000px] shadow-2xl"
                style={{
                  marginTop: '-40px'
                }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
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
            text="Key Features"
            className="mb-12 text-center text-3xl font-bold"
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "AI-Powered",
              description: "Intelligent Quote Generation",
              content: "Powered by OpenAI's robust models, combined with crafted prompts to generate high-quality quotes",
              gradient: "from-purple-500/10"
            },
            {
              title: "Versatile",
              description: "Diverse Quote Types",
              content: "From social media to creative writing, covering various scenarios to make your expression more vivid",
              gradient: "from-pink-500/10"
            },
            {
              title: "Easy Integration",
              description: "Seamless Input Experience",
              content: "Smart input field detection, one-click generation and insertion, with global shortcut support",
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
            text="Pricing Plans"
            className="mb-12 text-center text-3xl font-bold"
          />
        </motion.div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:gap-8 lg:gap-12">
          {[
            {
              type: "free",
              title: "Free",
              badge: "Trial",
              price: "$0",
              period: "Forever",
              description: "No credit card required",
              neonColors: {
                firstColor: "#4F46E5",
                secondColor: "#7C3AED"
              },
              features: [
                "100 uses per day",
                "Tianxing API support",
                "OpenAI API support",
                "Up to 10 custom prompts",
                "Basic community support",
                "Auto updates"
              ]
            },
            {
              type: "basic",
              title: "Basic",
              badge: "Popular",
              price: "$7",
              period: "Lifetime",
              description: "One-time payment",
              neonColors: {
                firstColor: "#F59E0B",
                secondColor: "#D97706"
              },
              features: [
                "1000 uses per day",
                "All free features",
                "OpenAI API support",
                "Up to 100 custom prompts",
                "Community support",
                "1 year free updates"
              ]
            },
            {
              type: "pro",
              title: "Professional",
              badge: "Recommended",
              price: "$12",
              period: "Forever",
              description: "One-time payment",
              neonColors: {
                firstColor: "#7C3AED",
                secondColor: "#EC4899"
              },
              isPopular: true,
              features: [
                "Unlimited uses",
                "All basic features",
                "More custom AI services",
                "Unlimited custom prompts",
                "Custom quote templates",
                "Priority technical support",
                "1 year free updates"
              ]
            },
            {
              type: "cloud",
              title: "Cloud",
              badge: "Coming Soon",
              price: "Coming Soon",
              period: "",
              description: "More exciting features coming soon",
              neonColors: {
                firstColor: "#6B7280",
                secondColor: "#9CA3AF"
              },
              isComingSoon: true,
              features: [
                "1000 uses per day of cloud service",
                "All professional features",
                "Built-in curated prompt library",
                "More custom AI services",
                "No API configuration required",
                "Cloud API service",
                "Priority technical support"
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

      {/* FAQ Section */}
      <section id="faq" className="relative px-4 py-20 bg-secondary/50">
        <GradualSpacing
          text="FAQ"
          className="mb-12 text-center text-3xl font-bold"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Quotify work?</AccordionTrigger>
              <AccordionContent>
                Quotify intelligently detects input fields in your system. When you need to generate content,
                simply use the global shortcut to bring up the panel, select the appropriate quote type,
                and AI will generate content based on the current context. Supports one-click insertion
                for a smooth writing experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What are the differences between versions?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4">
                  <li><span className="font-medium">Free</span>：100 uses per day, supports basic quote types and OpenAI API, up to 10 custom prompts</li>
                  <li><span className="font-medium">Basic</span>：$7 one-time payment, 1000 uses per day, supports all free features, up to 100 custom prompts, free updates for 1 year</li>
                  <li><span className="font-medium">Professional</span>：$12 one-time payment, unlimited uses, supports more AI services, unlimited custom prompts and quote templates, free updates for 1 year</li>
                  <li><span className="font-medium">Cloud</span>：Coming soon, includes all professional features, additional daily 1000 cloud AI service calls, no API configuration required</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How to configure API?</AccordionTrigger>
              <AccordionContent>
                In the settings panel, you can easily configure OpenAI API. We provide detailed configuration guides to ensure you can start using it quickly.
                Future cloud version users can directly use our cloud services without configuring personal API.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What payment methods are supported?</AccordionTrigger>
              <AccordionContent>
                We support mainstream payment methods. After selecting the version you want, click the purchase button,
                complete a one-time payment according to the prompts, and the system will automatically activate your lifetime access rights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How to get technical support?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-4">
                  <li><span className="font-medium">Documentation Center</span>：Provides detailed usage guides and common problem solutions</li>
                  <li><span className="font-medium">GitHub Issues</span>：You can submit questions and feature suggestions</li>
                  <li><span className="font-medium">Community Support</span>：Join our user community to share usage experiences</li>
                  <li><span className="font-medium">Exclusive Support</span>：Paid users enjoy priority response services</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How is data security ensured?</AccordionTrigger>
              <AccordionContent>
                We place a high priority on user data security. All API calls are end-to-end encrypted, and no user input content is stored.
                All data is processed locally, ensuring your privacy security. The cloud version to be released will use industry-standard encryption schemes
                to ensure the security of cloud data.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Layout>
  )
}
