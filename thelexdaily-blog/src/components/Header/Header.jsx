import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="header">
        <div className="container">

          {/* Logo */}
          <div className="logo">The LexDaily Blog</div>

          {/* MENU BUTTON (MOBILE) */}
          <button className="menu-btn" onClick={toggleMenu}>☰</button>

          {/* Navigation */}
          <nav className="nav">
            <div><a href="#">Home</a></div>
            <div><a href="#">Articles</a></div>

            <div className="dropdown">
              <div>
                <a href="#" className="dropbtn">Categories ▾</a>
              </div>
              <div className="dropdown-content">
                <a href="#tech">Tech</a>
                <a href="#news">News</a>
                <a href="#sports">Sports</a>
              </div>
            </div>

            <div className="abtdown">
              <a href="#">About</a>
            </div>
          </nav>

          {/* Actions Panel */}
          <div className="actions">
            <div className="search-area">
              <label htmlFor="search" className="search-btn search-icon">🔍</label>
              <input className="search-btn search-box" type="text" id="search" />
            </div>

            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>

        </div>
      </header>

      {/* SIDEBAR (MOBILE ONLY) */}
      <div className={`sidebar ${open ? "active" : ""}`} id="sidebar">
        <button className="close-btn" onClick={toggleMenu}>✖</button>

        <nav className="mobile-nav">
          <div><a href="#">Home</a></div>
          <div><a href="#">Articles</a></div>

          <div className="dropdown">
            <div>
              <a href="#" className="dropbtn">Categories ▾</a>
            </div>
            <div className="dropdown-content">
              <a href="#tech">Tech</a>
              <a href="#news">News</a>
              <a href="#sports">Sports</a>
            </div>
          </div>

          <div>
            <a href="#">About</a>
          </div>
        </nav>

        <div className="search-area">
          <label className="search-btn">🔍</label>
          <input
            className="search-btn search-box"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div
        className={`overlay ${open ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Header;