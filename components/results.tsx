import type { Answer } from "../types"
import { SelfAndZealSection } from "./results-sections/self-and-zeal"
import { EmotionBeatsSection } from "./results-sections/emotion-beats"
import { EmotionChartSection } from "./results-sections/emotion-chart"
import { ArchetypesGridSection } from "./results-sections/archetypes-grid"
import { ResultsFooter } from "./results-sections/results-footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

// Import types for personality data
export interface PersonalityType {
  title: string
  trait: string
  image: string
  description: string
  lowerEmotions: string[]
  indicators: string[]
  commonEmotions: string[]
  compatibleSin: string,
  emotions: { name: string; value: number; color: string }[]
  benefits: string[]
  drawbacks: string[]
}

// Define personality types directly in the component for now
const personalityTypes: PersonalityType[] = [
  {
    title: "Pride",
    trait: "superiority",
    image: "/sins/pride.png", // Man in suit with farm background
    description:
      "Pride is the overwhelming belief in one's own superiority—a dazzling yet dangerous confidence that blinds one to personal flaws. Those ruled by pride crave admiration and validation, often masking deep insecurities behind an imposing facade of perfection.",
    lowerEmotions: ["arrogance", "hubris"],
    indicators: [
      "Boasting about achievements",
      "Dismissiveness of feedback",
      "Reluctance to admit mistakes",
    ],
    commonEmotions: ["confidence", "smugness", "contempt"],
    compatibleSin: "Wrath",
    emotions: [
      { name: "Admiration", value: 80, color: "bg-purple-500" },
      { name: "Confidence", value: 70, color: "bg-blue-500" },
      { name: "Arrogance", value: 65, color: "bg-red-500" },
      { name: "Contempt", value: 60, color: "bg-gray-500" },
    ],
    benefits: ["Self-assurance", "Leadership", "Ambition"],
    drawbacks: ["Arrogance", "Isolation", "Inflexibility"],
  },
  {
    title: "Greed",
    trait: "avarice",
    image: "/sins/greed.png", // Businessman with green tie
    description:
      "Greed is the insatiable hunger for more—more wealth, power, and possessions. It drives individuals to hoard resources and chase material gain at the expense of meaningful relationships, leaving behind a trail of relentless dissatisfaction.",
    lowerEmotions: ["selfishness", "possessiveness"],
    indicators: [
      "Obsessive accumulation of wealth",
      "Inability to share or give generously",
      "Constant comparison with others' fortunes",
    ],
    commonEmotions: ["desire", "restlessness", "anxiety"],
    compatibleSin: "Gluttony",
    emotions: [
      { name: "Desire", value: 85, color: "bg-green-500" },
      { name: "Anxiety", value: 80, color: "bg-yellow-500" },
      { name: "Restlessness", value: 70, color: "bg-orange-500" },
      { name: "Obsession", value: 75, color: "bg-teal-500" },
    ],
    benefits: ["Ambition", "Resourcefulness", "Drive for success"],
    drawbacks: ["Selfishness", "Materialism", "Lack of generosity"],
  },
  {
    title: "Lust",
    trait: "desire",
    image: "/sins/lust.png", // Office professional
    description:
      "Lust is an intense craving for passion and physical gratification that goes beyond simple attraction. It manifests as a consuming desire, often blurring the lines between deep connection and mere carnal indulgence.",
    lowerEmotions: ["passion", "infatuation"],
    indicators: [
      "Excessive focus on physical appearance",
      "Impulsive romantic or sexual pursuits",
      "Objectification of others",
    ],
    commonEmotions: ["longing", "arousal", "excitement"],
    compatibleSin: "Envy",
    emotions: [
      { name: "Passion", value: 90, color: "bg-pink-500" },
      { name: "Longing", value: 85, color: "bg-red-500" },
      { name: "Euphoria", value: 80, color: "bg-purple-500" },
      { name: "Impulsiveness", value: 70, color: "bg-orange-500" },
    ],
    benefits: ["Passion", "Charisma", "Emotional intensity"],
    drawbacks: ["Impulsiveness", "Superficiality", "Objectification"],
  },
  {
    title: "Envy",
    trait: "jealousy",
    image: "/sins/envy.png", // Placeholder - need appropriate image
    description:
      "Envy is a corrosive blend of jealousy and resentment—a bitter longing for what others possess. It fuels an endless cycle of comparison and discontent, eroding self-worth and fostering constant dissatisfaction.",
    lowerEmotions: ["resentment", "covetousness"],
    indicators: [
      "Frequent comparisons with others",
      "Bitterness over others' success",
      "Undermining or devaluing others' achievements",
    ],
    commonEmotions: ["jealousy", "resentment", "insecurity"],
    compatibleSin: "Lust",
    emotions: [
      { name: "Jealousy", value: 80, color: "bg-emerald-500" },
      { name: "Resentment", value: 75, color: "bg-green-500" },
      { name: "Insecurity", value: 70, color: "bg-yellow-500" },
      { name: "Bitterness", value: 65, color: "bg-orange-500" },
    ],
    benefits: [
      "Motivation for self-improvement",
      "Awareness of personal desires",
      "Drive for excellence",
    ],
    drawbacks: ["Jealousy", "Resentment", "Insecurity"],
  },
  {
    title: "Gluttony",
    trait: "excess",
    image: "/sins/gluttony.png", // Man with rosary
    description:
      "Gluttony is the overindulgence in life's pleasures—be it food, drink, or other sensory excesses. It is marked by a lack of restraint and a ceaseless desire for more, often leading to physical and emotional imbalance.",
    lowerEmotions: ["overindulgence", "compulsion"],
    indicators: [
      "Excessive consumption or indulgence",
      "Lack of moderation in habits",
      "Emotional overeating or sensory craving",
    ],
    commonEmotions: ["craving", "indulgence", "satisfaction"],
    compatibleSin: "Greed",
    emotions: [
      { name: "Craving", value: 85, color: "bg-orange-500" },
      { name: "Indulgence", value: 80, color: "bg-red-500" },
      { name: "Satiation", value: 70, color: "bg-yellow-500" },
      { name: "Compulsion", value: 75, color: "bg-amber-500" },
    ],
    benefits: [
      "Enjoyment of sensory experiences",
      "Indulgence in pleasures",
      "Enthusiasm for life",
    ],
    drawbacks: ["Overindulgence", "Lack of self-control", "Excessiveness"],
  },
  {
    title: "Wrath",
    trait: "anger",
    image: "/sins/wrath.png", // Placeholder - need appropriate image
    description:
      "Wrath is the explosive, uncontrolled burst of anger that can consume a person. It is a storm of fury and retribution that severs bonds and leaves lasting scars, often emerging unexpectedly from an otherwise calm exterior.",
    lowerEmotions: ["irritation", "resentment"],
    indicators: [
      "Frequent outbursts of anger",
      "A desire for revenge or retribution",
      "Difficulty calming down after conflict",
    ],
    commonEmotions: ["rage", "fury", "indignation"],
    compatibleSin: "Pride",
    emotions: [
      { name: "Rage", value: 90, color: "bg-red-600" },
      { name: "Fury", value: 85, color: "bg-red-500" },
      { name: "Indignation", value: 80, color: "bg-orange-600" },
      { name: "Bitterness", value: 75, color: "bg-amber-600" },
    ],
    benefits: ["Passionate energy", "Assertiveness", "Commitment to justice"],
    drawbacks: ["Uncontrolled anger", "Aggression", "Impulsiveness"],
  },
  {
    title: "Sloth",
    trait: "apathy",
    image: "/sins/sloth.png", // Medical professional
    description:
      "Sloth is more than mere laziness—it is a profound inertia and indifference that stifles ambition and growth. This pervasive apathy leads to missed opportunities and a stagnant existence, often rooted in a deep-seated fear of failure or change.",
    lowerEmotions: ["lethargy", "indifference"],
    indicators: [
      "Procrastination and avoidance of responsibilities",
      "Lack of motivation and initiative",
      "A pervasive sense of boredom or resignation",
    ],
    commonEmotions: ["apathy", "boredom", "resignation"],
    compatibleSin: "Envy",
    emotions: [
      { name: "Apathy", value: 80, color: "bg-gray-500" },
      { name: "Lethargy", value: 75, color: "bg-blue-300" },
      { name: "Resignation", value: 70, color: "bg-gray-700" },
      { name: "Indifference", value: 65, color: "bg-blue-500" },
    ],
    benefits: ["Calmness", "Thoughtfulness", "Stress avoidance"],
    drawbacks: ["Apathy", "Procrastination", "Missed opportunities"],
  },
]

