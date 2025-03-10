import { motion } from "framer-motion"
import SparklesText from "@/components/ui/sparkles-text"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import ShimmerButton from "@/components/ui/shimmer-button"

export default function HeroSection() {
  return (
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
            <ShimmerButton
              onClick={() => {
                window.open(
                  "https://github.com/wibus-studio/Quotify-distribution/releases",
                  "_blank"
                )
              }}
            >
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
  )
} 