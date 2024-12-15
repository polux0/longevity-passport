import { UserCircle, Shield, Users, Award } from 'lucide-react'
import { FeatureListItem } from './feature-list-item'

const features = [
  {
    icon: UserCircle,
    title: "Personalizing Profiles",
    description: "Create a dynamic profile that showcases your expertise, achievements, and contributions in the longevity space. Use your profile as a central hub to share your work, connect with the global network, and enhance your visibility in the field.",
  },
  {
    icon: Shield,
    title: "Secure Data Management and Sharing",
    description: "Protect your information with advanced privacy and security protocols. Seamlessly share verified contributions and credentials while maintaining full control over your personal data.",
  },
  {
    icon: Users,
    title: "Access to Collaboration Opportunities",
    description: "Engage with experts, innovators, and collaborators across the longevity ecosystem. Build partnerships, join groundbreaking initiatives, and contribute to advancements in healthspan and life extension.",
  },
  {
    icon: Award,
    title: "Highlighting Top Contributors and Communities",
    description: "Celebrate excellence by featuring top contributors and leading communities. Inspire innovation and foster collaboration by showcasing impactful work and driving recognition for outstanding achievements.",
  },
]

export function FeaturesList() {
  return (
    <div className="space-y-4 w-full">
      {features.map((feature) => (
        <FeatureListItem
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}

