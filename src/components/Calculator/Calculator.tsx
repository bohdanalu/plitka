import React, { useState } from "react";
import { STONES } from "../../constants/constants";
import AnimatedHeading from "../ui/AnimatedHeading";

const Calculator: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [area, setArea] = useState<string>("");
  const stone = STONES[selected];
  const total = area && !isNaN(Number(area)) ? Number(area) * stone.price : 0;

  return (
    <section className=" mx-auto my-16 px-4">
      <AnimatedHeading className="mb-6 text-left">
        Калькулятор вартості
      </AnimatedHeading>
      <div className="flex gap-4 mb-8">
        {STONES.map((s, idx) => (
          <button
            key={s.name}
            className={`flex flex-col items-center border-2 rounded-lg p-2 w-32 transition
              ${
                selected === idx
                  ? "border-accent shadow-lg"
                  : "border-muted opacity-70 hover:opacity-100"
              }`}
            onClick={() => setSelected(idx)}
            type="button"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-full h-20 object-cover rounded mb-2"
            />
            <span className="font-semibold">{s.name}</span>
            <span className="text-sm text-muted">{s.price} грн/м²</span>
          </button>
        ))}
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-dark">
          Площа (м²):
        </label>
        <input
          type="number"
          min="0"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border border-muted rounded px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Введіть площу"
        />
      </div>
      <div className="text-lg font-bold text-dark mb-2">
        Обраний камінь: <span className="text-muted">{stone.name}</span>
      </div>
      <div className="text-xl font-bold text-dark">
        Загальна сума: <span className="text-accent">{total} грн</span>
      </div>
    </section>
  );
};

export default Calculator;
