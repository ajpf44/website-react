import { Box, Float, Link, Stack, Text } from "@chakra-ui/react";
import { JSX } from "react";
import { LuExternalLink, LuDownload } from "react-icons/lu";
function Header(): JSX.Element {
	return (
		<Box
			maxW="1/5"
			data-state="open"
			_open={{
				animation: "fade-in 300ms ease-out",
			}}
			spaceY="5"
			textAlign="justify"
		>
			<Box>
				<Text textStyle="2xl" textAlign="left" fontWeight="semibold">	
					{" "}
					Alexandre Ferreira
				</Text>
				<Text>@ajpf44</Text>
			</Box>

			<Text>
				{" "}
				Desenvolvedor Full Stack, com experiência em NodeJS, JavaScript, Java,
				Spring Boot, PostgreSQL e React. Ex-residente do Serratec, usuário de
				Linux e admirador das exatas.
			</Text>

			<Stack gap="">
				<Text textStyle="lg" fontWeight="semibold">Meus Links:</Text>
				<Link href="https://github.com/ajpf44" target="_blank">
					Github <LuExternalLink />
				</Link>
				<Link href="https://www.linkedin.com/in/ajpf44/" target="_blank">
					Linkedin <LuExternalLink />
				</Link>
				<Link href="src/assets/curriculo-250306.pdf" target="_blank">
					Currículo <LuDownload />
				</Link>
			</Stack>

			<Text> © 2025 Alexandre Ferreira </Text>
		</Box>
	);
}

export default Header;
