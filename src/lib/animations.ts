
import { useEffect, useState, useRef } from 'react';

// Hook for intersection observer animation
export const useIntersectionAnimation = (
  threshold: number = 0.2,
  rootMargin: string = '0px',
) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

// Hook for scroll-based parallax effect
export const useParallax = (
  speed: number = 0.1,
  direction: 'vertical' | 'horizontal' = 'vertical'
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPos = window.scrollY;
      const translateValue = scrollPos * speed;
      
      if (direction === 'vertical') {
        ref.current.style.transform = `translateY(${translateValue}px)`;
      } else {
        ref.current.style.transform = `translateX(${translateValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return ref;
};

// Calculator for countdown
export const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft as {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};
