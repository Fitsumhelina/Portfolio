"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { useAnimation } from "@/contexts/animation-context"

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "bounce"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
  id?: string
  forceAnimate?: boolean
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.1,
  rootMargin = "-50px",
  id,
  forceAnimate = false,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  })

  const { settings } = useAnimation()
  const shouldAnimate = settings.enabled || forceAnimate

  // Calculate actual delay based on settings
  const actualDelay = (delay * settings.delay) / 100

  // Calculate transform values based on intensity
  const getTransformValue = (baseValue: number) => {
    return baseValue * settings.intensity
  }

  const getAnimationClasses = () => {
    // If animations are disabled, return empty classes
    if (!shouldAnimate) {
      return ""
    }

    const baseClasses = `transition-all duration-${settings.duration} ${settings.easing}`
    const delayClass = actualDelay ? `delay-${actualDelay}` : ""

    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-[${getTransformValue(10)}px]`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-[${getTransformValue(10)}px]`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-[${getTransformValue(10)}px]`
        case "zoom-in":
          return `${baseClasses} opacity-0 scale-[${1 - getTransformValue(0.05)}]`
        case "bounce":
          return `${baseClasses} opacity-0 -translate-y-[${getTransformValue(4)}px]`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  // Generate inline styles for custom duration and easing
  const getAnimationStyles = () => {
    if (!shouldAnimate) {
      return {}
    }

    return {
      transitionDuration: `${settings.duration}ms`,
      transitionTimingFunction: settings.easing,
      transitionDelay: actualDelay ? `${actualDelay}ms` : undefined,
      transform: !isIntersecting ? getTransformStyle() : "translate3d(0, 0, 0) scale(1)",
      opacity: isIntersecting ? 1 : 0,
    }
  }

  const getTransformStyle = () => {
    if (!isIntersecting) {
      switch (animation) {
        case "fade-up":
          return `translate3d(0, ${getTransformValue(10)}px, 0)`
        case "fade-in":
          return "translate3d(0, 0, 0)"
        case "slide-left":
          return `translate3d(-${getTransformValue(10)}px, 0, 0)`
        case "slide-right":
          return `translate3d(${getTransformValue(10)}px, 0, 0)`
        case "zoom-in":
          return `translate3d(0, 0, 0) scale(${1 - getTransformValue(0.05)})`
        case "bounce":
          return `translate3d(0, -${getTransformValue(4)}px, 0)`
        default:
          return "translate3d(0, 0, 0)"
      }
    }
    return "translate3d(0, 0, 0) scale(1)"
  }

  return (
    <section ref={ref as any} className={cn(className)} style={getAnimationStyles()} id={id}>
      {children}
    </section>
  )
}
