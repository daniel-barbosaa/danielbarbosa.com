import Image from "next/image";

import arrowRight from "../../public/Double Up.svg";
import Rocket from "../../public/Rocket.svg";
import Info from "../../public/Info.svg";
import { projects } from "@/utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Header from "@/components/Header/Index";
import PopoverInfo from "@/components/PopoverInfo";
import ModalInfoProject from "@/components/ModalInfoProject/Index";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box
        as="main"
        w="100%"
        maxW="48rem"
        m="auto"
        alignItems="center"
        pl="3rem"
        pr="3rem"
        pt="1rem"
      >
        <Box as="section" color="white.300">
          <Heading size="4xl" fontWeight="700">
            Olá!
            <br />
            Eu sou Daniel Barbosa
          </Heading>
          <Text fontWeight="400" fontSize="xl">
            Desenvolvedor Front-end
          </Text>
          <Flex gap="7px" alignItems="center" fontWeight="400" fontSize="xl">
            <Box display={{base: "column", md: "flex"}} fontWeight="400" fontSize="xl">
              {" "}
              Sigo o fluxo de
              <Text
                display="flex"
                ml={{base: "0px", md: "7px"}}
                gap="7px"
                color="red"
                bgClip="text"
                bgGradient="to-r"
                gradientFrom="blue.400"
                gradientVia="blue.500"
                gradientTo="blue.300"
              >
                aprender{" "}
                <Image width={12} height={12} src={arrowRight} alt="seta" />
                criar
                <Image width={12} height={12} src={arrowRight} alt="seta" />
                evoluir
                <Image src={Rocket} alt="seta" />
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box as="section" mt="12">
          <Box display="flex" alignItems="center">
            <Heading fontSize="4xl" fontWeight="700">
              Projetos
            </Heading>
            <PopoverInfo />
          </Box>
          <Grid templateColumns={{md: "repeat(1,1fr)", lg: "repeat(2,1fr)"}} gap="1rem" mt="6" >
            {projects.map((project) => (
              <ModalInfoProject project={project}>
                <GridItem
                  borderRadius="6px"
                  padding="20px"
                  border={{
                    base: "1px solid rgba(255, 255, 255, 0.16)",
                    _light: "1px solid #C5CFDC",
                  }}
                  lineHeight="inherit"
                >
                  <Flex justify="center">
                    <Box as="span" w="202px">
                      <Image
                        src={project.image}
                        alt="imagem do projeto"
                        quality={100}
                      />
                    </Box>
                  </Flex>
                  <Flex mt={3.5} align="center" gap={2}>
                    <Text fontSize="xl" fontWeight="bold">
                      {project.name}
                    </Text>
                    <Link href={project.github}>
                      <FaGithub />
                    </Link>
                    <Link href={project.github}>
                      <PiLinkSimpleBold />
                    </Link>
                  </Flex>
                  <Flex as="ul" w="74px" mt={2}>
                    <li>
                      <Text
                        textTransform="uppercase"
                        fontSize="xs"
                        fontWeight="bold"
                        p="0 3px 0 3px"
                        bg="blue.100"
                        color="blue.500"
                      >
                        {project.stack}
                      </Text>
                    </li>
                  </Flex>
                  <Text mt={2} fontSize="xl">
                    {project.description}
                  </Text>
                </GridItem>
              </ModalInfoProject>
            ))}
          </Grid>
        </Box>
      </Box>
      <Flex
        mt="8"
        as="footer"
        width="100%"
        borderTop={{
          base: "1px solid rgba(255, 255, 255, 0.16)",
          _light: "1px solid #C5CFDC",
        }}
        alignItems="center"
        direction="column"
       
      >
        <Text textAlign="center" mt="4">
          Vamos nos manter conectado <br />
          Siga-me
        </Text>

        <Flex mt={3.5} align="center" gap={2} mb={3}>
          <Link href="https://www.linkedin.com/in/daniel-barbos/">
            {" "}
            <FaLinkedin />
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-barbos/">
            {" "}
            <FaGithub />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
