import React, { useState } from "react";
import { STONES } from "../../constants/constants";
import { AnimatedDecor, OrderForm, Button, AnimatedHeading } from "../ui";

interface CalculatorProps {
  open: boolean;
  onClose: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ open, onClose }) => {
  const [selected, setSelected] = useState<number>(0);
  const [area, setArea] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const stone = STONES[selected];
  const total = area && !isNaN(Number(area)) ? Number(area) * stone.price : 0;

  return (
    <div
      className={`fixed inset-0 z-50  transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{ background: open ? "rgba(20,20,20,0.75)" : "rgba(20,20,20,0)" }}
      onClick={onClose}
    >
      <div
        className={`fixed  top-0 right-0 h-full bg-[#232323] shadow-2xl transition-transform duration-400 ease-in-out flex flex-col w-full max-w-md md:max-w-lg lg:max-w-1/2 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          maxWidth: open ? (window.innerWidth >= 1024 ? "50vw" : 420) : 420,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-10 text-4xl text-accent hover:text-white focus:outline-none z-10"
          onClick={onClose}
          aria-label="Закрити"
        >
          ×
        </button>
        <section className="relative flex-1 overflow-y-auto overflow-x-clip p-6 md:p-8">
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

          <AnimatedHeading className="mb-8 text-left text-white">
            Калькулятор вартості
          </AnimatedHeading>
          <div className="bg-[#232323] shadow-2xl rounded-xl p-6 md:p-10 max-w-lg mx-auto text-left text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-10 justify-start items-end w-full max-w-2xl mx-auto">
              {STONES.map((s, idx) => (
                <div key={s.name} className="flex flex-col items-center">
                  <button
                    className={`w-24 h-16 sm:w-28 sm:h-20  rounded-lg overflow-hidden shadow transition-all duration-300 border-2 focus:outline-none
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
                      selected === idx ? "text-accent" : "text-white"
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
            <div className="flex flex-col items-start gap-6">
              <div className="mb-2 w-full max-w-xs">
                <label className="block mb-2 font-semibold text-white text-left">
                  Площа (м²):
                </label>
                <input
                  type="number"
                  min="0"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="border border-muted rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent text-left bg-[#232323] text-white placeholder-white/60"
                  placeholder="Введіть площу"
                />
              </div>
              <div className="text-lg font-bold text-white mb-2 text-left">
                Обраний камінь:{" "}
                <span className="text-accent">{stone.name}</span>
              </div>
              <div className="text-xl font-bold text-white text-left">
                Загальна сума: <span className="text-accent">{total} грн</span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-items-start p-6 md:p-10">
            <Button onClick={() => setShowForm(true)}>Залишити заявку</Button>
            <OrderForm open={showForm} onClose={() => setShowForm(false)} />
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default Calculator;
