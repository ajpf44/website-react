import { JSX, useState } from "react";
import {
	Box,
	Group,
	Text,
	ColorPalette,
	Color,
	ColorPickerSwatchGroup,
} from "@chakra-ui/react";
import { ColorPicker } from "@ark-ui/react";

const tabs = [{ name: "Home" }, { name: "Projetos" }, { name: "Contato" }];

function Nav(): JSX.Element {
	const [tabFontSize, setTabFontSize] = useState("1rem");
	const active = "Home";

	return (
		<Group>
			{tabs.map((tab) => {
				return (
					<Box
						paddingInline={"0.3rem"}
						cursor={"pointer"}
						transition={"transform 0.2s ease-in-out"}
                        borderBottom={active==tab.name?"2px solid black":""}
                        borderBottomStyle={"inset"}
                
                        
						onMouseEnter={(e) => {
							e.target.style.transform = "scale(1.1)";
							e.target.style.color = "black";
						}}
						onMouseLeave={(e) => {
							e.target.style.transform = "scale(1.0)";
							e.target.style.color = "inherit";
						}}
						onClick={() => {
							console.log("clicaste");
						}}
					>
						{tab.name}
					</Box>
				);
			})}
		</Group>
	);
}

export default Nav;
