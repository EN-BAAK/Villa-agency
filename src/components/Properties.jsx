import "../style/Properties.css"
import Card from "./Card"
import img1 from "../assets/property-01.jpg"
import img2 from "../assets/property-02.jpg"
import img3 from "../assets/property-03.jpg"
import img4 from "../assets/property-04.jpg"
import img5 from "../assets/property-05.jpg"
import img6 from "../assets/property-06.jpg"

const Properties = () => {
  return (
    <div id="property">
      <div className="container">
        <p className="title">| Properties</p>
        <h2 className="subtitle">We Provide The <br /> Best Property <br /> You Like</h2>

        <div className="content">
          <Card
            uri={img1}
            type="Luxuury Villa"
            cast="$2.264.000"
            title="18 New Street Miami, OR 97219"
            numberOfBedrooms={8}
            numberOfBathrooms={8}
            area="545m2"
            floor="3"
            parking="6 spots"
          />
          <Card
            uri={img2}
            type="Luxuury Villa"
            cast="$1.180.000"
            title="54 Mid Steet Florida, OR 27001"
            numberOfBedrooms={6}
            numberOfBathrooms={5}
            area="450m2"
            floor="3"
            parking="8 spots"
          />
          <Card
            uri={img3}
            type="Luxuury Villa"
            cast="$1.460.00"
            title="54 Mid Steet Florida, OR 35870"
            numberOfBedrooms={5}
            numberOfBathrooms={4}
            area="225m2"
            floor="3"
            parking="10 spots"
          />
          <Card
            uri={img4}
            type="Apartment"
            cast="$584.500"
            title="12 New Street Miami, OR 1658"
            numberOfBedrooms={4}
            numberOfBathrooms={3}
            area="125m2"
            floor="25th"
            parking="6 cars"
          />
          <Card
            uri={img5}
            type="Penthouse"
            cast="$925.600"
            title="54 Mid Steet Florida, OR 1279"
            numberOfBedrooms={4}
            numberOfBathrooms={4}
            area="180m2"
            floor="38th"
            parking="2 cars"
          />
          <Card
            uri={img6}
            type="Modern Condo"
            cast="$450.00"
            title="22 New Street Potland, OR 1645"
            numberOfBedrooms={3}
            numberOfBathrooms={2}
            area="165m2"
            floor="26th"
            parking="3 cars"
          />
        </div>
      </div>
    </div>
  )
}

export default Properties
