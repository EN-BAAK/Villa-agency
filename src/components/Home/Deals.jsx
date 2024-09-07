import "../../style/Deal.css";
import data from "../../config/Deals.json";
import img1 from "../../assets/property-05.jpg";
import img2 from "../../assets/property-06.jpg";
import img3 from "../../assets/property-03.jpg";
import VisitButton from "../VisitButton"
import { useState } from "react";
import Specifications from "../Specifications";
const images = [img1, img2, img3];
const Deals = () => {
  const [typeIndex, settypeIndex] = useState(0);
  return (
    <div id="deal">
      <div className="container">
        <p className="title">| Best Deal</p>
        <div className="header">
          <h1>
            Find Your Best <br /> Deal Right Now !
          </h1>

          <ul>
            {data.types.map((element, index) => (
              <li
                key={index}
                className={index == typeIndex ? "active" : ""}
                onClick={() => settypeIndex(index)}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>

        <div className="content">

          {data.info.length &&
            <Specifications
              props={data.info[typeIndex]}
            />}

          <div className="image-holder">
            <img src={images[typeIndex]} />
          </div>

          <div className="info">
            <h4>{data.titles[typeIndex]}</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eius nemo aut sapiente, iure, aperiam velit unde qui suscipit
              assumenda, magnam adipisci quos sit ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              illo, consequatur sint aliquam quod enim ut iste labore, assumenda
              dicta doloribus quos iusto ratione earum?
            </p>

            <VisitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
