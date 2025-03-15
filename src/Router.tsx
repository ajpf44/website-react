import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Header from "./components/Header";

function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contato" element={<>contact page</>} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
