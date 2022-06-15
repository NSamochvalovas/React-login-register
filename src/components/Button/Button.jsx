import React from "react";
import PropTypes from "prop-types";


const Button = ({ type, children, handleClick }) => {
  return (
   <button className="button is-info" type={type} onClick={handleClick}>
    {children}
   </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
