import { JSX, useEffect, useState } from "react";
import { Box, Group } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router";

const tabs = [
	{ name: "Home", path: "/" },
	// { name: "Projetos", path: "/", hash: "#projects" }
	{ name: "Contato", path: "/contato" },
];

function Nav(): JSX.Element {
	const [activePath, setActivePath] = useState(tabs[0].path);
	const loc = useLocation();

	// this manages the activePath, which is used to determine which tab has borderBottom activated
	useEffect(()=>{
		setActivePath(loc.pathname);
	}, [loc]);

	return (
		<Group>
			{tabs.map((tab) => (
				<NavLink to={tab.path} key={tab.name}>
					<Box
						marginInline={"0.3rem"}
						cursor={"pointer"}
						transition={"border 0.1s ease-in-out, scale 0.1s ease-in-out"}
						borderBottom={activePath == tab.path ? "2px solid black" : ""}
						borderColor={"blue.fg"}
						_hover={{
							color: "blue.fg",
							scale: "1.1",
						}}
					>
						{tab.name}
					</Box>
				</NavLink>
			))}
		</Group>
	);
}

export default Nav;
