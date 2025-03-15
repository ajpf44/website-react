import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

import Router from "./Router.tsx";

const root: HTMLElement | null = document.getElementById("root");

createRoot(root!).render(
	<StrictMode>
		<Provider>
			<Router />
		</Provider>
	</StrictMode>
);
