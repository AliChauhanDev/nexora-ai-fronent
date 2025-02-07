import { Card } from "@/components/ui/card"
import { Brain, Code, Image, MessageSquare } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"

const models = [
  {
    name: "NexoraGPT",
    description: "Advanced language model for natural conversations and complex text generation",
    icon: MessageSquare,
    features: ["Context understanding", "Multiple languages", "Code generation", "Creative writing"],
    useCase: "Perfect for chatbots, content creation, and language translation"
  },
  {
    name: "NexoraVision",
    description: "State-of-the-art computer vision model for image analysis and generation",
    icon: Image,
    features: ["Object detection", "Image generation", "Scene understanding", "Visual QA"],
    useCase: "Ideal for image processing, medical imaging, and autonomous systems"
  },
  {
    name: "NexoraCode",
    description: "Specialized coding assistant with deep programming knowledge",
    icon: Code,
    features: ["Code completion", "Bug detection", "Refactoring", "Documentation"],
    useCase: "Enhanced developer productivity and code quality"
  },
  {
    name: "NexoraBrain",
    description: "Multi-modal AI system combining language, vision, and reasoning",
    icon: Brain,
    features: ["Cross-modal learning", "Reasoning", "Problem solving", "Knowledge synthesis"],
    useCase: "Complex problem solving and research assistance"
  }
]

export default function ModelsPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI Models
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Discover our suite of advanced AI models, each designed to tackle specific challenges
              and deliver exceptional results across various domains.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((model) => (
              <Card key={model.name} className="p-6 backdrop-blur-sm bg-background/80">
                <div className="flex items-center gap-x-3">
                  <model.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {model.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  {model.useCase}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}