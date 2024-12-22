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
            <h1 className="mb-8 text-3xl font-bold">服务条款</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">1. 服务说明</h2>
                <p>Quotify 是一款基于 AI 的语录生成工具，提供以下服务：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>AI 驱动的语录生成</li>
                  <li>多场景内容创作支持</li>
                  <li>自定义提示词管理</li>
                  <li>API 集成支持</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">2. 用户责任</h2>
                <p>使用本服务时，您同意：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>遵守所有适用的法律法规</li>
                  <li>不滥用或过度使用服务</li>
                  <li>不传播违法或有害内容</li>
                  <li>保护您的账户安全</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">3. 知识产权</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>软件及其内容的所有权利归 Quotify 所有</li>
                  <li>用户生成的内容版权归用户所有</li>
                  <li>禁止未经授权复制或分发软件</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">4. 付款和退款</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>所有价格均以人民币计价</li>
                  <li>购买后 7 天内如有重大问题可申请退款</li>
                  <li>升级版本差价按比例计算</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">5. 服务变更</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>我们保留随时修改服务内容的权利</li>
                  <li>重大变更将提前通知用户</li>
                  <li>用户可以选择接受新条款或终止使用</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">6. 免责声明</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>服务"按现状"提供，不提供任何明示或暗示的保证</li>
                  <li>不对使用结果承担责任</li>
                  <li>不对第三方服务的可用性负责</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">7. 联系方式</h2>
                <p>如有任何问题，请通过以下方式联系我们：</p>
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