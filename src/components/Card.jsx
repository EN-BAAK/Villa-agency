import PropTypes from "prop-types";

const Card = ({ uri, type, cast, title, numberOfBedrooms, numberOfBathrooms, area, floor, parking }) => {
  return (
    <div className="card">
      <img src={uri} alt="img" />

      <div className="card-header">
        <p className="type">{type}</p>
        <p className="cast">{cast}</p>
      </div>

      <h3>{title}</h3>

      <div className="card-body">
        <div className="break">
          <p>Bedrooms: <span>{numberOfBedrooms}</span></p>
          <p>Bathrooms: <span>{numberOfBathrooms}</span></p>
        </div>
        <div className="break">
          <p>Area: <span>{area}</span></p>
          <p>Floor: <span>{floor}</span></p>
        </div>
        <p>Parking: <span>{parking}</span></p>
      </div>

      <div className="card-footer">
        <button>Schedule a visit</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  uri: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numberOfBedrooms: PropTypes.number.isRequired,
  numberOfBathrooms: PropTypes.number.isRequired,
  area: PropTypes.string.isRequired,
  floor: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
};

export default Card;