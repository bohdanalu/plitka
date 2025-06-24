import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaEnvelope } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/constants";

const socials = [
  {
    href: "https://t.me/yourtelegram",
    label: "Telegram",
    icon: <FaTelegramPlane />,
  },
  {
    href: "https://www.instagram.com/yourinsta",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  { href: "mailto:your@email.com", label: "Email", icon: <FaEnvelope /> },
];

const Footer: React.FC = () => (
  <footer className="w-full bg-dark text-white py-8 mt-16">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="hover:text-muted transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="text-center md:text-left">
        <div className="font-semibold mb-1">Контакти:</div>
        <div>+38 (067) 123-45-67</div>
        <div>м. Київ, вул. Кам'яна, 1</div>
        <div>
          <a
            href="mailto:your@email.com"
            className="underline hover:text-muted transition"
          >
            your@email.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="hover:text-muted transition text-2xl"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="text-center text-xs text-muted mt-6">
      © {new Date().getFullYear()} Твоя компанія. Всі права захищені.
    </div>
  </footer>
);

export default Footer;
