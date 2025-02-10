import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ArchetypeCard {
  title: string
  trait: string
  image: string
}

const archetypes: ArchetypeCard[] = [
  {
    title: "Pride",
    trait: "superiority",
    image: "/sins/pride.png",  // Man in suit with farm background
  },
  {
    title: "Greed",
    trait: "avarice",
    image: "/sins/greed.png",  // Businessman with green tie
  },
  {
    title: "Lust",
    trait: "desire",
    image: "/sins/lust.png",  // Office professional
  },
  {
    title: "Envy",
    trait: "jealousy",
    image: "/sins/envy.png",  // Placeholder - need appropriate image
  },
  {
    title: "Gluttony",
    trait: "excess",
    image: "/sins/gluttony.png",  // Man with rosary
  },
  {
    title: "Wrath",
    trait: "anger",
    image: "/sins/wrath.png",  // Placeholder - need appropriate image
  },
  {
    title: "Sloth",
    trait: "apathy",
    image: "/sins/sloth.png",  // Medical professional
  },
]

interface ArchetypesGridSectionProps {
  secondSin: string;
  thirdSin: string;
}

export function ArchetypesGridSection({ secondSin, thirdSin }: ArchetypesGridSectionProps) {
  return (
    <Card className="p-6 space-y-12 bg-black text-white border-black">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-medium">
          There are <span className="font-bold">nine archetypes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archetypes.map((archetype) => (
            <div key={archetype.title} className="relative aspect-[3/2] overflow-hidden rounded-lg group">
              <Image src={archetype.image || "/placeholder.svg"} alt={archetype.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-black/75 px-3 py-1.5 rounded text-white text-sm">
                <div className="font-medium">{archetype.title}</div>
                <div className="text-xs opacity-75 italic">{archetype.trait}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-medium text-center">Similar archetypes to explore</h3>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-700">Your secondary traits</p>
            <div className="flex flex-wrap gap-4">
              <div className="relative aspect-[3/2] w-48 overflow-hidden rounded-lg">
                <Image
                  src={`/sins/${secondSin.toLowerCase()}.png`}
                  alt={secondSin}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/75 px-3 py-1.5 rounded text-white text-sm">
                  <div className="font-medium">{secondSin}</div>
                </div>
              </div>
              <div className="relative aspect-[3/2] w-48 overflow-hidden rounded-lg">
                <Image
                  src={`/sins/${thirdSin.toLowerCase()}.png`}
                  alt={thirdSin}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/75 px-3 py-1.5 rounded text-white text-sm">
                  <div className="font-medium">{thirdSin}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
