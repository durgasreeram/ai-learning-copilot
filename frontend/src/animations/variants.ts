import type { Variants } from 'framer-motion';

// Premium spring & easing curves
export const transitionPremium = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
} as const;

export const transitionSmooth = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1], // easeOutExpo
  duration: 0.6,
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitionSmooth
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transitionSmooth
  },
  exit: { 
    opacity: 0, 
    x: -15,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitionPremium
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    }
  }
};

export const hoverScale = {
  scale: 1.015,
  y: -2,
  transition: { type: 'spring', stiffness: 400, damping: 25 }
};

export const activeTap = {
  scale: 0.985
};
