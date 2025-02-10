"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { questions, booleanQuestions } from "../data/questions"
import Results from "./results"
import type { Answer } from "../types"

// Define the possible sins.
export type Sin = "pride" | "greed" | "lust" | "envy" | "gluttony" | "wrath" | "sloth"

/**
 * Scoring rules for multiple-choice questions.
 * Each question ID maps to an object whose keys are the exact response text,
 * and whose values are the number of points that response is worth.
 *
 * In this example:
 * - The most indicative response is worth 2 points.
 * - A moderate response is worth 1 point.
 * - The least indicative response is worth 0 points.
 */
const scoringRules: Record<number, Record<string, number>> = {
  1: {
    "I practice my speech and ensure every detail of my appearance is perfect.": 2,
    "I get enough rest and trust my natural abilities will shine.": 1,
    "I attend simply because I must, not to bask in the spotlight.": 0,
  },
  2: {
    "I will invest it wisely to secure an even brighter future.": 2,
    "I deserve to splurge on luxuries without a second thought.": 1,
    "I feel compelled to donate a portion to those in need.": 0,
  },
  3: {
    "I confidently compliment and flirt openly.": 2,
    "I strike up a friendly conversation and gauge mutual interest.": 1,
    "I keep my distance, preferring meaningful over physical connections.": 0,
  },
  4: {
    "A burning resentment and a fierce desire to outdo them.": 2,
    "Disappointment, but you channel it into self-improvement.": 1,
    "Genuine happiness for their success, with no hard feelings.": 0,
  },
  5: {
    "Pile your plate high to sample every dish available.": 2,
    "Select a few favorites and enjoy them at a moderate pace.": 1,
    "Opt for a light meal, keeping indulgence in check.": 0,
  },
  6: {
    "Raise your voice and make impulsive, biting remarks.": 2,
    "Express frustration with irritation while trying to stay calm.": 1,
    "Maintain your composure and work toward a peaceful resolution.": 0,
  },
  7: {
    "Delay starting until the last minute, hoping the task might resolve itself.": 2,
    "Plan out your tasks, though occasional procrastination creeps in.": 1,
    "Immediately create a detailed plan and dive right into work.": 0,
  },
  8: {
    "I bask in the spotlight, proudly highlighting my achievements.": 2,
    "I appreciate the compliment but remain modest.": 1,
    "I deflect the praise to my team or the circumstances that helped me.": 0,
  },
  9: {
    "Insist on an equal split, regardless of individual orders.": 2,
    "Suggest paying based on what everyone consumed.": 1,
    "Quickly calculate and argue to minimize your share.": 0,
  },
  10: {
    "Deep emotional and intellectual connections.": 0,
    "A blend of emotional depth with a hint of sensuality.": 1,
    "Vivid, sensual details that strongly appeal to physical desire.": 2,
  },
}

/**
 * Calculates total scores for each sin based on the provided answers.
 * - For multiple-choice questions, uses the scoringRules mapping.
 * - For boolean questions (i.e. those without a scoring rule), converts the response to a boolean,
 *   awarding 1 point for a "true" response.
 */
function calculateSinScores(answers: Answer[]): Record<Sin, number> {
  const scores: Record<Sin, number> = {
    pride: 0,
    greed: 0,
    lust: 0,
    envy: 0,
    gluttony: 0,
    wrath: 0,
    sloth: 0,
  }

  answers.forEach(({ questionId, response, category }) => {
    if (scoringRules[questionId]) {
      // Multiple-choice question.
      const points = scoringRules[questionId][response] ?? 0
      scores[category] += points
    } else {
      // Boolean question.
      const boolResponse =
        typeof response === "boolean"
          ? response
          : response.toLowerCase() === "true"
      scores[category] += boolResponse ? 1 : 0
    }
  })

  return scores
}

/**
 * Determines the top three dominant sins from the answers.
 * This function calculates the scores and then sorts the sins in descending order.
 * It returns an object with:
 *   - first: the sin with the highest score.
 *   - second: the sin with the second highest score.
 *   - third: the sin with the third highest score.
 */
function determineTopThreeSins(
  answers: Answer[]
): { first: Sin; second: Sin; third: Sin } {
  const scores = calculateSinScores(answers)
  // Cast the entries to [Sin, number][] so TypeScript knows the key is of type Sin.
  const sortedSins = Object.entries(scores) as [Sin, number][]
  sortedSins.sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
  const first = sortedSins[0][0]
  const second = sortedSins[1][0]
  const third = sortedSins[2][0]
  return { first, second, third }
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(600) // 10 minutes in seconds
  const [lastAnswerTime, setLastAnswerTime] = useState(Date.now()) // Track last answer time

  const allQuestions = [...questions, ...booleanQuestions]
  const progress = (currentQuestion / allQuestions.length) * 100
  const currentQuestionData = allQuestions[currentQuestion]
  const isBoolean = !currentQuestionData.choices

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          setShowResults(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleAnswer = (response: string) => {
    const currentTime = Date.now()
    const timeSpent = currentTime - lastAnswerTime // Calculate time spent on this question

    const answer: Answer = {
      questionId: currentQuestionData.id,
      response,
      category: currentQuestionData.category,
      question: currentQuestionData.text,
      timeSpent: timeSpent,
    }

    setAnswers((prevAnswers) => [...prevAnswers, answer])
    setLastAnswerTime(currentTime) // Update last answer time

    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  // When the quiz is finished, calculate the top three dominant sins.
  if (showResults) {
    const topThreeSins = determineTopThreeSins(answers)
    //console.log("Top three sins:", topThreeSins)
    return (
      <Results
        resultType={`${topThreeSins.first}, ${topThreeSins.second}, ${topThreeSins.third}`}
      />
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Timer */}
        <div className="text-center py-5">
          <p className="text-xl font-medium text-gray-600">
            Time Remaining: {formatTime(timeRemaining)}
          </p>
        </div>

        {/* Question */}
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-8">
            {currentQuestionData.text}
          </h2>
        </div>

        {/* Answer Buttons */}
        <div
          className={`grid ${isBoolean ? "grid-cols-3" : "grid-cols-1"} gap-4 text-black`}
        >
          {isBoolean ? (
            <>
              <Button
                onClick={() => handleAnswer("true")}
                variant="outline"
                className="bg-blue-100 hover:bg-blue-200 border-blue-200"
              >
                True
              </Button>
              <Button
                onClick={() => handleAnswer("false")}
                variant="outline"
                className="bg-blue-100 hover:bg-blue-200 border-blue-200"
              >
                False
              </Button>
              <Button
                onClick={() => handleAnswer("skip")}
                variant="outline"
                className="bg-gray-100 hover:bg-gray-200 border-gray-200"
              >
                Skip
              </Button>
            </>
          ) : (
            currentQuestionData.choices?.map((choice: string, index: number) => (
              <Button
                key={index}
                onClick={() => handleAnswer(choice)}
                variant="outline"
                className="bg-blue-100 hover:bg-blue-200 border-blue-200 mb-2"
              >
                {choice}
              </Button>
            ))
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2 bg-gray-600" />
          <p className="text-center text-sm text-gray-600">
            The Seven Deadly Sins Test
          </p>
        </div>
      </div>
    </div>
  )
}
