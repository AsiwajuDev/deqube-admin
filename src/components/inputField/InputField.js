import React from "react";

const InputField = ({
  type,
  id,
  name,
  value,
  onChange,
  onClick,
  className,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default InputField;
