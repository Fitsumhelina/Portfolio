"use client"

import { useState, useEffect } from "react"

export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress)

    // Initial calculation
    updateScrollProgress()

    // Clean up event listener
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
        style={{ width: `${scrollProgress * 100}%`, transition: "width 0.1s" }}
        role="progressbar"
        aria-valuenow={scrollProgress * 100}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </div>
  )
}
