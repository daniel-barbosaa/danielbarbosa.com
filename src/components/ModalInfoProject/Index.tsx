import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { imageStacks } from "../../utils/data";

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  linguage: string;
  framework: string;
  libraries: string;
  database: string;
  image: StaticImageData;
  github: string;
}

interface ModalInfoProjectProps {
  children: ReactNode;
  project: Project;
}

export default function ModalInfoProject({
  children,
  project,
}: ModalInfoProjectProps) {
  return (
    <DialogRoot placement="center">
      <DialogTrigger asChild cursor="pointer">
        {children}
      </DialogTrigger>
      <DialogContent maxW={96} w="100%">
        <DialogBody pt="4">
          <DialogTitle fontWeight="bold" fontSize="xl">
            {project.name}
          </DialogTitle>
          <DialogDescription mb="4">
            <Flex as="ul" mt={5} gap={3} direction="column">
              <Flex as="li" gap={2}>
                <Image
                  src={imageStacks.linguage}
                  alt="linguagem"
                  width={20}
                  height={20}
                />
                <Text textTransform="capitalize" fontSize="md">
                  <strong>Linguagem: </strong>
                  {project.linguage}
                </Text>
              </Flex>
              <Flex as="li" gap={2}>
                <Image
                  src={imageStacks.framework}
                  alt="framework"
                  width={20}
                  height={20}
                />
                <Text textTransform="capitalize" fontSize="md">
                  <strong>Framework: </strong>
                  {project.framework}
                </Text>
              </Flex>
              {project?.libraries && (
                <Flex as="li" gap={2}>
                  <Image
                    src={imageStacks.lib}
                    alt="biblioteca"
                    width={20}
                    height={20}
                  />
                  <Text textTransform="capitalize" fontSize="md">
                    <strong>Biblioteca: </strong>
                    {project.libraries}
                  </Text>
                </Flex>
              )}
              {project?.database && (
                <Flex as="li" gap={2}>
                  <Image
                    src={imageStacks.database}
                    alt="banco de dados"
                    width={20}
                    height={20}
                  />
                  <Text textTransform="capitalize" fontSize="md">
                    <strong>Banco de dados: </strong>
                    {project.database}
                  </Text>
                </Flex>
              )}
            </Flex>
          </DialogDescription>
        </DialogBody>
        <DialogCloseTrigger top="0" insetEnd="-12" bg="bg" color="blue.500" />
      </DialogContent>
    </DialogRoot>
  );
}
