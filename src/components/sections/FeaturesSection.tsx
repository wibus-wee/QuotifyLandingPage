import { motion } from "framer-motion"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"

interface Feature {
  title: string;
  description: string;
  content: string;
  gradient: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "AI-Powered",
    description: "Intelligent Quote Generation",
    content: "Powered by OpenAI's robust models, combined with crafted prompts to generate high-quality quotes",
    gradient: "from-purple-500/10",
    icon: "✨"
  },
  {
    title: "Versatile",
    description: "Diverse Quote Types",
    content: "From social media to creative writing, covering various scenarios to make your expression more vivid",
    gradient: "from-pink-500/10",
    icon: "🎯"
  },
  {
    title: "Easy Integration",
    description: "Seamless Input Experience",
    content: "Smart input field detection, one-click generation and insertion, with global shortcut support",
    gradient: "from-blue-500/10",
    icon: "⚡"
  },
  {
    title: "Customizable",
    description: "Prompt Editor",
    content: "Create and manage your own prompt templates with our intuitive editor, fine-tune AI responses to match your unique style and needs",
    gradient: "from-green-500/10",
    icon: "🎨"
  },
  {
    title: "Universal Compatibility",
    description: "Multi-Solution Architecture",
    content: "Built-in triple-layer architecture ensures uninterrupted service across different software environments and system constraints",
    gradient: "from-orange-500/10",
    icon: "🔄"
  },
  {
    title: "Smart Parameterization",
    description: "Dynamic Template Engine", 
    content: "Template system supports intelligent context awareness, seamlessly integrates selected text and user input.",
    gradient: "from-indigo-500/10",
    icon: "⚙️"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 text-center text-3xl font-bold">
          Key Features
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <MagicCard
              className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              gradientSize={400}
            >
              <CardHeader className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent opacity-50 blur-2xl`} />
                <p className="relative text-sm leading-relaxed">
                  {feature.content}
                </p>
              </CardContent>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 