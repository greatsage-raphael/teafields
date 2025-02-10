import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function EmotionBeatsSection() {
  const invertedForms = [
    { from: "Duress", to: "Frustration" },
    { from: "Envy", to: "Satisfaction" },
    { from: "Anxiety", to: "Zeal" },
    { from: "Remorse", to: "Revelation" },
    { from: "Devotion", to: "Contempt" },
  ]

  return (
    <Card className="p-6 space-y-8 bg-black text-white border-black">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-medium">Beats also have</h2>
        <h3 className="text-xl">two inverted forms</h3>
      </div>

      <div className="grid gap-4">
        {invertedForms.map(({ from, to }) => (
          <div key={from} className="flex items-center gap-3 justify-center">
            <Badge variant="outline" className="bg-cyan-100 hover:bg-cyan-100">
              {from}
            </Badge>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <Badge variant="outline" className="bg-orange-100 hover:bg-orange-100">
              {to}
            </Badge>
          </div>
        ))}
      </div>

      <p className="text-gray-700">
        The base emotions have three opposing pairs: love/disgust, fear/anger and guilt/pride. Beats are the same, each
        having an equal and opposite expression of itself.
      </p>
    </Card>
  )
}

