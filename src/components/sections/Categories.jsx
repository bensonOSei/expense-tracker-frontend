import { MoneySummaryCard } from "../cards/MoneySummaryCard";

export const Categories = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-3 mt-5 w-full">
			<MoneySummaryCard
				title="Entertainment"
				incrementPercentage={20}
				amount={1200000}
				currency="USD"
				typeOfValue="negative"
			/>
			<MoneySummaryCard
				title="Transportation"
				incrementPercentage={1.5}
				amount={1200}
				currency="USD"
				typeOfValue="negative"
			/>
			<MoneySummaryCard
				title="Food"
				incrementPercentage={-1.5}
				amount={200}
				currency="USD"
				typeOfValue="positive"
			/>
			<MoneySummaryCard
				title="Clothing"
				incrementPercentage={-100}
				amount={0}
				currency="USD"
				typeOfValue="positive"
			/>
			<MoneySummaryCard
				title="Rent"
				incrementPercentage={100}
				amount={700}
				currency="USD"
				typeOfValue="negative"
			/>
			<MoneySummaryCard
				title="Utilities"
				incrementPercentage={10.45}
				amount={340}
				currency="USD"
				typeOfValue="negative"
			/>
		</div>
	);
};
