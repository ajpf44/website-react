import { JSX, useState } from "react";
import { Box, Group } from "@chakra-ui/react";

const tabs = [{ name: "Home" }, { name: "Projetos" }, { name: "Contato" }];

function Nav(): JSX.Element {
	const [activeTab, setActiveTab] = useState(tabs[0].name);

	return (
		<Group>
			{tabs.map((tab) => {
				return (
					<Box
						marginInline={"0.3rem"}
						cursor={"pointer"}
						transition={"border 0.1s ease-in-out, scale 0.1s ease-in-out"}
						
						borderBottom={activeTab == tab.name ? "2px solid black" : ""}
						borderColor={"blue.fg"}
						
						_hover={{
							color: "blue.fg",
							scale: "1.1",
						}}
						onClick={() => {
							setActiveTab(tab.name);
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
