import React, { useEffect, useState, useRef } from 'react';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

type AnimatedTitleProps = {
  title: string;
  className?: string;
  wordClasses?: string[];
  colorBg?: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  className = '',
  wordClasses = ['text-[var(--color-primary)]'],
  colorBg = 'black',
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const arrColors = [
    'text-[var(--color-primary)]',
    'text-[var(--color-secondary)]',
    'text-[var(--color-accent)]',
    'text-[var(--color-muted)]',
    'text-[var(--color-surface)]',
    'text-[var(--color-dark)]',
  ];

  const colors = (color: string | undefined): string[] => {
    if (!color || typeof color !== 'string') return [];
    return arrColors.filter(
      (el) => !el.toLowerCase().includes(color.trim().toLowerCase())
    );
  };

  const getRandomColor = () => {
    const filteredColors = colors(colorBg);
    if (filteredColors.length === 0) return null;
    return filteredColors[Math.floor(Math.random() * filteredColors.length)];
  };

  const getRandomChar = () => {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
  };

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
    }
  }, [inView, isAnimating]);

  useEffect(() => {
    if (charIndex < title.length && isAnimating) {
      const timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isAnimating, title]);

  const renderStyledText = () => {
    const words = title.split(' ');
    let charCounter = 0;

    return words.map((word, index) => {
      const wordStart = charCounter;
      const wordEnd = charCounter + word.length;

      charCounter += word.length + 1; 

      const wordClass = !isAnimating && (wordClasses[index] || '');
      const transitionClass = 'transition-all duration-300 ease-in-out';

      return (
        <span
          key={index}
          className={`${wordClass} ${transitionClass}`}
        >
          {word.split('').map((char, i) => {
            const isVisible = charIndex > wordStart + i;
            const isFinal = charIndex >= wordEnd;

            const colorClass = isFinal
              ? wordClasses[index] || ''
              : isVisible
                ? getRandomColor()
                : 'opacity-0';

            return (
              <span
                key={`${index}-${i}`}
                className={`relative ${colorClass}`}
              >
                {isVisible && !isFinal ? getRandomChar() : char}
              </span>
            );
          })}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  return (
    <div ref={ref}>
      <div
        className={`tracking-wide font-bold text-2xl uppercase leading-tight lg:text-3xl lg:leading-tight 2xl:text-4xl ${className}`}
      >
        {renderStyledText()}
      </div>
    </div>
  );
};

export default AnimatedTitle;