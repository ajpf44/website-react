import { JSX } from "react"

import {Center} from "@chakra-ui/react"
import HomeGreetings from "../components/home/HomeGreetings"
import Projects from "../components/home/Projects";

function Home(): JSX.Element {
		return(
			<>
				<Center width="100%">
					<HomeGreetings/>	
				</Center>
				<Center width="100%">
					<Projects />
				</Center>
			</>
		)
}

export default Home;
