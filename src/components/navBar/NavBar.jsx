import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"; // Import Nav from react-bootstrap
import DropDown from "./DropDown";
import "./NavBar.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  // hamburger nav bar active
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); //call close menu function
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo">
        <span className="letter">P</span>
        <span className="letter">L</span>
        <span className="letter">A</span>
        <span className="letter">N</span>
        <span className="letter">-</span>
        <span className="letter">T</span>
        <span className="letter">Y</span>
      </div>

      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeMenu}
              className="navbar--content"
            >
              Home
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={closeMenu}
              className="navbar--content"
            >
              About
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={closeMenu}
              className="navbar--content"
            >
              Contact
            </Nav.Link>
          </li>
          <DropDown />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

/*
  import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"; // Import Nav from react-bootstrap
import Dropdown from "./DropDown";
import "./NavBar.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // hamburger nav bar active
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); //call close menu function
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo">
        <span className="letter">P</span>
        <span className="letter">L</span>
        <span className="letter">A</span>
        <span className="letter">N</span>
        <span className="letter">-</span>
        <span className="letter">T</span>
        <span className="letter">Y</span>
      </div>

      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeMenu}
              className="navbar--content"
            >
              Home
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              as={Link}
              to="/waterTemp"
              onClick={closeMenu}
              className="navbar--content"
            >
              Water Temperature
            </Nav.Link>
          </li>
          <li>
            {" "}
            <Link to="/services" className="nav-links">
              <Dropdown />
            </Link>
          </li>
          {/* Add additional navigation links here */

/*</ul>
      </div>
    </nav>
  );
}

export default Navbar;*/
