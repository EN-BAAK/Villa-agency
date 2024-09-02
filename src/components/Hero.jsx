import { useState } from 'react';

import banner1 from "../assets/banner-01.jpg";
import banner2 from "../assets/banner-02.jpg";
import banner3 from "../assets/banner-03.jpg";

import "../style/Hero.css"

const Hero = () => {
  const banners = [banner1, banner2, banner3];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const changeBackground = (direction) => {
    let newIndex = currentBannerIndex + direction;
    if (newIndex < 0) {
      newIndex = banners.length - 1;
    } else if (newIndex >= banners.length) {
      newIndex = 0;
    }
    setCurrentBannerIndex(newIndex);
  };

  return (
    <div id="home" style={{ backgroundImage: `url(${banners[currentBannerIndex]})` }}>
      <div className="container">
        <p className="location">Toronto, <span>Canada</span></p>
        <h1>Huppy! <br /> Get the <br /> Best Villa <br /> For You</h1>
      </div>

      <span className="right-btn" onClick={() => changeBackground(1)}>
        <i className="fa-solid fa-chevron-right"></i>
      </span>

      <span className="left-btn" onClick={() => changeBackground(-1)}>
        <i className="fa-solid fa-chevron-left"></i>
      </span>

      <div className="bullets">
        {banners.map((banner, index) => (
          <span key={index} className={`bullet ${index === currentBannerIndex ? 'active' : ''}`} onClick={() => setCurrentBannerIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;