import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo AND About */}
        <div className="footer-col">
          <h2 className="footer-logo">MyBlog</h2>
          <p className="footer-text">
            Sharing insights, tutorials, and ideas to help you grow in tech and life.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Explore</h3>
          <a href="#">Home</a>
          <a href="#">Articles</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>

        {/* Resource */}
        <div className="footer-col">
          <h3>Resources</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Help</a>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <p className="footer-text">Get latest posts directly in your inbox.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>

      </div>

      {/* Bottom Layout */}
      <div className="footer-bottom">
        <p>© 2026 MyBlog. All rights reserved.</p>

        <div className="socials">
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">📸</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;