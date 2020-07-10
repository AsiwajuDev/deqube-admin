import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputTextArea = ({
  name,
  placeholder,
  value,
  id,
  onChange,
  onClick,
  placeholder,
}) => {
  return (
    <textarea
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

InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
