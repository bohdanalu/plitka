import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedDecor from "../ui/AnimatedDecor";
import { FAQ_DATA } from "../../constants/constants";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-16 container relative overflow-x-clip">
      <AnimatedDecor
        animationType="fadeIn"
        delay={200}
        className="absolute -top-8 -left-8 w-16 h-16 bg-accent/75 rounded-full hidden md:block"
      />
      <AnimatedDecor
        animationType="rotate"
        delay={400}
        className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/85 rounded-lg transform rotate-12 hidden md:block"
      />

      <AnimatedHeading className="mb-8 text-left">
        Питання та відповіді
      </AnimatedHeading>
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => (
          <div
            key={idx}
            className="border border-muted rounded-lg transition-all duration-300 ease-in-out hover:border-accent/50 hover:shadow-md"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-dark focus:outline-none transition-colors duration-200 hover:bg-accent/5 rounded-lg"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-base md:text-lg lg:text-xl">
                {item.question}
              </span>
              <IoChevronDown
                className={`ml-4 w-5 h-5 text-accent transition-all duration-500 ease-in-out ${
                  openIndex === idx
                    ? "rotate-180 scale-110"
                    : "rotate-0 scale-100"
                }`}
              />
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? "max-h-96 opacity-100 pb-4 transform scale-100"
                  : "max-h-0 opacity-0 pb-0 transform scale-95"
              }`}
            >
              <div className="text-sm md:text-base lg:text-lg leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
