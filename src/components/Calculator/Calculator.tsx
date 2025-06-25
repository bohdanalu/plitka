import React, { useState } from "react";
import { STONES } from "../../constants/constants";
import AnimatedDecor from "../ui/AnimatedDecor";
import OrderForm from "./OrderForm";
import Button from "../ui/Button";
import AnimatedHeading from "../ui/AnimatedHeading";

const Calculator: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [area, setArea] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const stone = STONES[selected];
  const total = area && !isNaN(Number(area)) ? Number(area) * stone.price : 0;

  return (
    <section className="relative mt-36 mb-16 container max-w-4xl overflow-x-clip">
      <AnimatedDecor
        animationType="fadeIn"
        delay={200}
        className="absolute -top-8 -left-8 w-16 h-16 bg-accent/50 rounded-full hidden md:block"
      />
      <AnimatedDecor
        animationType="rotate"
        delay={400}
        className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/80 rounded-lg transform rotate-12 hidden md:block"
      />
      <AnimatedDecor
        animationType="fadeIn"
        delay={600}
        className="absolute top-1/2 -left-4 w-8 h-8 bg-accent rounded-full hidden lg:block"
      />
      <AnimatedDecor
        animationType="rotate"
        delay={800}
        className="absolute top-1/4 -right-4 w-12 h-12 bg-muted rounded-lg transform -rotate-12 hidden lg:block"
      />

      <AnimatedHeading className="mb-8 text-left">
        Калькулятор вартості
      </AnimatedHeading>
      <div className="bg-white/90 shadow-2xl border border-accent/10 rounded-xl p-6 md:p-10 max-w-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10 justify-center items-end w-full max-w-2xl mx-auto">
          {STONES.map((s, idx) => (
            <div key={s.name} className="flex flex-col items-center">
              <button
                className={`w-32 h-24 rounded-lg overflow-hidden shadow transition-all duration-300 border-2 focus:outline-none
                  ${
                    selected === idx
                      ? "border-accent scale-105 shadow-lg"
                      : "border-muted opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                onClick={() => setSelected(idx)}
                type="button"
                aria-label={`Обрати ${s.name}`}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <span
                className={`mt-3 font-semibold text-center ${
                  selected === idx ? "text-accent" : "text-dark"
                }`}
              >
                {s.name}
              </span>
              <span className="text-sm text-muted text-center">
                {s.price} грн/м²
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="mb-2 w-full max-w-xs">
            <label className="block mb-2 font-semibold text-dark text-center">
              Площа (м²):
            </label>
            <input
              type="number"
              min="0"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="border border-muted rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent text-center"
              placeholder="Введіть площу"
            />
          </div>
          <div className="text-lg font-bold text-dark mb-2 text-center">
            Обраний камінь: <span className="text-accent">{stone.name}</span>
          </div>
          <div className="text-xl font-bold text-dark text-center">
            Загальна сума: <span className="text-accent">{total} грн</span>
          </div>
          <Button onClick={() => setShowForm(true)}>Залишити заявку</Button>
          <OrderForm open={showForm} onClose={() => setShowForm(false)} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
