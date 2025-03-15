import { JSX } from "react";
import { Flex, Text, HStack, Button, Center } from "@chakra-ui/react";
import { RiArrowRightLine, RiGithubFill } from "react-icons/ri";

import { useNavigate } from "react-router";

import guide from "../../style/css_guidelines";

function HomeGreetings(): JSX.Element {
	const navigate = useNavigate();

	return (
		// change this center for a stack, and compose the white space with an image
		<Center p={guide.paddingBox}>
			<Flex
				maxWidth="2xl"
				gap="3rem"
				minHeight="30rem"
				direction="column"
				justify="center"
			>
				<Text textStyle="4xl" fontWeight="semibold">
					Olá, meu nome é Alexandre
				</Text>
				<Text textStyle="xl" textAlign="justify">
					Sou um dev focado em criar soluções interessantes e funcionais. Fascinado
					por ciências exatas, sempre busco de novos desafios. Em constante
					aprendizado, como um Padawan.{" "}
				</Text>
				
				<HStack gap="1.4rem">
					<Button
						colorPalette="black"
						variant="solid"
						onClick={() => {
							navigate("/contato");
						}}
					>
						Sobre Mim <RiArrowRightLine />
					</Button>
					<Button
						colorPalette="blue"
						variant="surface"
						onClick={() => {
							window.open("https://github.com/ajpf44");
						}}
					>
						Github <RiGithubFill />
					</Button>
				</HStack>
			</Flex>
		</Center>
	);
}

export default HomeGreetings;
