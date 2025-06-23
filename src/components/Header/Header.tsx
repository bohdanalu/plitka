import React, { useState } from "react";
import TileBurgerIcon from "./TileBurgerIcon";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "portfolio", label: "Галерея" },
  { href: "/calculator", label: "Калькулятор" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full px-4 md:px-8 py-3 flex justify-between items-center text-white shadow-md fixed top-0 left-0 z-30"
      style={{ background: "rgba(15, 15, 15, 0.78)" }}
    >
      <div className="font-bold text-lg">Логотип</div>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="hover:text-[var(--color-muted)] transition"
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
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-2xl font-semibold text-[var(--color-dark)] hover:text-[var(--color-accent)] transition"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
