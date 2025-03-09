import { JSX } from "react";
import { Box, Flex, Text, Wrap } from "@chakra-ui/react";

import ProjectBox from "../components/ProjectBox";
import fotoPerfil from "../assets/foto-perfil.webp";
import projectLayout from "@/types/projectLayout";

const projects: projectLayout[] = [];

const p1: projectLayout = {
	name: "Ronaldo",
	description:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, dolores.",
	imgPath: fotoPerfil,
	techs: ["NodeJS", "React"],
	link: "https://github.com/ajpf44",
};

projects.push(p1, p1);

function Home(): JSX.Element {
	return (
		<Box textAlign={"justify"} spaceY="1rem">
			<Text textStyle="xl">Meus Projetos:</Text>
			<Wrap gap="2rem">
				{projects.map((p) => (
					<ProjectBox
						imgPath={p.imgPath}
						name={p.name}
						description={p.description}
						techs={p.techs}
						link={p.link}
					/>
				))}
			</Wrap>
		</Box>
	);
}

export default Home;
