import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home"
import App from "./pages/App";

function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/app" element={<App />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
