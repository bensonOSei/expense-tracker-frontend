import {
	faArrowTrendDown,
	faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Money } from "../others/Money";
import { DiffFromLastMonth } from "../others/DiffFromLastMonth";

export const MoneySummaryCard = ({
	title,
	incrementPercentage,
	amount,
	currency,
	typeOfValue = "positive",
}) => {
	const color =
		typeOfValue === "positive" ? "text-green-700" : "text-red-700";

	const icon = typeOfValue !== "positive" ? faArrowTrendUp : faArrowTrendDown;

	return (
		<div className="w-full max-w-sm hover:bg-slate-100/40 p-2 border border-slate-200/50 rounded-md cursor-pointer shadow-xl shadow-slate-200/60">
			<div className={`flex items-center justify-between ${color}`}>
				<p className="font-bold">{title}</p>
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className="text-gray-600 font-medium text-lg mt-2">
				<Money
					amount={amount}
					currency={currency}
				/>
			</div>

			<p className={`${color} text-xs mt-1`}>
				<FontAwesomeIcon icon={icon} />
				<DiffFromLastMonth percentage={incrementPercentage} />
			</p>
		</div>
	);
};

MoneySummaryCard.propTypes = {
	title: PropTypes.string.isRequired,
	incrementPercentage: PropTypes.number.isRequired,
	amount: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	typeOfValue: PropTypes.oneOf(["positive", "negative"]),
};
