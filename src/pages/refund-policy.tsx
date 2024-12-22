import { motion } from "framer-motion"
import RetroGrid from "@/components/ui/retro-grid"
import Particles from "@/components/ui/particles"
import Layout from "@/components/layout"

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                1. Introduction
              </h2>
              <p>
                At Quotify, we strive to ensure our customers are satisfied with their purchases. If you are not entirely satisfied with your purchase, we're here to help.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                2. Refund Eligibility
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>To be eligible for a refund, you must request it within 30 days of your purchase.</li>
                <li>Quotify is a digital download software, please ensure you have fully utilized the trial version before requesting a refund.</li>
                <li>Proof of purchase is required.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                3. Refund Process
              </h2>
              <p>
                To request a refund, please contact our customer support team at{' '}
                <a href="mailto:wibus@qq.com" className="text-primary hover:underline">
                wibus@qq.com
                </a>
                {' '}with your order details. Once your refund request is received and reviewed, we will notify you of the status of your refund.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                4. Approved Refunds
              </h2>
              <p>
                If your refund is approved, we will initiate a credit to your original method of payment. The timing of the refund will depend on your card issuer's policies.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                5. Non-Refundable Items
              </h2>
              <p>Please note, we cannot provide refunds for:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Any purchase requests made after 30 days</li>
                <li>As Quotify is a digital download product, once the activation code has been used, we cannot provide a refund</li>
              </ul>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about our Refund Policy, please contact us at{' '}
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