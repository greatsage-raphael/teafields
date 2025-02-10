"use client"

import { useState } from "react"
import DynamicFrameLayout from "../../components/dynamicComponentLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
            Teafields 
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                A level-headed son must fight to keep his dead estranged
                father’s tea estate afloat amidst a problematic dysfunctional
family.
                </p>
                <p>
                When Henry Lugguliro, the C.E.O of Lugguliro Tea Estate dies, his
                 estranged son Kirabo is forced to step into his shoes to keep
                 the business running. The late Patriarch’s family however has
                other plans. The more they intervene, the more secrets are
                revealed, throwing each one off-balance.
                </p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <Link
              href="https://lumalabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-30 h-30 relative opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="sins/bad.png"
                height={100}
                width={100}
                alt="Luma Logo"
                className="object-contain"
              />
            </Link>
          </div>
          <Link
            href="/QuizLanding"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
          >
            Start Quiz
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}

