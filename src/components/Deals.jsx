import "../style/Deal.css";
import data from "../config/Deals.json";
import img1 from "../assets/property-05.jpg";
import img2 from "../assets/property-06.jpg";
import img3 from "../assets/property-03.jpg";
import { useState } from "react";
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
                className={index == typeIndex && "active"}
                onClick={() => settypeIndex(index)}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          <ul>
            <li>
              <p className="gray">Total flat space</p>
              <p className="black">{data.info[typeIndex].totalFlatSpace}</p>
            </li>

            <li>
              <p className="gray">Floor number</p>
              <p className="black">{data.info[typeIndex].floorNumber}</p>
            </li>

            <li>
              <p className="gray">Number of rooms</p>
              <p className="black">{data.info[typeIndex].numberOfRooms}</p>
            </li>

            <li>
              <p className="gray">Parking Available</p>
              <p className="black">Yes</p>
            </li>

            <li>
              <p className="gray">Payment process</p>
              <p className="black">Bank</p>
            </li>
          </ul>

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

            <div className="btn">
              <div className="circle">
                <i className="fa-solid fa-calendar"></i>
              </div>
              <p>Schedule a visit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
