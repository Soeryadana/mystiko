import React from "react";

interface InputProps {
  type: string;
  name: string;
  id: string;
  value?: string | number;
  disable?: boolean;
  accept?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputProps> = ({
  type,
  name,
  id,
  value,
  disable,
  accept,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      disabled={disable}
      accept={accept}
      onChange={onChange}
      className={
        type === "file"
          ? "file-input file-input-bordered w-full "
          : "input input-bordered w-full "
      }
    />
  );
};

export default InputText;
