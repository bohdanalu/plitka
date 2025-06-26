import React, { useState, useEffect } from "react";
import TileBurgerIcon from "./TileBurgerIcon";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants/constants";
import AnimatedDecor from "../ui/AnimatedDecor";
import Calculator from "../Calculator/Calculator";
import { FaCalculator } from "react-icons/fa";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className="w-full text-white shadow-md fixed top-0 left-0 z-30 "
      style={{ background: "rgba(15, 15, 15, 0.78)" }}
    >
      <div className="container flex justify-between items-center">
        <div className="font-bold text-lg">Логотип</div>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-[var(--color-muted)] transition px-4 py-2 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Burger for mobile */}
        <button
          className="md:hidden z-20"
          aria-label="Відкрити меню"
          onClick={() => setOpen((v) => !v)}
        >
          <TileBurgerIcon open={open} />
        </button>
        <button
          className="ml-4 px-4 py-2 bg-accent text-white rounded hover:bg-secondary transition hidden md:block"
          onClick={() => setCalcOpen(true)}
        >
          <FaCalculator />
        </button>
        {/* Mobile menu */}
        <div
          className={`
          fixed inset-0 bg-[var(--color-bg)] bg-opacity-95 flex flex-col items-center justify-center gap-8
          transition-all duration-300 z-10
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        >
          <AnimatedDecor
            animationType="bounce"
            delay={300}
            className="absolute top-8 left-8 w-12 h-12 bg-muted rounded-lg"
          />
          <AnimatedDecor
            animationType="slideIn"
            delay={500}
            className="absolute bottom-8 right-8 w-16 h-16 bg-muted rounded-lg transform rotate-45"
          />
          <AnimatedDecor
            animationType="fadeIn"
            delay={700}
            className="absolute top-1/2 left-4 w-8 h-8 bg-dark rounded-full"
          />
          <AnimatedDecor
            animationType="rotate"
            delay={900}
            className="absolute top-1/2 right-4 w-6 h-6 bg-accent/75 rounded-lg"
          />

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-2xl block p-3 font-semibold text-[var(--color-dark)] hover:text-[var(--color-accent)] transition rounded"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="px-6 py-3 bg-accent text-white rounded text-xl font-semibold hover:bg-secondary transition"
            onClick={() => {
              setCalcOpen(true);
              setOpen(false);
            }}
          >
            Калькулятор
          </button>
        </div>
      </div>
      <Calculator open={calcOpen} onClose={() => setCalcOpen(false)} />
    </header>
  );
};

export default Header;
