// import React from 'react'
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navigation">
      <div className="social">
        <div className="face">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="you">
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="insta">
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="hamburger">
        <div className="burger">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
