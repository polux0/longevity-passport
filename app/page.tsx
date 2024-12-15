import { Button } from "@/components/ui/button";
import { CommunityCard } from "@/components/community-card";
import { FeatureCard } from "@/components/feature-card";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";

const features = [
  {
    title: "Personalizing Profiles",
    description:
      "Create a dynamic profile that showcases your expertise, achievements, and contributions in the longevity space. Use your profile as a central hub to share your work, connect with the global network, and enhance your visibility in the field.",
    image: "/images/personalized_profile.svg",
  },
  {
    title: "Secure Data Management and Sharing",
    description:
      "Protect your information with advanced privacy and security protocols. Seamlessly share verified contributions and credentials while maintaining full control over your personal data.",
    image: "/images/secure_data.svg",
  },
  {
    title: "Access to Collaboration Opportunities",
    description:
      "Engage with experts, innovators, and collaborators across the longevity ecosystem. Build partnerships, join groundbreaking initiatives, and contribute to advancements in healthspan and life extension.",
    image: "/images/collaboration_opportunities.svg",
  },
  {
    title: "Highlighting Top Contributors and Communities",
    description:
      "Celebrate excellence by featuring top contributors and leading communities. Inspire innovation and foster collaboration by showcasing impactful work and driving recognition for outstanding achievements.",
    image: "/images/higlight_contributors.svg",
  },
];

const passportReasons = [
  {
    title: "Unite",
    description:
      "Bring together global experts, enthusiasts, and innovators to drive collaboration in the longevity ecosystem.",
    type: "unite" as const,
  },
  {
    title: "Contribute",
    description:
      "Showcase your achievements, share insights, and support advancements in healthspan and life extension.",
    type: "contribute" as const,
  },
  {
    title: "Recognition",
    description:
      "Earn trusted verification for your contributions and gain visibility within the longevity field.",
    type: "recognition" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-teal-900 text-xl font-semibold">_Longevity Passport</h1>
        </header>

        {/* Hero Section */}
        <section className="text-center pt-32 pb-24">
          <h2 className="text-teal-800 text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Connect to the longevity ecosystem
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            Create your Longevity Passport to join a global network of experts, enthusiasts, and innovators. Track your contributions, collaborate with your community, and shape the future of improving healthspan and life extension.
          </p>
          <Button className="bg-[#0A5C5C] hover:bg-[#094949] text-white px-8 py-6 text-lg h-auto">
            Reserve your passport <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Features Section */}
        <section className="my-16">
          <h2 className="text-teal-900 text-3xl font-bold mb-8 text-center">Why the longevity passport?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {passportReasons.map((reason) => (
              <FeatureCard
                key={reason.title}
                title={reason.title}
                description={reason.description}
                type={reason.type}
              />
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="my-16">
          <h2 className="text-teal-900 text-3xl font-bold mb-8 text-center">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <CommunityCard key={index} {...feature} />
            ))}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </main>
  );
}
