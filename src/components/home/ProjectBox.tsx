import { JSX } from "react";
import { Image, Card, Badge, Wrap, Button } from "@chakra-ui/react";

import projectLayout from "@/types/projectLayout";
// import { arrayToPortuguese } from "../utils/functions";

import placeholderImg from "../../assets/placeholder-img.png";
import { RiArrowRightLine, RiGithubFill } from "react-icons/ri";

function ProjectBox(props: projectLayout): JSX.Element {
	const imgPath = props.imgPath == "" ? placeholderImg : props.imgPath;

	return (
		<Card.Root maxW="20rem"
            
            _hover={{
                scale: "1.02",
            }}
            transition="scale 0.1s ease-in-out"
        >
			<Image src={imgPath} aspectRatio={4 / 3} align="top"/>
			<Card.Body>
			    <Card.Title>{props.name}</Card.Title>
				<Card.Description fontSize={"md"} textAlign={"justify"}>
					{props.description}
				</Card.Description>

				<Wrap mt="4">
					{props.techs.map((tech) => {
						return <Badge>{tech}</Badge>;
					})}
				</Wrap>
			</Card.Body>
			<Card.Footer >
                {props.link?<Button
                    
					colorPalette="black"
					variant="solid"
					onClick={() => {
						window.open(props.link);
					}}
				>
					Página <RiArrowRightLine />
				</Button>:""}
				
				<Button
                    
					colorPalette="blue"
					variant="surface"
					onClick={() => {
						window.open(props.githubLink);
					}}
				>
					Github <RiGithubFill />
				</Button>
			</Card.Footer>
		</Card.Root>
	);
}

export default ProjectBox;
