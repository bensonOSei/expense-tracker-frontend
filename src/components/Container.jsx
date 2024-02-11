import PropTypes from "prop-types";

export const Container = ({ children, className }) => {
	return (
		<div className={`w-full max-w-6xl mx-auto p-5 ${className}`}>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
