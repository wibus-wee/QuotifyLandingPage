import GradualSpacing from "@/components/ui/gradual-spacing"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How does Quotify work?",
    answer: "Quotify intelligently detects input fields in your system. When you need to generate content, simply use the global shortcut to bring up the panel, select the appropriate quote type, and AI will generate content based on the current context. Supports one-click insertion for a smooth writing experience."
  },
  {
    question: "What are the differences between versions?",
    answer: (
      <ul className="list-disc space-y-2 pl-4">
        <li><span className="font-medium">Early Access Stage</span>：All features are available and unlimited uses.</li>
        {/* <li><span className="font-medium">Free</span>：1000 uses per day, supports basic quote types and OpenAI API, up to 10 custom prompts</li>
        <li><span className="font-medium">Professional</span>：$6 one-time payment, unlimited uses, supports more AI services, unlimited custom prompts and quote templates</li>
        <li><span className="font-medium">Cloud</span>：Coming soon, includes all professional features, additional daily 1000 cloud AI service calls, no API configuration required</li> */}
      </ul>
    )
  },
  {
    question: "How to configure API?",
    answer: "In the settings panel, you can easily configure OpenAI API. We provide detailed configuration guides to ensure you can start using it quickly. Future cloud version users can directly use our cloud services without configuring personal API."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support mainstream payment methods. After selecting the version you want, click the purchase button, complete a one-time payment according to the prompts, and the system will automatically activate your lifetime access rights."
  },
  {
    question: "How to get technical support?",
    answer: (
      <ul className="list-disc space-y-2 pl-4">
        <li><span className="font-medium">GitHub Issues</span>：You can submit questions and feature suggestions</li>
      </ul>
    )
  },
  {
    question: "How is data security ensured?",
    answer: "We place a high priority on user data security. All API calls are end-to-end encrypted, and no user input content is stored. All data is processed locally, ensuring your privacy security. The cloud version to be released will use industry-standard encryption schemes to ensure the security of cloud data."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative px-4 py-20 bg-secondary/50">
      <GradualSpacing
        text="FAQ"
        className="mb-12 text-center text-3xl font-bold"
      />

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 