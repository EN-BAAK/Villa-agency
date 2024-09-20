import { useState } from 'react';
import '../style/NavBar.css';
import VisitButton from './VisitButton';
import AddressCard from './AddressCard';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const isActiveLink = (path) => location.pathname.toLowerCase() === path;
  const toggleActive = () => setActive(!active);

  return (
    <nav id='navbar'>
      <div className="container">
        <div className="logo">
          <h1>Villa</h1>
        </div>

        <div className='hold-right'>
          <ul className={`menu ${active ? "active" : ""}`}>
            <li className={isActiveLink("/") ? "active" : ""}>
              <Link to={"/"} >Home</Link>
            </li>
            <li className={isActiveLink("/properties") ? "active" : ""}>
              <Link to={"/properties"}>Properties</Link>
            </li>
            <li className={isActiveLink("/property-details") ? "active" : ""}>
              <Link to={"/property-details"}>Property Details</Link>
            </li>
            <li>Contact us</li>

            <div className="sm-content">
              <p>Schedule a visit</p>

              <div className="content">
                <AddressCard classIcon='envelope' address='info@company.com' />
                <AddressCard classIcon='map' address='Sunny Isles Beach, FL 33160' />
              </div>

              <div className="content">
                <SocialIcons classIcon='facebook' />
                <SocialIcons classIcon='twitter' />
                <SocialIcons classIcon='linkedin-in' />
                <SocialIcons classIcon='instagram' />
              </div>
            </div>
          </ul>

          <button className='bars-holder' onClick={toggleActive}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <VisitButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;