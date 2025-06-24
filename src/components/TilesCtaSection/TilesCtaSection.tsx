import React from "react";
import TileWall from "../ui/TileWall";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const TilesCtaSection: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-20">
    <div className="flex-1 flex items-center justify-center">
      <TileWall />
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

export default TilesCtaSection;
