import React from "react";
import "./aboutus.scss";

const AboutUs = () => {
  

  return (
    <div className="container">
 
    
      <div className="brand">
        <h1>TheLexDaily</h1>
        <span>Blog • Insights • Stories • Ideas</span>
      </div>

  
      <p className="intro">
        Welcome to <span className="highlight">TheLexDaily</span>, a modern blog built to deliver
        powerful insights, daily inspiration, and meaningful stories across technology, lifestyle,
        creativity, and personal growth. We believe in sharing content that informs, inspires, and impacts.
      </p>

       
      <div className="grid">

        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p>
            To deliver clear, valuable, and practical content that helps readers grow in knowledge, mindset, and skills every day.
          </p>
        </div>

        <div className="card">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a trusted digital hub where ideas meet inspiration and readers find daily motivation to improve their lives.
          </p>
        </div>

        <div className="card">
          <h3>💡 What We Cover</h3>
          <p>
            Technology trends, web development, productivity tips, lifestyle content, and creative thinking for modern minds.
          </p>
        </div>

      </div>

      <div className="footer-note">
        © 2026 TheLexDaily Blog. Built with passion and purpose.
      </div>

    </div>
  );
};

export default AboutUs;