import { motion } from "framer-motion"
import RetroGrid from "@/components/ui/retro-grid"
import Particles from "@/components/ui/particles"
import Layout from "@/components/layout"

export default function TermsOfService() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-background">
        {/* Background Effects */}
        <RetroGrid className="absolute inset-0" />
        <Particles
          quantity={100}
          className="absolute inset-0"
        />

        <div className="relative mx-auto max-w-4xl px-4 py-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-background/80 p-8 backdrop-blur-sm"
          >
            <h1 className="mb-12 text-center text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                1. Introduction
              </h2>
              <p>
                Welcome to Quotify! These Terms of Use ("Terms") govern your use of our website and services. By accessing or using Quotify, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not use our services.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                2. Use of Services
              </h2>
              <p>
                You agree to use Quotify's services only for lawful purposes and in accordance with these Terms. You are responsible for all activities conducted through your account. You agree not to engage in any activity that interferes with or disrupts the services or the servers and networks connected to the services.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                3. User Responsibility
              </h2>
              <p>
                As a user, you are responsible for the lawful and reasonable use of the Quotify application. Any consequences resulting from improper use or violation of relevant laws and regulations will be borne by the user.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                4. Changes to Terms
              </h2>
              <p>
                Quotify reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on our website. Your continued use of the services after the posting of changes constitutes your acceptance of such changes. If you do not agree with the changes, please stop using our services.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Quotify shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from your use or inability to use the services.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:wibus@qq.com" className="text-primary hover:underline">
                  wibus@qq.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 