import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="
      px-6 py-2 rounded 
      md:px-8 md:py-3 md:text-base
      bg-accent
      text-white 
      font-semibold 
      shadow 
      hover:bg-secondary 
      transition
      focus:outline-none
      focus:ring-2
      focus:ring-primary
      focus:ring-offset-2
      active:scale-95
    "
    {...props}
  >
    {children}
  </button>
);

export default Button;
