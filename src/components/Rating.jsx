import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const renderStart = () => {
    let res = []

    for (let i = 1; i < 6; i++) {
      res.push(
        <i
          style={{ color }}
          className={
            value >= i ? 'fas fa-star' : value >= i - 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
          }
        />,
      )
    }
    return res.map((item, i) => <span key={i}>{item} </span>)
  }
  return (
    <div>
      {renderStart()}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
  value: 0,
}

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
export default Rating
