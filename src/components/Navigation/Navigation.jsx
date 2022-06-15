import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const publicLinks = [
  { url: "/", title: "Login" },
  { url: "/register", title: "Register" },
];

const privateLinks = [{ url: "/home", title: "Home" }];

const Navigation = () => {
  const navigate = useNavigate();
  const links = localStorage.getItem("token") ? privateLinks : publicLinks;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {links && (
      <div className="navbar-menu">
        <div className="navbar-start">
          {links.map((link) => (
            <Link className='navbar-item' to={link.url}>{link.title}</Link>
          ))}
        </div>
      </div>        
      )}
      {localStorage.getItem("token") && (
        <div className='navbar-end'>
        <div className='navbar-item'>
          <Button handleClick={() => {
            localStorage.removeItem("token");
            navigate("/")
          }}>Logout</Button>
        </div>
      </div>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  link: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }))
}

export default Navigation
