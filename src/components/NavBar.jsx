import '../style/NavBar.css'

const NavBar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".nav-menu")
    menu.classList.toggle("active")
  }
  return (
    <>
      <div className='topNav'>
        <section className=".container">
          <div className=".header">
            <div className="top-bar">
              <ul className="reach-out">
                <li className="column"><span><i className="fa-solid fa-envelope"></i></span>info@company.com</li>
                <li><span><i className="fa-solid fa-map"></i></span>Sunny Isles Beach, FL 33160</li>
              </ul>
              <ul className="social">
                <li><span><i className="fa-brands fa-facebook"></i></span></li>
                <li><span><i className="fa-brands fa-twitter"></i></span></li>
                <li><span><i className="fa-brands fa-linkedin"></i></span></li>
                <li><span><i className="fa-brands fa-instagram"></i></span></li>
              </ul>
            </div>
            {/* <hr /> */}
            <nav>
              <h1 className="logo">VILLA</h1>
              <div className="items">
                <ul>
                  <li>Home</li>
                  <li>Properties</li>
                  <li>Property Details</li>
                  <li>Contact Us</li>
                </ul>
                <button className="btn">
                  <span className="circle">
                    <span className="calander"><i className="fa-solid fa-calendar"></i></span>
                  </span>
                  <span className="text">Schedule a visit</span>
                </button>
              </div>
              <button className="bar" onClick={() => showMenu()}><i className="fa-solid fa-bars-staggered"></i></button>
            </nav>
          </div>
        </section>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact Us</li>
          </ul>
          <button className="btn"> Schedule a visit</button>
          <ul className="reach-out">
            <li className="column"><span><i className="fa-solid fa-envelope"></i></span>info@company.com</li>
            <li><span><i className="fa-solid fa-map"></i></span>Sunny Isles Beach, FL 33160</li>

          </ul>
          <ul className="social">
            <li><span><i className="fa-brands fa-facebook"></i></span></li>
            <li><span><i className="fa-brands fa-twitter"></i></span></li>
            <li><span><i className="fa-brands fa-linkedin"></i></span></li>
            <li><span><i className="fa-brands fa-instagram"></i></span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar


