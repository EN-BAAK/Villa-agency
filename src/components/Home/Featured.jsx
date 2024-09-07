import { useState } from 'react';
import "../../style/Featured.css";
import feaImg from "../../assets/featured.jpg";
import feaIcon from "../../assets/featured-icon.png";
import ic1 from "../../assets/info-icon-01.png";
import ic2 from "../../assets/info-icon-02.png";
import ic3 from "../../assets/info-icon-03.png";
import ic4 from "../../assets/info-icon-04.png";

const Featured = () => {
  const [activeParagraph, setActiveParagraph] = useState(null);

  const toggleActive = (paraId) => {
    setActiveParagraph(activeParagraph === paraId ? null : paraId);
  };

  return (
    <div id="features">
      <div className="container">
        <div className="image-holder">
          <img src={feaImg} alt="feature image" />
          <span className="icon">
            <img src={feaIcon} alt="feature icon" />
          </span>
        </div>

        <div className="info">
          <p className="title">| Featured</p>
          <h1>Best Apartment & Sae View</h1>

          <div className="card">
            <div className="card-body">
              <div className="border">
                <h4 onClick={() => toggleActive("p3")} data-para="p3" className={`${activeParagraph === "p3" ? "active" : ""}`}>Best useful links ?</h4>
                <p className={activeParagraph === "p3" ? "active" : ""} data-id="p3">
                  Get <span className="bold">the best villa</span> website
                  template in HTML CSS and Bootstrap for your business. templateMo
                  provides you the <a>best free CSS templates</a> in the world.
                  please tell your friends about it.
                </p>
              </div>

              <div className='border'>
                <h4 onClick={() => toggleActive("p1")} data-para="p1" className={`${activeParagraph === "p1" ? "active" : ""}`}>How does this word ?</h4>
                <p className={activeParagraph === "p1" ? "active" : ""} data-id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam fugit accusantium odit tenetur perferendis!</p>
              </div>

              <h4 onClick={() => toggleActive("p2")} className={`${activeParagraph === "p2" ? "active" : ""} card-footer`} data-para="p2">Why is Villa Agency the best ?</h4>
              <p className={activeParagraph === "p2" ? "active" : ""} data-id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod molestias exercitationem nam aut velit?</p>
            </div>

          </div>
        </div>

        <ul className="offers">
          <li>
            <img src={ic1} alt="ic1" />
            <div className="note">
              <p>250 m2</p>
              <span>Total Flat Space</span>
            </div>
          </li>
          <li>
            <img src={ic2} alt="ic2" />
            <div className="note">
              <p>Contract</p>
              <span>Contract Ready</span>
            </div>
          </li>
          <li>
            <img src={ic3} alt="ic3" />
            <div className="note">
              <p>Payment</p>
              <span>Payment</span>
            </div>
            <span className="float">Control</span>
          </li>
          <li>
            <img src={ic4} alt="ic4" />
            <div className="note">
              <p>Safety</p>
              <span>24/7 Under</span>
            </div>
            <span className="float">Control</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Featured;