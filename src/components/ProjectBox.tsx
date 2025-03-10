import { JSX } from "react";
import { Image, Text, Box } from "@chakra-ui/react";

import projectLayout from "@/types/projectLayout";
import { arrayToPortuguese } from "../utils/functions";

import placeholderImg from "../assets/placeholder-img.png";

function ProjectBox(props: projectLayout): JSX.Element {
  const imgPath = props.imgPath==""?placeholderImg:props.imgPath;
  
  return (
    <Box width="1/4" textAlign="justify">
      <Image src={imgPath}  />
      <Text>{props.name}</Text>
			<Text>{props.description}</Text>
			<Text>Stack: {arrayToPortuguese(props.techs)}</Text>
    </Box>
  );
}

export default ProjectBox;
