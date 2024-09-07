import PropTypes from 'prop-types';

const Specifications = ({ props }) => {
  return (
    <ul>
      {Object.entries(props).map(([key, value], index) => (
        <li key={index}>
          <p className="prime">{key}</p>
          <p className="second">{value}</p>
        </li>
      ))}
    </ul>
  );
};

Specifications.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Specifications;