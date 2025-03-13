import { JSX } from "react";
import { Image, Text, Box } from "@chakra-ui/react";

import projectLayout from "@/types/projectLayout";
// import { arrayToPortuguese } from "../utils/functions";

import placeholderImg from "../../assets/placeholder-img.png";

function ProjectBox(props: projectLayout): JSX.Element {
  const imgPath = props.imgPath==""?placeholderImg:props.imgPath;
  
  return (
    <Box maxW={"20rem"} textAlign="justify">
      <Text>{props.name}</Text>
      <Image src={imgPath}  />
			<Text>{props.description}</Text>
			{/* <Text>Stack: {arrayToPortuguese(props.techs)}</Text> */}
      {/*   está poluindo a página principal*/			}
    </Box>
  );
}

export default ProjectBox;
