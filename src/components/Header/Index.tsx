import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { ColorModeButton } from "../ui/color-mode";
import logo from "../../../public/d.png";
import ActiveLink from "./ActiveLink";
import NavMenu from "../navMenu";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    large: true
  });
  return (
    <Box
      as="header"
      backdropFilter="saturate(180%) blur(20px)"
      top="0"
      position="sticky"
      zIndex="1"
    >
      <Box
        bgGradient="to-r"
        gradientFrom="blue.400"
        gradientVia="blue.500"
        gradientTo="blue.300"
        h="16px"
        w="100%"
        position="relative"
      />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p="2rem"
        maxW="48rem"
        m="auto"
        pl="3rem"
        pr="3rem"
        w="100%"
      >
        <Image src={logo} alt="imagem-logo" />
        {isWideVersion && (
          <Box as="ul" display="flex" fontSize="md" fontWeight="medium" gap="4">
            <ActiveLink href="/">
              <li>Home</li>
            </ActiveLink>
            <ActiveLink href="/about">
              <li>About</li>
            </ActiveLink>
          </Box>
        )}
        <Flex gap={3}>
          {!isWideVersion && <NavMenu />}
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
}
