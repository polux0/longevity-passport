import { Button } from "@/components/ui/button"
import { ArrowUpRight, Users, GitPullRequest, Award } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  type: "unite" | "contribute" | "recognition"
}

export function FeatureCard({ title, description, type }: FeatureCardProps) {
  const icons = {
    unite: Users,
    contribute: GitPullRequest,
    recognition: Award
  }

  const Icon = icons[type]

  return (
    <div className="relative overflow-hidden rounded-xl bg-teal-50 p-6 min-h-[280px] group">
      {/* Background Icon */}
      <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-5">
        <Icon className="w-64 h-64" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Button 
          variant="ghost" 
          className="absolute top-4 right-4 rounded-full hover:bg-white/20 group-hover:translate-x-1 transition-transform"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Button>
        
        <div className="mt-auto pt-24">
          <h3 className="text-teal-800 text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-teal-700">{description}</p>
        </div>
      </div>
    </div>
  )
}

