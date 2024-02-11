import PropTypes from 'prop-types'

export const DiffFromLastMonth = ({ percentage }) => {
  return (
<span className="ml-1">{percentage}% vs last month</span>   )
}

DiffFromLastMonth.propTypes = {
  percentage: PropTypes.number.isRequired,
}
