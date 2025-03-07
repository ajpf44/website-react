import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { JSX } from "react";
import { LuExternalLink, LuDownload } from "react-icons/lu";
function Header(): JSX.Element {
    return (
        <Box
            maxW="1/4"
            data-state="open"
            _open={{
                animation: "fade-in 300ms ease-out",
            }}
            spaceY="5"
        >
            <Box>
                <Text textStyle="2xl" textAlign="left">
                    {" "}
                    Alexandre Ferreira
                </Text>
                <Text textAlign="left">@ajpf44</Text>
            </Box>

            <Text textAlign="justify">
                {" "}
                Desenvolvedor Full Stack, com experiência em NodeJS, JavaScript, Java,
                Spring Boot, PostgreSQL e React. Ex-residente do Serratec, usuário de
                Linux e admirador das exatas.
            </Text>

            <Stack textAlign="left" gap="">
                <Text textStyle="lg">Meus Links</Text>
                <Link href="https://github.com/ajpf44" target="_blank">
                    Github <LuExternalLink />
                </Link>
                <Link href="https://www.linkedin.com/in/ajpf44/" target="_blank">
                    Linkedin <LuExternalLink />
                </Link>
                <Link href="src/assets/curriculo-250306.pdf" target="_blank">
                    Currículo <LuDownload />
                </Link>
            </Stack>
        </Box>
    );
}

export default Header;
