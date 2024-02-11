
import PropTypes from 'prop-types'

export const DropdownLink = ({ children}) => {
  return (
    <a
      href="#"
      className=" px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-slate-100 inline-block w-full text-left"
    >
      {children}
    </a>
  )
}

DropdownLink.propTypes = {
  children: PropTypes.node.isRequired,
}