export default function Results({ resultType }: { resultType: string }) {
  // Extract sins from resultType
  const [firstSin, secondSin, thirdSin] = resultType.split(", ")

  //console.log("First Three Sins", firstSin, secondSin, thirdSin)
  
  // Find the personality type data for the first sin
  const primarySin = firstSin ? (personalityTypes.find(type => type.title.toLowerCase() === firstSin.toLowerCase()) ?? null) : null

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <SelfAndZealSection sin={primarySin} />
          <EmotionChartSection emotions={primarySin?.emotions || []} />
          <Card className="p-6 bg-black text-white border-black">
            <section className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 overflow-hidden rounded-lg">
                  <Image
                    src={primarySin?.image || "/placeholder.svg"}
                    alt={primarySin?.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-medium">Your Primary Sin: {primarySin?.title}</h2>
                  <p className="text-gray-400 italic">{primarySin?.trait}</p>
                </div>
              </div>

              <p className="text-gray-300">{primarySin?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Badge className="bg-green-100 hover:bg-green-100 text-green-800 px-3 py-1">{primarySin?.trait || 'Unknown'}</Badge>
                  <div className="space-y-2">
                    <p className="font-medium">Benefits:</p>
                    <p className="text-gray-700">{primarySin?.benefits.join(', ') || 'None'}</p>
                    <Separator className="my-2 bg-gray-600"/>
                    <p className="font-medium">Drawbacks:</p>
                    <p className="text-gray-700">{primarySin?.drawbacks.join(', ') || 'None'}</p>
                  </div>
                </div>
              </div>
            </section>
          </Card>
          <ArchetypesGridSection secondSin={secondSin} thirdSin={thirdSin} />
        </div>
      </div>
      <ResultsFooter resultType={resultType} primarySin={primarySin?.title} secondarySin={secondSin} thirdSin={thirdSin} />
    </div>
  )
}
