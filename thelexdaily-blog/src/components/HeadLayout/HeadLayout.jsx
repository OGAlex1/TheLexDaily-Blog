import React, { useState, useEffect } from "react";
import "./headlayout.scss";


import img1 from "../../assets/images/layout.jpg";
import img2 from "../../assets/images/layout2.jpg";
import img3 from "../../assets/images/layout3.jpg";

const slides = [
  {
    image: img1,
    title: "My Blog",
    text: "Welcome to my blog platform",
  },
  {
    image: img2,
    title: "Learn React",
    text: "Build modern web apps easily",
  },
  {
    image: img3,
    title: "Web Development",
    text: "Frontend & Backend skills",
  },
];

const HeadLayout = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // BACK
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  //AUTO SLIDE WITH PAUSE
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
      onMouseEnter={() => setIsPaused(true)}   // 
      onMouseLeave={() => setIsPaused(false)}  // 
    >
      
      
      <div className="overlay"></div>

   
   
      <div className="content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>
      </div>

  
  
      <button className="prev" onClick={prevSlide}>
        ⬅
      </button>

      <button className="next" onClick={nextSlide}>
        ➡
      </button>
    </div>
  );
};

export default HeadLayout;