import type { Result } from "../types"

export const results: Record<string, Result> = {
  observer: {
    type: "The Observer",
    trait: "anxiety",
    description:
      "seeks to discover physical truths and share them with the world. They have a strong sense of the truth, and a strong aversion to untruths.",
    emotions: {
      love: 20,
      fear: 60,
      guilt: 40,
      disgust: 30,
      anger: 30,
      pride: 80,
    },
    primaryEmotions: ["fear", "guilt"],
  },
  // Add other personality types...
}

export const emotionCategories = [
  {
    title: "SELF",
    description: "argues for",
    emotion: "Love",
    subEmotion: "Disgust",
    survival: "family survival",
    color: "pink",
  },
  {
    title: "WORLD",
    description: "argues for",
    emotion: "Fear",
    subEmotion: "Anger",
    survival: "physical survival",
    color: "green",
  },
  {
    title: "SOCIETY",
    description: "argues for",
    emotion: "Guilt",
    subEmotion: "Pride",
    survival: "tribal survival",
    color: "orange",
  },
]

