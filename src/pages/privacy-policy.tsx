import { motion } from "framer-motion"
import RetroGrid from "@/components/ui/retro-grid"
import Particles from "@/components/ui/particles"
import Layout from "@/components/layout"

export default function PrivacyPolicy() {
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
            <h1 className="mb-12 text-center text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text ">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p>
                Thank you for choosing to use our app. We highly value the privacy of our users and are committed to protecting your personal information. This Privacy Policy provides detailed information on how we collect, use, store, and protect your personal information. Before using our App, please read and ensure that you fully understand and agree to the contents of this Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text ">
                Information Collection and Use
              </h2>
              <p>
                Our app only accesses your local image files to provide image compression and optimization services. We explicitly state and guarantee that we do not collect, read, or transmit any of your personal information, user information, or application usage data.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text ">
                Information Storage
              </h2>
              <p>
                Our app reads local image files on your device, and all image processing and optimization operations are carried out locally without uploading any data to servers or cloud storage. Your image files will not be retained on our servers, and we do not store your image files anywhere.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text ">
                Third-Party Services
              </h2>
              <p>
                Our app does not use any third-party services, including advertising services, analytics tools, or social media plugins. We assure you that your data will not be shared with any third parties.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text ">
                Updates to the Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in the App's features or changes in laws and regulations. The updated Privacy Policy will take effect within our App and will be published on this page along with the update date.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 bg-clip-text ">
                Contact Us
              </h2>
              <p>
                If you have any questions or comments about this Privacy Policy, or if you need to access, correct, update, or delete your personal information, please contact us at{' '}
                <a href="mailto:your-email@example.com" className="text-primary hover:underline">
                  your-email@example.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 