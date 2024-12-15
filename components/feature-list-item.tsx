import { type LucideIcon } from 'lucide-react'

interface FeatureListItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureListItem({ icon: Icon, title, description }: FeatureListItemProps) {
  return (
    <div className="group relative flex items-start gap-4 rounded-lg bg-teal-50/50 p-4 hover:bg-teal-50 transition-colors">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 mt-1">
        <Icon className="h-5 w-5" />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-teal-900 mb-1">{title}</h3>
        <p className="text-sm text-teal-700/80">
          {description}
        </p>
      </div>
    </div>
  )
}

