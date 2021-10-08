import { Variants } from 'framer-motion'

const easing = [0.175, 0.85, 0.42, 0.96]

export const editorVariants: Variants = {
  enter: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  on: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    y: 0,
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
}

export const appVariants: Variants = {
  enter: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  on: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    x: 0,
    opacity: 0,
    scale: 0.95,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: easing,
    },
  },
}

export const cardVariants = {
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 },
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
}
