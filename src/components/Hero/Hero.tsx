import React from "react";
import Button from "../ui/Button";
import TileWall from "../ui/TileWall";
import { Link } from "react-router-dom";

const Hero: React.FC = () => (
  <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between gap-8 py-12 ">
    <div className="max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4 leading-tight">
        Натуральний камінь для фасадів, доріжок та декору
      </h1>
      <p className="text-lg md:text-xl text-dark mb-8">
        Створіть унікальний простір із природного каменю — довговічно, красиво,
        по-справжньому.
      </p>
      <Link to="/calculator">
        <Button>Отримати розрахунок</Button>
      </Link>
    </div>
    <div className="flex items-center justify-center w-full md:w-auto">
      <TileWall animate={true} />
    </div>
  </section>
);

export default Hero;
