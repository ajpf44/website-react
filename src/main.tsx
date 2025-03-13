import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

import Router from "./Router.tsx";
import Header from "./components/Header.tsx"

import { Center } from "@chakra-ui/react";

const root: HTMLElement | null = document.getElementById("root");

createRoot(root!).render(
	<StrictMode>
		<Provider>
			<Header />
			<Center width="100vw" display="flex" flexDirection="column">
				<Router />
			</Center>
		</Provider>
	</StrictMode>
);
