import React from "react";
import Label from "./Label";
import InputText from "./InputText";

interface InputProps {
  label: string;
  htmlFor: string;
  type: string;
  name: string;
  id: string;
  value?: string | number;
  disable?: boolean;
  accept?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  htmlFor,
  type,
  name,
  id,
  value,
  disable,
  accept,
  onChange,
}) => {
  return (
    <>
      <div className="mb-3">
        <Label htmlFor={htmlFor}>{label}</Label>
      </div>
      <div className="mb-5">
        <InputText
          type={type}
          name={name}
          id={id}
          value={value}
          disable={disable}
          accept={accept}
          onChange={onChange}
        />
      </div>
    </>

  );
};

export default Input;
