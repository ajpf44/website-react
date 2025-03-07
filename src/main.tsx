import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

import App from "./pages/App.tsx";
import Header from "./components/Header.tsx";
import { Box, Flex } from "@chakra-ui/react";

const root: HTMLElement | null = document.getElementById("root");

createRoot(root!).render(
    <StrictMode>
        <Provider>
            <Flex>
                <Header />
                <Box>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Flex>
        </Provider>
    </StrictMode>
);
