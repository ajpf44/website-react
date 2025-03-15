import { JSX } from "react";
import { Box, Stack, Text, Wrap } from "@chakra-ui/react";

import ProjectBox from "./ProjectBox";
import projectLayout from "@/types/projectLayout";

import projectsJSON from "../../data/projects.json";
import guide from "../../style/css_guidelines";

const projects: projectLayout[] = Object.values(projectsJSON);

function Projects(): JSX.Element {
	return (
		<Box backgroundColor={"#f4f4f4"} p={guide.paddingBox} paddingBlock={"5rem"}>
			<Stack textAlign={"justify"} spaceY="1rem" maxW={"1080PX"} margin={"auto"}>
				<Text textStyle="2xl" fontWeight="bolder" textAlign="left">
					Meus Projetos:
				</Text>
				<Wrap
					gap="2rem"
					justifyContent={"center"}
					md={{ justifyContent: "space-between" }}
				>
					{projects.map((p, i) => (
						<ProjectBox
							imgPath={p.imgPath}
							name={p.name}
							description={p.description}
							link={p.link}
							githubLink={p.githubLink}
							key={i}
							techs={p.techs}
						/>
					))}
				</Wrap>
			</Stack>
		</Box>
	);
}

export default Projects;
