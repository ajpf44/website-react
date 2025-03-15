import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

import Router from "./Router.tsx";
import { Box } from "@chakra-ui/react";

import Header from "./components/Header.tsx";

const root: HTMLElement | null = document.getElementById("root");

createRoot(root!).render(
	<StrictMode>
		<Provider>
			<Header />
			<Box maxWidth="1280px" margin="auto" p="1.2rem">
				<Router />
			</Box>
		</Provider>
	</StrictMode>
);
