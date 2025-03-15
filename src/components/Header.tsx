import { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Nav from "./Nav";
import guide from "../style/css_guidelines";

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
					maxW={guide.maxWidth}
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
