import React from "react";
import PropTypes from "prop-types";


const TextInput = ({ type, label, placeholder, value, handleChange }) => {
  return (
    <div className="field">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <div className="control">
        <input
          className="input"
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;