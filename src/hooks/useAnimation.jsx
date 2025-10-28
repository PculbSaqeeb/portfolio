import { useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";

export const useFadeInAnimation = (shouldAnimate = true) => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  // Use framer-motion's useInView
  const inView = useInView(elementRef, { amount: 0.3, once: true });

  // Create a callback ref to assign to the element
  const ref = useCallback((node) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    if (inView && shouldAnimate) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, shouldAnimate, controls]);

  return {
    ref, // ✅ Now it's a callback function
    controls,
  };
};
