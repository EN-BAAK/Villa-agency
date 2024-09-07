import "../style/topbar.css"
import AddressCard from "./AddressCard"
import SocialIcons from "./SocialIcons"

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="address">
          <AddressCard flex classIcon='envelope' address='info@company.com' />
          <AddressCard flex classIcon='map' address='Sunny Isles Beach, FL 33160' />
        </div>

        <div className="brands">
          <SocialIcons classIcon='facebook' />
          <SocialIcons classIcon='twitter' />
          <SocialIcons classIcon='linkedin-in' />
          <SocialIcons classIcon='instagram' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
