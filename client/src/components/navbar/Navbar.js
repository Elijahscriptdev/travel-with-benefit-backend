import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
// import { Button } from "../button/Button";
import "./Navbar.css";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const authLinks = (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li className='nav-items'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className='nav-items'>
        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
          About
        </Link>
      </li>
      <li className='nav-items'>
        <a href='/#partner' className='nav-links' onClick={closeMobileMenu}>
          Our Partners
        </a>
      </li>
      <li className='nav-items'>
        <Link
          to='/bookings-listings'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Book a Ticket
        </Link>
      </li>

      <li className='nav-items'>
        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
          Dashboard <i className='fas fa-user'></i>
        </Link>
      </li>
      <li className='nav-items' onClick={closeMobileMenu}>
        <Link to='/' onClick={logout} className='nav-links'>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li className='nav-items'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className='nav-items'>
        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
          About
        </Link>
      </li>
      <li className='nav-items'>
        <a href='/#partner' className='nav-links' onClick={closeMobileMenu}>
          Our Partners
        </a>
      </li>
      <li className='nav-items'>
        <Link
          to='/bookings-listings'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Book a Ticket
        </Link>
      </li>

      <li className='nav-items'>
        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
          Login
        </Link>
      </li>
      <li className='nav-items'>
        <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
          Sign Up
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVEL <i className='fas fa-bus-alt'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {!loading && isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
