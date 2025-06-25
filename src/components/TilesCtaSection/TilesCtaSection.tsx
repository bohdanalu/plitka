import React, { useRef, useState, useEffect } from "react";
import TileWall from "../ui/TileWall";
import Button from "../ui/Button";
import AnimatedDecor from "../ui/AnimatedDecor";
import { Link } from "react-router-dom";
import AnimatedHeading from "../ui/AnimatedHeading";

const TilesCtaSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#fdfaf6] relative py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between overflow-clip gap-8 py-20 ">
        <AnimatedDecor
          animationType="bounce"
          delay={300}
          className="absolute top-8 left-8 w-12 h-12 bg-accent/20 rounded-full hidden md:block"
        />
        <AnimatedDecor
          animationType="slideIn"
          delay={500}
          className="absolute bottom-8 right-8 w-16 h-16 bg-accent/15 rounded-lg transform rotate-45 hidden md:block"
        />

        <div className="flex-1 flex items-center justify-center">
          <TileWall animate={inView} />
        </div>
        <div className="flex-1 flex flex-col items-center  mt-8 md:mt-0">
          <AnimatedHeading className=" mb-4">
            Порахуй вартість свого проекту!
          </AnimatedHeading>
          <p className="mb-6 text-dark max-w-md">
            Склади свою стіну з плитки та дізнайся приблизну ціну матеріалів для
            фасаду, доріжки чи декору. Просто натисни на кнопку нижче та
            скористайся калькулятором!
          </p>
          <Link to="/calculator">
            <Button>Перейти до калькулятора</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TilesCtaSection;
