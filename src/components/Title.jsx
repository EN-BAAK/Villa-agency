import PropTypes from 'prop-types'
import "../style/Title.css"

const Title = ({ path }) => {
  return (
    <div className='Title'>
      <div>
        <p>Home / {path}</p>
        <h1>{path}</h1>
      </div>
    </div>
  )
}

Title.propTypes = {
  path: PropTypes.string.isRequired
};

export default Title
