import React from "react";

interface ButtonProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type, className}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
