import { motion } from "framer-motion"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import ShimmerButton from "@/components/ui/shimmer-button"
import { Check } from "lucide-react"
import { PRICE_IDS } from '@/lib/paddle'

interface PricingSectionProps {
  openCheckout: (priceId: string) => void;
}

interface PricingPlan {
  type: string;
  title: string;
  badge: string;
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  period: string;
  description: string;
  neonColors: {
    firstColor: string;
    secondColor: string;
  };
  features: string[];
  isPopular?: boolean;
  isComingSoon?: boolean;
  priceId?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    type: "free",
    title: "Free",
    badge: "Trial",
    price: "$0",
    period: "LifeTime",
    description: "No credit card required",
    neonColors: {
      firstColor: "#4F46E5",
      secondColor: "#7C3AED"
    },
    features: [
      "1000 uses per day",
      "Tianxing API support",
      "OpenAI API support",
      "Up to 10 custom prompts",
      "Basic community support",
      "Auto updates"
    ]
  },
  {
    type: "pro",
    title: "Professional",
    badge: "Recommended",
    price: "$6",
    originalPrice: "$10",
    discountLabel: "40% OFF",
    period: "LifeTime",
    description: "One-time payment",
    neonColors: {
      firstColor: "#F59E0B",
      secondColor: "#D97706"
    },
    isPopular: true,
    features: [
      "Unlimited uses",
      "All features",
      "More custom AI services",
      "Unlimited custom prompts",
      "Custom quote templates",
      "Priority technical support"
    ],
    priceId: PRICE_IDS.pro
  },
  {
    type: "cloud",
    title: "Cloud",
    badge: "Coming Soon",
    price: "Coming Soon",
    period: "",
    description: "More exciting features coming soon",
    neonColors: {
      firstColor: "#6B7280",
      secondColor: "#9CA3AF"
    },
    isComingSoon: true,
    features: [
      "1000 uses per day of cloud service",
      "All professional features",
      "Built-in curated prompt library",
      "More custom AI services",
      "No API configuration required",
      "Cloud API service",
      "Priority technical support"
    ]
  }
]

export default function PricingSection({ openCheckout }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative px-4 py-20 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 text-center text-3xl font-bold">
          Pricing Plans
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-36 md:grid-cols-3 md:gap-6 lg:gap-12">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.type}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: plan.isComingSoon ? 0 : -10 }}
          >
            <NeonGradientCard
              className={`relative overflow-hidden backdrop-blur-sm bg-background/80 ${
                plan.isPopular ? "scale-105 shadow-xl" : ""
              } ${plan.isComingSoon ? "opacity-75" : ""}`}
              neonColors={plan.neonColors}
            >
              <div 
                className="absolute inset-x-0 top-0 h-1.5" 
                style={{
                  background: `linear-gradient(to right, ${plan.neonColors.firstColor}, ${plan.neonColors.secondColor})`
                }}
              />
              {plan.isPopular && (
                <>
                  <div className="absolute -right-16 -top-16 size-32 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] opacity-20 blur-2xl" />
                  <div className="absolute -left-16 -bottom-16 size-32 bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] opacity-20 blur-2xl" />
                </>
              )}
              <CardHeader>
                <div className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {plan.badge}
                </div>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <div className="space-y-1">
                  <CardDescription className="text-xl font-semibold flex items-center gap-2">
                    {plan.originalPrice ? (
                      <>
                        <span className="text-2xl font-bold text-primary">{plan.price}</span>
                        <span className="text-base line-through text-muted-foreground">{plan.originalPrice}</span>
                        {plan.discountLabel && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                            {plan.discountLabel}
                          </span>
                        )}
                      </>
                    ) : (
                      plan.price
                    )}
                    {plan.period ? `/${plan.period}` : ''}
                  </CardDescription>
                  {!plan.isComingSoon && (
                    <CardDescription className="text-sm text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  )}
                  {plan.isComingSoon && (
                    <CardDescription className="text-sm text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="size-5 rounded-full bg-primary/10 grid place-items-center">
                        <Check className="size-3 text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {!plan.isComingSoon && plan.type !== 'free' && (
                  <div className="mt-6">
                    <ShimmerButton
                      onClick={() => plan.priceId && openCheckout(plan.priceId)}
                      className="w-full"
                      shimmerColor={plan.neonColors.firstColor}
                    >
                      <span className="text-primary">Buy Now</span>
                    </ShimmerButton>
                  </div>
                )}
                
                {plan.type === 'free' && (
                  <div className="mt-6">
                    <ShimmerButton
                      onClick={() => window.open('https://github.com/wibus-studio/Quotify-distribution/releases', '_blank')}
                      className="w-full"
                      shimmerColor={plan.neonColors.firstColor}
                    >
                      <span className="text-primary">Download Now</span>
                    </ShimmerButton>
                  </div>
                )}
              </CardContent>
            </NeonGradientCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 