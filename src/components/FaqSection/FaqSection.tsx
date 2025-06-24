import React, { useState } from "react";
import AnimatedHeading from "../ui/AnimatedHeading";
import { FAQ_DATA } from "../../constants/constants";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="my-16">
      <AnimatedHeading className="mb-8 text-left">
        Питання та відповіді
      </AnimatedHeading>
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className="border border-muted rounded">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-dark focus:outline-none"
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              <span
                className={`ml-2 text-accent transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`px-4 pb-4 text-dark transition-all duration-300 ${
                openIndex === idx ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
