import { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Nav from "./Tabs";

let lastScrollY = window.scrollY;

// window.addEventListener("scroll", async () => {
// 	if (lastScrollY < window.scrollY) console.log("descendo");

// 	if (lastScrollY > window.scrollY) console.log("subindo");

// 	lastScrollY = window.scrollY;

// 	setTimeout(() => {}, 1000);
// });

function Header(): JSX.Element {
	return (
		<Box position="sticky" top="0" zIndex={100} shadow={"md"} backgroundColor={"whiteAlpha.900"}>
			<header>
                <Flex
                    paddingBlock={"0.8rem"}
                    paddingInline={"0.5rem"}
                    align="center"
                    justify="space-between"
                    margin={"auto"}
                    maxW={"1000px"}
                >
                    <Text fontSize="xl" fontWeight="bolder" fontFamily="serif">
                        @ajpf44
                    </Text>
                    <Nav></Nav>
                </Flex>
            </header>
		</Box>
	);
}

export default Header;
