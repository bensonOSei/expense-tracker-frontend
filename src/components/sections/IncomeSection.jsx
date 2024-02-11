import { useRef } from "react";
import { DiffFromLastMonth } from "../others/DiffFromLastMonth";
import { Money } from "../others/Money";

export const IncomeSection = () => {
	// const total = 100000;
	const divLengthRef = useRef(null);

	return (
		<div className="grid sm:grid-cols-2 w-full my-10 sm:gap-0 gap-5">
			<div>
				<h3 className="text-md font-medium">Total Expenditure</h3>
				<div className="flex items-center">
					<Money
						amount={100000}
						currency="USD"
						size="2xl"
					/>
					<p className="text-xs text-gray-400">
						<DiffFromLastMonth percentage={1.5} />
					</p>
				</div>
			</div>
			<div
				ref={divLengthRef}
				className="flex items-start justify-start mt-4">
				<div className="w-full h-2 flex items-center rounded-md gap-0.5">
					<div
						className="relative group"
						style={{
							width: "70%",
							height: "100%",
							background: "red",
						}}>
						<div className="absolute hidden -top-14 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md w-fit h-fit z-50 group-hover:block text-center transition">
							<p className="text-xs font-medium">70%</p>
							<p className="text-xs font-medium">Entertainment</p>
						</div>
					</div>
					<div
						className="relative group"
						style={{
							width: "20%",
							height: "100%",
							background: "blue",
						}}>
						<div className="absolute hidden -top-14 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md w-fit h-fit z-50 group-hover:block text-center transition">
							<p className="text-xs font-medium">20%</p>
							<p className="text-xs font-medium">
								Transportation
							</p>
						</div>
					</div>
					<div
						className="relative group"
						style={{
							width: "10%",
							height: "100%",
							background: "yellow",
						}}>
						<div className="absolute hidden -top-14 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md w-fit h-fit z-50 group-hover:block text-center transition">
							<p className="text-xs font-medium">10%</p>
							<p className="text-xs font-medium">Food</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
