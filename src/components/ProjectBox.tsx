import { JSX } from "react";
import { Image, Text, Box } from "@chakra-ui/react";

import projectLayout from "@/types/projectLayout";
import { arrayToPortuguese } from "../utils/functions";

function ProjectBox(props: projectLayout): JSX.Element {
  console.log(props.imgPath);
  return (
    <Box width="1/4" textAlign="justify">
      <Image src={props.imgPath}  />
      <Text>{props.name}</Text>
			<Text>{props.description}</Text>
			<Text>Stack: {arrayToPortuguese(props.techs)}</Text>
    </Box>
  );
}

export default ProjectBox;
