import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

import Router from "./Router.tsx";
import Header from "./components/Header.tsx";
import { Wrap } from "@chakra-ui/react";

const root: HTMLElement | null = document.getElementById("root");

createRoot(root!).render(
	<StrictMode>
		<Provider>
			<Wrap gap="3rem">
				<Header />
				<Router />
			</Wrap>
		</Provider>
	</StrictMode>
);
