import React, { useRef, useState, useEffect } from "react";
import TileWall from "../ui/TileWall";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const TilesCtaSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
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
    <section ref={ref} className="flex flex-col md:flex-row items-center justify-between overflow-clip gap-8 py-20">
      <div className="flex-1 flex items-center justify-center">
        <TileWall animate={inView} />
      </div>
      <div className="flex-1 flex flex-col items-center  mt-8 md:mt-0">
        <h2 className="text-2xl font-bold text-dark mb-4">
          Порахуй вартість свого проекту!
        </h2>
        <p className="mb-6 text-dark max-w-md">
          Склади свою стіну з плитки та дізнайся приблизну ціну матеріалів для
          фасаду, доріжки чи декору. Просто натисни на кнопку нижче та скористайся
          калькулятором!
        </p>
        <Link to="/calculator">
          <Button>Перейти до калькулятора</Button>
        </Link>
      </div>
    </section>
  );
};

export default TilesCtaSection;
