import { MainNav } from "./components/navs/MainNav";
import { Dropdown } from "./components/dropdowns/Dropdown";
import { DropdownLink } from "./components/dropdowns/DropdownLink";
import { Container } from "./components/Container";
import { Categories } from "./components/sections/Categories";
import { IncomeSection } from "./components/sections/IncomeSection";

function App() {
	return (
		<div className=" w-full">
			<div className="w-full">
				<MainNav />
			</div>

			<main className="h-full overflow-auto">
				<Container>
					<div className="flex items-center justify-between">
						<h2 className="font-bold text-2xl">Summary</h2>

						<Dropdown iconText="2024">
							<div className="absolute left-0 bg-white w-fit py-2 rounded-lg shadow-lg">
								<DropdownLink>2023</DropdownLink>
							</div>
						</Dropdown>
					</div>

					<IncomeSection />

					<Categories />
				</Container>
			</main>
		</div>
	);
}

export default App;
