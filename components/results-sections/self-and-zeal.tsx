import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { PersonalityType } from "../results"

interface SelfAndZealSectionProps {
  sin: PersonalityType | null
}

export function SelfAndZealSection({ sin }: SelfAndZealSectionProps) {
  if (!sin) return null

  return (
    <Card className="p-6 space-y-8 bg-black text-white border-black">
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">Traits and Emotions</h2>
        <p className="text-gray-700">
          {sin.description}
        </p>

        <div className="space-y-6">
          {/* Emotion Indicators */}
          <h3 className="text-2xl font-medium">Indicators</h3>

          <div className="space-y-4">
            {sin.indicators.map((indicator) => (
              <p key={indicator} className="text-gray-300">• {indicator}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {sin.commonEmotions.map((emotion) => (
              <Badge 
                key={emotion}
                className={cn(
                  "px-3 py-1",
                  "bg-pink-100 hover:bg-pink-100 text-pink-800"
                )}
              >
                {emotion}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-sm italic text-gray-600">
          Lower emotions include: {sin.lowerEmotions.join(", ")}
        </p>

        <div className="bg-grey-40 p-4 rounded-lg">
          <p className="text-gray-700">
            Gets along well with those dominated by <strong>{sin.compatibleSin}</strong>
          </p>
        </div>
      </div>
    </Card>
  )
}
