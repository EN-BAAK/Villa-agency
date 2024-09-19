import { useState } from "react"
import "../style/properties/Properties.css"
import Title from "../components/Title"
import data from "../config/properties.json"
import Card from "../components/Card"
import img1 from "../assets/property-01.jpg";
import img2 from "../assets/property-02.jpg";
import img3 from "../assets/property-03.jpg";
import img4 from "../assets/property-04.jpg";
import img5 from "../assets/property-05.jpg";
import img6 from "../assets/property-06.jpg";

const images = [img1, img2, img3, img4, img5, img6, img1, img5, img2]

const Properties = () => {
  const [type, setType] = useState("All")

  return (
    <div id='Properties'>
      <Title path="Properties" />


      <div className="container">
        <div className="bullets-holder">
          <button
            onClick={() => setType("All")}
            className={`bullet ${type === "All" ? "active" : ""}`} >Show All</button>
          <button
            onClick={() => setType("Apartment")}
            className={`bullet ${type === "Apartment" ? "active" : ""}`} >Apartment</button>
          <button
            onClick={() => setType("Villa House")}
            className={`bullet ${type === "Villa House" ? "active" : ""}`} >Villa House</button>
          <button
            onClick={() => setType("Penthouse")}
            className={`bullet ${type === "Penthouse" ? "active" : ""}`} >Penthouse</button>
        </div>

        <div className="content">
          {data.length &&
            data
              .filter(villa => type === "All" || type === villa.type)
              .map((villa, index) =>
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

        <div className="pagination">
          <div className="bullet active">1</div>
          <div className="bullet">2</div>
          <div className="bullet">3</div>
          <div className="bullet">4</div>
        </div>
      </div>
    </div>
  )
}

export default Properties
