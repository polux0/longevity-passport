import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

interface CommunityCardProps {
  title: string;
  description: string;
  image: string; // Add the image property
}

// export function CommunityCard({ title, description, memberCount, tags }: CommunityCardProps) {
  export function CommunityCard({ title, description, image }: CommunityCardProps) {
    return (
      <Card className="relative overflow-hidden rounded-xl bg-white shadow-md group hover:shadow-lg transition-shadow min-h-[340px]">
        {/* Illustration Section */}
        <div className="flex justify-center items-center h-36 bg-white group-hover:bg-teal-100 transition-colors">
          <img
            src={image}
            alt={title}
            className="h-20 w-auto object-contain"
          />
        </div>
  
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-teal-900 text-2xl font-semibold group-hover:text-teal-700 transition-colors text-center">
            {title}
          </h3>
          <p className="text-teal-700 mt-5 text-sm text-center group-hover:text-teal-800 transition-colors">
            {description}
          </p>
        </div>
  
        {/* Border Highlight */}
        <div
          className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[rgb(19_78_74/var(--tw-text-opacity,1))] opacity-100 transition-colors"
        ></div>
      </Card>
    );
  }
  
  
  
  
  
  
  

