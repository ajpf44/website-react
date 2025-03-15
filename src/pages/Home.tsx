import { JSX } from "react";

import HomeGreetings from "../components/home/HomeGreetings";
import Projects from "../components/home/Projects";

function Home(): JSX.Element {
	return (
		<>
			<HomeGreetings />
			<Projects />
		</>
	);
}

export default Home;
