import PropTypes from "prop-types"

const SocialIcons = ({ classIcon }) => {
  return (
    <div className="social-icons">
      <i className={`fa-brands fa-${classIcon}`} />
    </div>
  )
}

SocialIcons.propTypes = {
  classIcon: PropTypes.string.isRequired,
};

export default SocialIcons
