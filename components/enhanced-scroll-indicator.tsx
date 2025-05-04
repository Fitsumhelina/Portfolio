"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function EnhancedScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)

      // Show indicator only after scrolling a bit
      setIsVisible(scrollTop > 100)
    }

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress)

    // Initial calculation
    updateScrollProgress()

    // Clean up event listener
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Format the percentage for display
  const progressPercentage = Math.min(Math.round(scrollProgress * 100), 100)

  return (
    <div
      className={`fixed bottom-16 sm:bottom-20 right-3 sm:right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Circular progress indicator */}
        <div
          className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800/80 backdrop-blur-sm cursor-pointer hover:bg-zinc-700/80 transition-colors"
          onClick={scrollToTop}
          role="button"
          aria-label="Scroll to top"
        >
          {/* Progress circle */}
          <svg className="w-10 h-10 sm:w-12 sm:h-12 absolute top-0 left-0 -rotate-90">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#27272a" strokeWidth="2" className="sm:hidden" />
            <circle cx="24" cy="24" r="20" fill="none" stroke="#27272a" strokeWidth="2" className="hidden sm:block" />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 18}`}
              strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress)}`}
              strokeLinecap="round"
              className="sm:hidden"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress)}`}
              strokeLinecap="round"
              className="hidden sm:block"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
          </div>
        </div>

        {/* Percentage label */}
        <div className="mt-1 sm:mt-2 text-xs font-medium bg-zinc-800/80 backdrop-blur-sm text-white px-2 py-1 rounded-md">
          {progressPercentage}%
        </div>
      </div>
    </div>
  )
}
