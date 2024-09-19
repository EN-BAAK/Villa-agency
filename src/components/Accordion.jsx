import PropTypes from 'prop-types';

const Accordion = ({ title, children, selectedId, id, handleClick }) => {
  return (
    <div
      className={`accordion ${id === selectedId ? "active" : ""}`}
    >
      <h4
        onClick={() => id === selectedId
          ? handleClick(null)
          : handleClick(id)}
      >{title}</h4>
      <p>{children}</p>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  selectedId: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Accordion;