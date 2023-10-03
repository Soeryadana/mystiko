import React from "react";

interface LabelProps {
  children: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-xl">
      {children}
    </label>
  );
};

export default Label;
