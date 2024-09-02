import "../style/Featured.css"
import feaImg from "../assets/featured.jpg"
import feaIcon from "../assets/featured-icon.png"
import ic1 from "../assets/info-icon-01.png"
import ic2 from "../assets/info-icon-02.png"
import ic3 from "../assets/info-icon-03.png"
import ic4 from "../assets/info-icon-04.png"

const Featured = () => {
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

          <h1>Best Appartment & Sae View</h1>

          <div className="card">
            <p className="card-title">Best useful links ?</p>

            <div className="card-body">
              <p>
                Get <span className="bold">the best villa</span> website template in HTML CSS and Bootstrap for your business. templateMo provides you the <a>best free CSS templates</a> in the world. please tell your friends about it.
              </p>

              <h4>How does this word ?</h4>

            </div>

            <h4 className="cart-footer">Why is Villa Agency the best ?</h4>
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
            <img src={ic2} alt="ic1" />

            <div className="note">
              <p>Contract</p>
              <span>Contract Ready</span>
            </div>
          </li>

          <li>
            <img src={ic3} alt="ic1" />

            <div className="note">
              <p>Payment</p>
              <span>Payment</span>
            </div>

            <span className="float">Control</span>
          </li>

          <li>
            <img src={ic4} alt="ic1" />

            <div className="note">
              <p>Safety</p>
              <span>24/7 Under</span>
            </div>

            <span className="float">Control</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Featured
