import Layout from "@/components/layout"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"
import FAQSection from "@/components/sections/FAQSection"
import UseCasesSection from "@/components/sections/UseCasesSection"
import { usePaddle } from './lib/paddle'
import { useEffect } from "react"

export default function App() {
  
  useEffect(() => {
    if (import.meta.env.PROD) {
      const script = document.createElement('script');
      script.src = 'https://mamiu.wibus.ren/script.js';
      script.setAttribute('data-website-id', '34924254-664e-4c6b-a3fa-12fa4dd6942b');
      document.head.appendChild(script);
    }
  }, [])

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
