import React from "react";
import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>  
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};


export default Hero;
