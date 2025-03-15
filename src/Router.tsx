import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import App from "./pages/App";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";

function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Header />
			<Box maxWidth="1280px" margin="auto" p="1.2rem">
				<Routes>
					<Route path="/app" element={<App />} />
					<Route path="/" element={<Home />} />
					<Route path="/contato" element={<>contact page</>} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
}

export default Router;
