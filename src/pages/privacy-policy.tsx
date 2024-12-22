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
            <h1 className="mb-8 text-3xl font-bold">隐私政策</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">1. 信息收集</h2>
                <p>我们仅收集运行应用程序所必需的信息。这包括：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>基本使用数据（如使用频率、功能使用情况等）</li>
                  <li>崩溃报告和性能数据</li>
                  <li>您主动提供的反馈信息</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">2. 数据使用</h2>
                <p>我们使用收集的信息来：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>改进和优化应用程序性能</li>
                  <li>开发新功能</li>
                  <li>提供客户支持</li>
                  <li>发送重要通知</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">3. 数据保护</h2>
                <p>我们采取以下措施保护您的数据：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>所有数据传输采用加密方式</li>
                  <li>定期安全审查和更新</li>
                  <li>严格的内部数据访问控制</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">4. 第三方服务</h2>
                <p>我们使用的第三方服务包括：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>OpenAI API - 用于生成内容</li>
                  <li>支付服务提供商 - 用于处理付款</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">5. 您的权利</h2>
                <p>作为用户，您有权：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>访问您的个人数据</li>
                  <li>要求更正不准确的数据</li>
                  <li>要求删除您的数据</li>
                  <li>反对数据处理</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">6. 联系我们</h2>
                <p>如果您对我们的隐私政策有任何疑问，请通过以下方式联系我们：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>电子邮件：wibus@qq.com</li>
                  <li>GitHub Issues</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 