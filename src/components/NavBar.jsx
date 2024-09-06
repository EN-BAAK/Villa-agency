import { useState } from 'react'
import '../style/NavBar.css'

const NavBar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav id='navbar'>
      <div className="container">
        <div className="logo">
          <h1>Villa</h1>
        </div>

        <div className='hold-right'>
          <ul className={active ? "active" : ""}>
            <li className='active'>Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact us</li>
          </ul>

          <button
            className='bars-holder'
            onClick={() => setActive(!active)}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="visit">
            <div className="circle">
              <i className="fa-solid fa-calendar"></i>
            </div>

            <p>Schedule a visit</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar


