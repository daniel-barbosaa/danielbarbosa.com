import Image from "next/image";

import arrowRight from "../../public/Double Up.svg";
import Rocket from "../../public/Rocket.svg";

import { projects } from "@/utils/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";
import Link from "next/link";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link as ChakraLink,
  Badge,
} from "@chakra-ui/react";
import PopoverInfo from "@/components/PopoverInfo";
import ModalInfoProject from "@/components/ModalInfoProject/Index";
import Layout from "./layout";

export default function Home() {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Layout>
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
            Desenvolvedor Front-end na{" "}
            <ChakraLink
              href="https://www.linkedin.com/company/ipecode/"
              textDecoration="underline"
              bgClip="text"
              bgGradient="to-r"
              gradientFrom="blue.400"
              gradientVia="blue.500"
              gradientTo="blue.300"
            >
              ipêCode
            </ChakraLink>
          </Text>

          <Flex gap="7px" alignItems="center" fontWeight="400" fontSize="xl">
            <Box
              display={{ base: "column", md: "flex" }}
              fontWeight="400"
              fontSize="xl"
            >
              Sigo o fluxo de
              <Text
                display="flex"
                ml={{ base: "0px", md: "7px" }}
                gap="7px"
                color="red"
                bgClip="text"
                bgGradient="to-r"
                gradientFrom="blue.400"
                gradientVia="blue.500"
                gradientTo="blue.300"
              >
                aprender
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
          <Grid
            templateColumns={{ md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap="1rem"
            mt="6"
          >
            {projects.map((project) => (
              <ModalInfoProject project={project}>
                <GridItem
                  borderRadius="6px"
                  border={{
                    base: "1px solid rgba(255, 255, 255, 0.16)",
                    _light: "1px solid #C5CFDC",
                  }}
                  lineHeight="inherit"
                >
                  <Box>
                    <Image
                      src={project.image}
                      alt="imagem do projeto"
                      quality={100}
                      style={{
                        borderRadius: "6px 6px 0px 0px",
                      }}
                    />
                  </Box>

                  <Box padding="6">
                    <Flex align="center" gap={2}>
                      <Text fontSize="xl" fontWeight="bold">
                        {project.name}
                      </Text>
                      <Link href={project.github} onClick={handleLinkClick}>
                        <FaGithub />
                      </Link>
                      <Link
                        href={project?.link || project.github}
                        onClick={handleLinkClick}
                      >
                        <PiLinkSimpleBold />
                      </Link>
                    </Flex>

                    <Box mt="1" gap="1" display="flex">
                      {project.stack.map((stack) => (
                        <Badge
                          size="sm"
                          variant="subtle"
                          colorPalette="blue"
                          textTransform="capitalize"
                        >
                          {stack.toString()}
                        </Badge>
                      ))}
                    </Box>

                    <Text mt={2} fontSize="xl">
                      {project.description}
                    </Text>
                  </Box>
                </GridItem>
              </ModalInfoProject>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
