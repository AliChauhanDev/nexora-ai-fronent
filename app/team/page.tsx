import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"
import Link from "next/link"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Scientist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Leading AI researcher with 15+ years of experience in deep learning and neural networks",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Seasoned software architect specializing in scalable AI systems",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Expert in natural language processing and computer vision",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "David Kim",
    role: "ML Operations Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Specialist in deploying and scaling machine learning systems",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
]

export default function TeamPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Meet the brilliant minds behind Nexora Gen AI, bringing together expertise
              in AI, engineering, and research.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="p-6 backdrop-blur-sm bg-background/80">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.github} className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}