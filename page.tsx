"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Quiz from "./components/quiz"

export const personalityTypes = [
  {
    title: "Pride",
    trait: "superiority",
    image: "/sins/pride.png",  // Man in suit with farm background
    description:
      "Pride is the overwhelming belief in one's own superiority—a dazzling yet dangerous confidence that blinds one to personal flaws. Those ruled by pride crave admiration and validation, often masking deep insecurities behind an imposing facade of perfection.",
  },
  {
    title: "Greed",
    trait: "avarice",
    image: "/sins/greed.png",  // Businessman with green tie
    description:
      "Greed is the insatiable hunger for more—more wealth, more power, and more possessions. It drives individuals to hoard resources and chase material gain, often at the expense of meaningful relationships, leaving behind a trail of relentless dissatisfaction.",
  },
  {
    title: "Lust",
    trait: "desire",
    image: "/sins/lust.png",  // Office professional
    description:
      "Lust is an intense craving for passion and physical gratification. It goes beyond mere attraction, manifesting as a consuming desire that can blur the lines between genuine connection and carnal indulgence. Those driven by lust often struggle to balance deep intimacy with fleeting pleasures.",
  },
  {
    title: "Envy",
    trait: "jealousy",
    image: "/sins/envy.png",  // Placeholder - need appropriate image
    description:
      "Envy is a corrosive blend of jealousy and resentment—a bitter longing for what others possess. It fuels an endless cycle of comparison and discontent, eroding self-worth and fostering an internal landscape marked by constant dissatisfaction and regret.",
  },
  {
    title: "Gluttony",
    trait: "excess",
    image: "/sins/gluttony.png",  // Man with rosary
    description:
      "Gluttony is the overindulgence in life's pleasures, whether through food, drink, or other excesses. It embodies a lack of restraint and a ceaseless desire for more, often leading to physical and emotional imbalance as the quest for satisfaction never truly ends.",
  },
  {
    title: "Wrath",
    trait: "anger",
    image: "/sins/wrath.png",  // Placeholder - need appropriate image
    description:
      "Wrath is the explosive, uncontrolled burst of anger that can consume a person whole. It is a storm of fury and retribution that not only severs bonds but also leaves lasting scars. Those dominated by wrath may appear calm until their inner volcano erupts in destructive, painful outbursts.",
  },
  {
    title: "Sloth",
    trait: "apathy",
    image: "/sins/sloth.png",  // Medical professional
    description:
      "Sloth is more than mere laziness—it is a profound inertia and indifference that stifles ambition and growth. This apathy can lead to missed opportunities and a stagnant existence, as the reluctance to act masks a deeper fear of failure or change.",
  },
]


export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <Quiz />
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-16 bg-black">
      <main className="max-w-6xl w-full space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-medium ">
            The <span className="font-bold text-white">7 Deadly Sins</span> Test
          </h1>
          <p className="text-lg md:text-xl">
            by <span className="font-semibold">teafields</span>.{" "}
            <span className="text-gray-600">Discover which sin defines your path.</span>
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md"
            onClick={() => setShowQuiz(true)}
          >
            Take the test »
          </Button>
          <p className="text-gray-600 italic">20 questions · 5-10 minutes</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalityTypes.map((type) => (
            <div
              key={type.title}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={type.image || "/placeholder.svg"}
                alt={type.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 ease-in-out group-hover:opacity-50" />
              <div className="absolute top-4 right-4 bg-black/70 px-3 py-1.5 rounded text-white transition-all duration-300 ease-in-out group-hover:bg-black/90">
                <h3 className="font-medium">{type.title}</h3>
                <p className="text-sm opacity-75 italic">{type.trait}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center space-y-4 text-sm text-gray-600">
          <div>
            2025{" "}
            <Link href="#" className="underline hover:text-gray-900">
              teafields
            </Link>
            {" · "}
            <Link href="#" className="underline hover:text-gray-900">
              Follow me on X/Twitter
            </Link>
          </div>
          <p className="max-w-2xl mx-auto">
            This is a philosophical test exploring the concept of the seven deadly sins. This test contains no medical
            or clinical advice. The Seven Deadly Sins Test was developed by teafields as an introspective tool for
            understanding human nature.
          </p>
        </footer>
      </main>
    </div>
  )
}
