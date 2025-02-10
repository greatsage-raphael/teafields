export type Sin =
  | "pride"
  | "greed"
  | "lust"
  | "envy"
  | "gluttony"
  | "wrath"
  | "sloth";

export interface Question {
  id: number;
  text: string;
  category: Sin;
  type: "multiple" | "boolean";
  // For multiple-choice questions, choices is required; for boolean, it will be undefined.
  choices?: string[];
}

export const questions: Question[] = [
  // Multiple-Choice Questions
  {
    id: 1,
    text: "You are invited to a prestigious awards ceremony where you'll be recognized for your achievements. How do you prepare for the event?",
    category: "pride",
    type: "multiple",
    choices: [
      "I practice my speech and ensure every detail of my appearance is perfect.",
      "I get enough rest and trust my natural abilities will shine.",
      "I attend simply because I must, not to bask in the spotlight.",
    ],
  },
  {
    id: 2,
    text: "You unexpectedly come into a small inheritance. What is your first thought?",
    category: "greed",
    type: "multiple",
    choices: [
      "I will invest it wisely to secure an even brighter future.",
      "I deserve to splurge on luxuries without a second thought.",
      "I feel compelled to donate a portion to those in need.",
    ],
  },
  {
    id: 3,
    text: "At a party, you notice someone you're attracted to. How do you approach them?",
    category: "lust",
    type: "multiple",
    choices: [
      "I confidently compliment and flirt openly.",
      "I strike up a friendly conversation and gauge mutual interest.",
      "I keep my distance, preferring meaningful over physical connections.",
    ],
  },
  {
    id: 4,
    text: "When a colleague receives a promotion you longed for, you feel:",
    category: "envy",
    type: "multiple",
    choices: [
      "A burning resentment and a fierce desire to outdo them.",
      "Disappointment, but you channel it into self-improvement.",
      "Genuine happiness for their success, with no hard feelings.",
    ],
  },
  {
    id: 5,
    text: "At a lavish buffet, your strategy is:",
    category: "gluttony",
    type: "multiple",
    choices: [
      "Pile your plate high to sample every dish available.",
      "Select a few favorites and enjoy them at a moderate pace.",
      "Opt for a light meal, keeping indulgence in check.",
    ],
  },
  {
    id: 6,
    text: "During a heated discussion, you tend to:",
    category: "wrath",
    type: "multiple",
    choices: [
      "Raise your voice and make impulsive, biting remarks.",
      "Express frustration with irritation while trying to stay calm.",
      "Maintain your composure and work toward a peaceful resolution.",
    ],
  },
  {
    id: 7,
    text: "When faced with a challenging project, you:",
    category: "sloth",
    type: "multiple",
    choices: [
      "Delay starting until the last minute, hoping the task might resolve itself.",
      "Plan out your tasks, though occasional procrastination creeps in.",
      "Immediately create a detailed plan and dive right into work.",
    ],
  },
  {
    id: 8,
    text: "How do you react when receiving public praise?",
    category: "pride",
    type: "multiple",
    choices: [
      "I bask in the spotlight, proudly highlighting my achievements.",
      "I appreciate the compliment but remain modest.",
      "I deflect the praise to my team or the circumstances that helped me.",
    ],
  },
  {
    id: 9,
    text: "In a group restaurant bill scenario, you:",
    category: "greed",
    type: "multiple",
    choices: [
      "Insist on an equal split, regardless of individual orders.",
      "Suggest paying based on what everyone consumed.",
      "Quickly calculate and argue to minimize your share.",
    ],
  },
  {
    id: 10,
    text: "When enjoying a movie or book, do you find yourself focusing on:",
    category: "lust",
    type: "multiple",
    choices: [
      "Deep emotional and intellectual connections.",
      "A blend of emotional depth with a hint of sensuality.",
      "Vivid, sensual details that strongly appeal to physical desire.",
    ],
  },
];

export const booleanQuestions: Question[] = [
  // Boolean (Yes/No) Questions
  {
    id: 11,
    text: "I often compare my achievements to those of others.",
    category: "envy",
    type: "boolean",
  },
  {
    id: 12,
    text: "I frequently eat even when I'm not physically hungry.",
    category: "gluttony",
    type: "boolean",
  },
  {
    id: 13,
    text: "I find it difficult to forgive and forget when someone wrongs me.",
    category: "wrath",
    type: "boolean",
  },
  {
    id: 14,
    text: "I prefer relaxing at home over tackling my to-do list.",
    category: "sloth",
    type: "boolean",
  },
  {
    id: 15,
    text: "I believe I am more capable than most people.",
    category: "pride",
    type: "boolean",
  },
  {
    id: 16,
    text: "I find it hard to share my resources with others.",
    category: "greed",
    type: "boolean",
  },
  {
    id: 17,
    text: "I often prioritize physical attraction over forming deep emotional bonds.",
    category: "lust",
    type: "boolean",
  },
  {
    id: 18,
    text: "I sometimes feel bitter when others succeed where I haven’t.",
    category: "envy",
    type: "boolean",
  },
  {
    id: 19,
    text: "I tend to overreact when things don't go as planned.",
    category: "wrath",
    type: "boolean",
  },
  {
    id: 20,
    text: "I frequently postpone important tasks even when deadlines approach.",
    category: "sloth",
    type: "boolean",
  },
];
