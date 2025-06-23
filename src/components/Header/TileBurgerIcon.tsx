import React from "react";

interface Props {
  open?: boolean;
  className?: string;
}

const TileBurgerIcon: React.FC<Props> = ({ open = false, className = "" }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Верхня плитка */}
    <rect
      x="4"
      y="7"
      width="24"
      height="4"
      rx="2"
    fill="var(--color-surface)"
      style={{
        transition: "all 0.3s",
        transform: open
          ? "translateY(7px) rotate(45deg)"
          : "none",
        transformOrigin: "16px 9px",
      }}
    />
    {/* Середня плитка */}
    <rect
      x="4"
      y="14"
      width="24"
      height="4"
      rx="2"
      fill="var(--color-accent)"
      style={{
        transition: "all 0.3s",
        opacity: open ? 0 : 1,
      }}
    />
    {/* Нижня плитка */}
    <rect
      x="4"
      y="21"
      width="24"
      height="4"
      rx="2"
      fill="var(--color-secondary)"
      style={{
        transition: "all 0.3s",
        transform: open
          ? "translateY(-7px) rotate(-45deg)"
          : "none",
        transformOrigin: "16px 23px",
      }}
    />
  </svg>
);

export default TileBurgerIcon;