import '../style/NavBar.css'

const TopBar = () => {
  return (
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
  )
}

export default TopBar
