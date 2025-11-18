import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <Flex
      mt="8"
      as="footer"
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

      <Flex mt={3.5} align="center" gap={2} mb={4}>
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
  );
}
