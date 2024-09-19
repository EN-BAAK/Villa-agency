import PropTypes from 'prop-types';

const AddressCard = ({ classIcon, address, flex = false }) => {
  return (
    <div className={`address-card ${flex ? "flex" : ""}`}>
      <i className={`fa-solid fa-${classIcon}`}></i>
      <p>{address}</p>
    </div>
  );
}

AddressCard.propTypes = {
  classIcon: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  flex: PropTypes.bool,
};

export default AddressCard;