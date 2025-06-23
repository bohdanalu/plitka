import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full px-4 py-3 bg-[var(--color-muted)] text-[var(--color-dark)] text-center">
    © {new Date().getFullYear()} Твоя компанія. Всі права захищені.
  </footer>
);

export default Footer;