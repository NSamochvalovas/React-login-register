import React from "react";
import PropTypes from "prop-types";


const Notification = ({ handleClick, children }) => {
  return (
    <div className="notification">
      {handleClick && (
        <button className="delete" onClick={handleClick}></button>
      )}
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Notification;
