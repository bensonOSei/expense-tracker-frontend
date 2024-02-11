import { useCallback, useEffect, useState } from "react";
import { Container } from "../Container";
import axios from "axios";

export const MainNav = () => {
	const [userImage, setUserImage] = useState("");
	const [userName, setUserName] = useState("");

	const getRandomUser = useCallback(async () => {
		try {
			const response = await axios.get("https://randomuser.me/api/");
			const data = response.data.results[0];
			setUserImage(data.picture.thumbnail);
			setUserName(`${data.name.first} ${data.name.last}`);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getRandomUser();
	}, [getRandomUser]);

	return (
		<Container className="flex items-center justify-between p-5">
			<div className="flex items-center">
				{/* <img src="" alt="logo" className="h-10 w-10" /> */}
				<h1 className="text-2xl font-bold">MoneyDeyRun</h1>
			</div>

			<div className="flex items-center">
				<div className="mr-5">
					<p className="text-gray-500">Hi, {userName}</p>
				</div>
				<div className="w-10 h-10 rounded-full bg-slate-200">
					<img
						src={userImage}
						alt="profile"
						className="w-full h-full rounded-full"
					/>
				</div>
			</div>
		</Container>
	);
};
