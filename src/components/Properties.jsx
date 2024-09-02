import "../style/Properties.css";
import data from "../config/properties.json"
import Card from "./Card";
import img1 from "../assets/property-01.jpg";
import img2 from "../assets/property-02.jpg";
import img3 from "../assets/property-03.jpg";
import img4 from "../assets/property-04.jpg";
import img5 from "../assets/property-05.jpg";
import img6 from "../assets/property-06.jpg";

const images = [img1, img2, img3, img4, img5, img6, img1, img5, img2]

const Properties = () => {
  return (
    <div id="property">
      <div className="container">
        <p className="title">| Properties</p>
        <h2 className="subtitle">
          We Provide The <br /> Best Property <br /> You Like
        </h2>

        <div className="content">
          {data.length && data.map((villa, index) =>
            <Card
              key={index}
              cast={villa.cast}
              area={villa.area}
              floor={villa.floor}
              numberOfBathrooms={villa.numberOfBathrooms}
              numberOfBedrooms={villa.numberOfBedrooms}
              parking={villa.parking}
              title={villa.title}
              type={villa.type}
              uri={images[index]}
            />)}
        </div>
      </div>
    </div>
  );
};

export default Properties;
