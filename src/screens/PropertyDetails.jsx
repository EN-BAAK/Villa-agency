import Deals from '../components/Deals'
import Title from '../components/Title'
import img from "../assets/property-01.jpg"
import ic1 from "../assets/info-icon-01.png";
import ic2 from "../assets/info-icon-02.png";
import ic3 from "../assets/info-icon-03.png";
import ic4 from "../assets/info-icon-04.png";
import Accordion from "../components/Accordion"
import "../style/PropertyDetails/PropertyDetails.css"
import { useState } from 'react';

const PropertyDetails = () => {
  const [activeParagraph, setActiveParagraph] = useState(null);

  return (
    <div id='Property-details'>
      <Title path='Property Details' />

      <section className="container">
        <div className="image-holder">
          <img src={img} alt="feature image" />
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
      </section>

      <div className="container apartment">
        <p className="determined">Apartment</p>

        <h2>24 New Street Miami, OR 24560</h2>
        <p className='desc'>
          Get <span className='bold'>the best villa agency</span> HTML CSS Bootstrap template for your website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus voluptatum, deserunt perspiciatis culpa dolor sed quisquam accusantium nemo hic eos aut voluptas ad amet consequatur eligendi corrupti! Consequatur, eaque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam quia ducimus amet accusantium provident saepe suscipit eaque, est ex dicta alias, blanditiis repudiandae ullam quas non repellendus earum esse!
        </p>

        <div className="card">
          <div className="card-body">
            <Accordion
              title='Best useful links ?'
              id={1}
              selectedId={activeParagraph}
              handleClick={(id) => setActiveParagraph(id)}
            >
              Get <span className="bold">the best villa</span> website
              template in HTML CSS and Bootstrap for your business. templateMo
              provides you the <a>best free CSS templates</a> in the world.
              please tell your friends about it.
            </Accordion>

            <Accordion
              title='How does this word ?'
              id={2}
              selectedId={activeParagraph}
              handleClick={(id) => setActiveParagraph(id)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam fugit accusantium odit tenetur perferendis!
            </Accordion>

            <Accordion
              title='Why is Villa Agency the best ?'
              id={3}
              selectedId={activeParagraph}
              handleClick={(id) => setActiveParagraph(id)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod molestias exercitationem nam aut velit?
            </Accordion>
          </div>
        </div>
      </div>

      <Deals />
    </div>
  )
}

export default PropertyDetails
