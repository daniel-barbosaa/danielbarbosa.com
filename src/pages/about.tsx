import Image from "next/image";

import Man from "../../public/man.svg";
import Camera from "../../public/Camera.svg";
import Music from "../../public/Music.svg";
import Photos from "../../public/photos.png";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as LinkChakra,
  Image as ChakraImage,
} from "@chakra-ui/react";

import Moc from "../../public/moc.jpg";
import Layout from "./layout";

export default function About() {
  return (
    <Layout>
      <Flex
        as="main"
        w="100%"
        maxW="48rem"
        m="auto"
        alignItems="center"
        pl="3rem"
        pr="3rem"
        pt="1rem"
        direction="column"
        gap="5"
      >
        <Box as="section" color="white.300">
          <Heading size="4xl" fontWeight="700" display="flex">
            Minha vida
            <Image src={Man} alt="homem caminhando" />
          </Heading>
          <Text fontWeight="400" fontSize="xl" mt="4">
            Nasci e moro em{" "}
            <LinkChakra
              href="https://pt.wikipedia.org/wiki/Montes_Claros"
              color="blue.500"
            >
              Montes Claros
            </LinkChakra>
            , no norte de Minas Gerais, conhecida pelo clima quente e poucos
            dias frios. Minha época favorita é outubro, quando as chuvas renovam
            a paisagem e trazem os frutos nativos da região, como o{" "}
            <LinkChakra
              href="https://pt.wikipedia.org/wiki/Pequi"
              color="blue.500"
            >
              pequi.
            </LinkChakra>
          </Text>
          <Box mt="3">
            <Flex direction="column">
              <ChakraImage
                maxW="100%"
                asChild
                maxH={{ md: "280px", sm: "194px" }}
                fit="cover"
                overflow="hidden"
              >
                <Image
                  src={Moc}
                  layout="intrinsic"
                  style={{ borderRadius: "6px", objectPosition: "center" }}
                  alt="Imagem-de-montes-claros"
                />
              </ChakraImage>
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold">
                  Montes Claros
                </Text>
                <Text fontSize="xs" fontWeight="medium" opacity="0.8">
                  2024
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box as="section" color="white.300">
          <Heading size="4xl" fontWeight="700" display="flex" gap="2">
            Hobbies
            <Image src={Camera} alt="Camera" />
            <Image src={Music} alt="homem caminhando" />
          </Heading>
          <Text fontWeight="400" fontSize="xl" mt="4">
            Gosto muito de academia e de me manter ativo, aproveito os treinos
            como uma forma que encontrei para cuidar do corpo e mente. Nos meus
            momentos livres, costumo ouvir músicas que é minha paixão. 🎧
          </Text>
          <Text fontWeight="400" fontSize="xl" mt="4">
            Também curto explorar minha criatividade na fotografia, criando
            fotos com uma estética única de paisagens, lugares e objetos, no
            Lightroom, CapCut. Essa ideia de capturar a beleza do cotidiano veio
            de referências gringas que me chamou a atenção e acabou se tornando
            uma das minhas atividades favoritas.
          </Text>
          <Box mt="3">
            <Flex direction="column">
              <ChakraImage
                maxW="100%"
                asChild
                maxH={{ md: "280px", sm: "194px" }}
                fit="cover"
                overflow="hidden"
              >
                <Image
                  src={Photos}
                  layout="intrinsic"
                  style={{ borderRadius: "6px", objectPosition: "center" }}
                  alt="Meus-registros"
                />
              </ChakraImage>
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold">
                  Viagens e Passeios
                </Text>
                <Text fontSize="xs" fontWeight="medium" opacity="0.8">
                  Alguns registos
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Box as="section" color="white.300">
          <Heading size="4xl" fontWeight="700" display="flex" gap="2">
            Jornada na programação 👨‍💻
          </Heading>
          <Text fontWeight="400" fontSize="xl" mt="4">
            Tudo começou com uma curiosidade: queria entender como funcionam os
            softwares por trás dos panos. Meu primeiro contato foi com HTML e
            CSS, criando páginas e pensando: 'Caraca, que coisa maneira!'.
          </Text>
          <Text fontWeight="400" fontSize="xl" mt="4">
            A partir disso, busquei me aprofundar nos fundamentos da
            programação, lógica e algoritmos, começando com JavaScript. Sempre
            estudei de forma autodidata, com cursos, pesquisas, etc.
          </Text>
          <Text fontWeight="400" fontSize="xl" mt="4">
            Como Sócrates disse: 'Só sei que nada sei'. A tecnologia está sempre
            mudando, com novas ferramentas e padrões, e percebo que quanto mais
            aprendo, mais vejo o quanto ainda tenho a aprender. Isso me
            incentiva a buscar conhecimento de forma contínua."
          </Text>
          <Box mt="3"></Box>
        </Box>
      </Flex>
    </Layout>
  );
}
