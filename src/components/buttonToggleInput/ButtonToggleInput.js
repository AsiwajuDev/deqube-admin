import React from "react";
import PropTypes from "prop-types";
import InputField from "../inputField/InputField";

const ButtonToggleInput = ({
  title,
  body,
  onClick,
  onChange,
  className,
  bodyLine,
}) => {
  return (
    <div className="flex items-center my-2">
      <div className="">
        <span className="text-2xl">{title}</span>
        <p className={className}>{body}</p>
        <span className="block text-base">{bodyLine}</span>
      </div>

      <InputField
        className="input input--switch ml-auto border-2 border-red-600"
        type="checkbox"
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};

ButtonToggleInput.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default ButtonToggleInput;
