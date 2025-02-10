"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export function ResultsFooter({ resultType, primarySin, secondarySin, thirdSin }: { resultType: string; primarySin: string | undefined; secondarySin: string | undefined; thirdSin: string | undefined }) {
  const [copiedBaseUrl, setCopiedBaseUrl] = useState(false);
  const [copiedResultUrl, setCopiedResultUrl] = useState(false);

  const handleCopy = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const baseUrl = "http://localhost:3000"
  const resultUrl = `${baseUrl}/quiz/?sin=${primarySin?.toLowerCase()  || ''}&sin2=${secondarySin?.toLowerCase() || ''}&sin3=${thirdSin?.toLowerCase() || ''}`

  return (
    <footer className="bg-black text-white py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* URLs Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p>The URL of the test:</p>
            <div className="flex gap-2">
              <Input value={baseUrl} readOnly className="bg-white text-black" />
              <Button
                onClick={() => handleCopy(baseUrl, setCopiedBaseUrl)}
                className="bg-[#9797EA] hover:bg-[#8282D9] text-white min-w-[80px]"
              >
                {copiedBaseUrl ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>


          <div className="space-y-2">
            <p>The URL of your result:</p>
            <div className="flex gap-2">
              <Input value={resultUrl} readOnly className="bg-white text-black" />
              <Button
                onClick={() => handleCopy(resultUrl, setCopiedResultUrl)}
                className="bg-[#9797EA] hover:bg-[#8282D9] text-white min-w-[80px]"
              >
                {copiedResultUrl ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm opacity-80 space-y-2">
          <p>
          This is a philosophical test exploring the concept of the seven deadly sins. This test contains no medical
            or clinical advice. The Seven Deadly Sins Test was developed by teafields as an introspective tool for
            understanding human nature.
          </p>
          <p>
            2025{" "}
            <Link href="#" className="underline hover:opacity-100">
              Teafields Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
