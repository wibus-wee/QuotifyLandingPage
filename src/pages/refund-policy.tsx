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
            <h1 className="mb-8 text-3xl font-bold">退款政策</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">1. 退款条件</h2>
                <p>我们提供以下情况的退款服务：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>软件与系统不兼容且无法解决</li>
                  <li>账户重复购买同一版本</li>
                  <li>未经授权的购买行为</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">2. 退款流程</h2>
                <p>申请退款需要遵循以下步骤：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>通过电子邮件提交退款申请</li>
                  <li>提供购买凭证和退款原因</li>
                  <li>等待客服审核（通常 1-3 个工作日）</li>
                  <li>审核通过后，退款将在 7 个工作日内退回原支付方式</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">3. 不予退款情况</h2>
                <p>以下情况将不予退款：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>超过 7 天的购买记录</li>
                  <li>因违反用户协议被终止服务的账户</li>
                  <li>通过非官方渠道购买的产品</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">4. 特殊说明</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>退款后，相关账户的付费功能将被停用</li>
                  <li>促销或折扣购买的退款将按实际支付金额计算</li>
                  <li>批量购买的退款需单独联系客服处理</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">5. 升级与降级</h2>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>升级到更高版本不支持退回差价</li>
                  <li>版本切换不重置退款时限</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">6. 联系方式</h2>
                <p>如需申请退款或了解更多信息，请联系我们：</p>
                <ul className="ml-6 mt-2 list-disc space-y-2">
                  <li>电子邮件：wibus@qq.com</li>
                  <li>GitHub Issues</li>
                  <li>工作时间：周一至周五 9:00-18:00</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
} 