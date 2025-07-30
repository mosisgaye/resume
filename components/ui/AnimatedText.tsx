
'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  as?: React.ElementType;
  delay?: number;
  speed?: number;
}

const AnimatedText = ({ 
  text, 
  className, 
  once = true, 
  as: Component = 'span',
  delay = 0,
  speed = 40
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else {
          if (!once) setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [once]);

  useEffect(() => {
    if (!isInView) {
      if (!once) {
        setDisplayText('');
        setIsComplete(false);
      }
      return;
    }

    let currentIndex = 0;
    if (displayText.length === text.length) {
      setIsComplete(true);
      return;
    }

    const animationTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(animationTimeout);
  }, [isInView, text, once, displayText.length, delay, speed]);

  return (
    <Component ref={textRef} className={cn(className)}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </Component>
  );
};

export default AnimatedText;
