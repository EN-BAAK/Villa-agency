import "../style/Deal.css"
import img1 from "../assets/deal-01.jpg"

const Deals = () => {
  return (
    <div id="deal">
      <div className="container">
        <p className="title">| Best Deal</p>

        <div className="header">
          <h1>Find Your Best <br /> Deal Right Now !</h1>

          <ul>
            <li className="active">Appartment</li>
            <li>Villa House</li>
            <li>Villa Penthouse</li>
          </ul>
        </div>

        <div className="content">
          <ul>
            <li>
              <p className="gray">Total flat space</p>
              <p className="black">185 m2</p>
            </li>

            <li>
              <p className="gray">Floor number</p>
              <p className="black">26th</p>
            </li>

            <li>
              <p className="gray">Number of rooms</p>
              <p className="black">4</p>
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
            <img src={img1} alt="img" />
          </div>

          <div className="info">
            <h4>Extra Info About Property</h4>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius nemo aut sapiente, iure, aperiam velit unde qui suscipit assumenda, magnam adipisci quos sit ad.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, illo, consequatur sint aliquam quod enim ut iste labore, assumenda dicta doloribus quos iusto ratione earum?</p>

            <div className="btn">
              <div className="circle">
                <i className="fa-solid fa-gift"></i>
              </div>
              <p>Schedule a visit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
