import PropTypes from "prop-types";

export const Money = ({ amount, currency, size = 'lg' }) => {
	const numberWithCommas = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	amount = numberWithCommas(amount);
	return (
		<p className={`text-gray-600 font-medium text-${size}`}>
			{amount}
			<span className="text-gray-300 ml-1">{currency}</span>
		</p>
	);
};

Money.propTypes = {
	amount: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg','xl','2xl','3xl','4xl','5xl']),
};
