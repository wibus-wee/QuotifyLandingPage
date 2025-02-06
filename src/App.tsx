import Layout from "@/components/layout"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"
import FAQSection from "@/components/sections/FAQSection"
import UseCasesSection from "@/components/sections/UseCasesSection"
import { usePaddle } from './lib/paddle'

export default function App() {
  const { openCheckout } = usePaddle();
  
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection openCheckout={openCheckout} />
      <FAQSection />
    </Layout>
  )
}
