import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Emotion {
  name: string;
  value: number;
  color: string;
}

export function EmotionChartSection({ emotions }: { emotions: Emotion[] }) {
  return (
    <Card className="p-6 space-y-8 bg-black text-white border-black">
      <h2 className="text-2xl font-medium">Emotions are felt in beats</h2>
      <div className="space-y-4">
        {emotions.map((emotion) => (
          <div key={emotion.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{emotion.name}</span>
              <span className="text-gray-700">{emotion.value}%</span>
            </div>
            <Progress value={emotion.value} className={`h-2 ${emotion.color}`} />
          </div>
        ))}
      </div>
    </Card>
  )
}
