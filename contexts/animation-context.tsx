"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type EasingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out"
export type AnimationPreset = "subtle" | "moderate" | "playful" | "dramatic" | "none"

interface AnimationSettings {
  duration: number // in ms
  delay: number // base delay in ms
  easing: EasingFunction
  intensity: number // scale factor for animations (0-1)
  enabled: boolean
  preset: AnimationPreset
}

interface AnimationContextType {
  settings: AnimationSettings
  updateSettings: (settings: Partial<AnimationSettings>) => void
  applyPreset: (preset: AnimationPreset) => void
}

const defaultSettings: AnimationSettings = {
  duration: 700,
  delay: 100,
  easing: "ease-out",
  intensity: 0.5,
  enabled: true,
  preset: "moderate",
}

const presets: Record<AnimationPreset, Partial<AnimationSettings>> = {
  subtle: {
    duration: 500,
    delay: 50,
    easing: "ease-out",
    intensity: 0.3,
  },
  moderate: {
    duration: 700,
    delay: 100,
    easing: "ease-out",
    intensity: 0.5,
  },
  playful: {
    duration: 800,
    delay: 150,
    easing: "ease-in-out",
    intensity: 0.7,
  },
  dramatic: {
    duration: 1000,
    delay: 200,
    easing: "ease-in-out",
    intensity: 1,
  },
  none: {
    enabled: false,
  },
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AnimationSettings>(defaultSettings)

  // Load settings from localStorage on initial render
  useEffect(() => {
    const savedSettings = localStorage.getItem("animationSettings")
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings((prev) => ({ ...prev, ...parsedSettings }))
      } catch (error) {
        console.error("Failed to parse animation settings:", error)
      }
    }
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("animationSettings", JSON.stringify(settings))
  }, [settings])

  const updateSettings = (newSettings: Partial<AnimationSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }))
  }

  const applyPreset = (preset: AnimationPreset) => {
    const presetSettings = presets[preset]
    setSettings((prev) => ({ ...prev, ...presetSettings, preset }))
  }

  return (
    <AnimationContext.Provider value={{ settings, updateSettings, applyPreset }}>{children}</AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}
