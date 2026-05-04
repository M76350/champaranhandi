import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// Animated wrapper component
import React from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const baseStyle: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: '700ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionProperty: 'opacity, transform',
  };

  const hiddenStyles: Record<AnimationType, React.CSSProperties> = {
    'fade-up':     { opacity: 0, transform: 'translateY(40px)' },
    'fade-left':   { opacity: 0, transform: 'translateX(-50px)' },
    'fade-right':  { opacity: 0, transform: 'translateX(50px)' },
    'fade-in':     { opacity: 0 },
    'scale-up':    { opacity: 0, transform: 'scale(0.88)' },
    'slide-left':  { opacity: 0, transform: 'translateX(-80px)' },
    'slide-right': { opacity: 0, transform: 'translateX(80px)' },
  };

  const visibleStyle: React.CSSProperties = { opacity: 1, transform: 'none' };

  const style = {
    ...baseStyle,
    ...(isVisible ? visibleStyle : hiddenStyles[animation]),
  };

  return (
    // @ts-ignore
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
