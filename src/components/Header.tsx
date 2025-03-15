import { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Nav from "./Nav";

function Header(): JSX.Element {
	return (
		<Box
			position="sticky"
			top="0"
			zIndex={3}
			shadow={"sm"}
			backgroundColor={"whiteAlpha.950"}
		>
			<header>
				<Flex
					p={"0.8rem 0.5rem"}
					align="center"
					justify="space-between"
					margin={"auto"}
					maxW={"1000px"}
				>
					<Text fontSize="xl" fontWeight="bolder">
						@ajpf44
					</Text>
					<Nav></Nav>
				</Flex>
			</header>
		</Box>
	);
}

export default Header;
