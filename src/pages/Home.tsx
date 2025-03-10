import { JSX } from "react";
import { Box, Flex, Text, Wrap } from "@chakra-ui/react";

import ProjectBox from "../components/ProjectBox";
import fotoPerfil from "../assets/foto-perfil.webp";
import projectLayout from "@/types/projectLayout";

import projectsJSON from "../data/projects.json"

const projects: projectLayout[] = Object.values(projectsJSON);

function Home(): JSX.Element {
	return (
		<Box textAlign={"justify"} spaceY="1rem">
			<Text textStyle="xl">Meus Projetos:</Text>
			<Wrap gap="2rem">
				{projects.map((p, i) => (
					<ProjectBox
						imgPath={p.imgPath}
						name={p.name}
						description={p.description}
						techs={p.techs}
						link={p.link}
						key={i}
					/>
				))}
			</Wrap>
		</Box>
	);
}

export default Home;
