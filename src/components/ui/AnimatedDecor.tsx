import React, { useEffect, useRef, useState } from "react";

interface AnimatedDecorProps {
  className?: string;
  delay?: number;
  animationType?: "fadeIn" | "slideIn" | "rotate" | "bounce";
  children?: React.ReactNode;
}

const AnimatedDecor: React.FC<AnimatedDecorProps> = ({
  className = "",
  delay = 0,
  animationType = "fadeIn",
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    switch (animationType) {
      case "fadeIn":
        return `${baseClasses} ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`;
      case "slideIn":
        return `${baseClasses} ${
          inView
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 translate-x-8 translate-y-8"
        }`;
      case "rotate":
        return `${baseClasses} ${
          inView ? "opacity-100 rotate-12" : "opacity-0 rotate-0"
        }`;
      case "bounce":
        return `${baseClasses} ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedDecor;
