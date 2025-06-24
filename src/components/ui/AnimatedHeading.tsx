import React, { useEffect, useRef, useState } from "react";

type AnimatedHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: string;
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className = "text-3xl font-semibold text-accent",
  as: Tag = "h2",
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.4,
        rootMargin: "-80px 0px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    { ref, className: `transition-all duration-700 ease-out ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"} ${className}` },
    children
  );
};

export default AnimatedHeading;