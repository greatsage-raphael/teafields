

export interface Result {
  type: string
  trait: string
  description: string
  emotions: {
    love: number
    fear: number
    guilt: number
    disgust: number
    anger: number
    pride: number
  }
  primaryEmotions: string[]
}

export interface EmotionCategory {
  title: string
  description: string
  emotion: string
  color: string
}

export interface Answer {
  questionId: number
  response: string
  category: String
  question: string
  timeSpent: number  // time in milliseconds between answers
}
