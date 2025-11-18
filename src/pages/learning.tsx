import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Separator,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Layout } from "./layout";

import { CiViewTimeline } from "react-icons/ci";
import Button from "@/components/Button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTimeline } from "@/lib/fetch-timeline";
import { LearnigTimeline } from "@/components/Timeline/LearnigTimeline";
import { useDebounce } from "@/hooks/debounce";

export default function Learning() {
  const [filter, setFilter] = useState<string>("");
  const perPage = 5;
  const [page, setPage] = useState(0);
  const debounceFilter = useDebounce(filter);

  const { data, isLoading } = useQuery({
    queryKey: ["timeline", page, debounceFilter],
    queryFn: () => fetchTimeline(page, perPage, debounceFilter),
  });

  function nextPage() {
    setPage((p) => p + 1);
  }
  function previousPage() {
    setPage((p) => p - 1);
  }

  return (
    <Layout>
      <Flex
        direction="column"
        as="main"
        maxW="48rem"
        m="auto"
        pl="3rem"
        pr="3rem"
        flex="auto"
      >
        <Heading size="4xl" fontWeight="700">
          Aprendizado
        </Heading>
        <Text fontWeight="300" fontSize="xl">
          Minha jornada: aprendizados, descobertas e passos dados.
        </Text>
        <Box marginTop="4" display="flex" justifyContent="space-between">
          <HStack
            display="flex"
            flexDirection="column"
            sm={{ flexDirection: "row" }}
          >
            <Input
              placeholder="Buscar aprendizado..."
              borderRadius="lg"
              _light={{
                bg: "#bfbfbf",
                color: "black",
                _hover: { bg: "#d1d1d1" },
                _active: { bg: "#a6a6a6" },
              }}
              _dark={{
                bg: "#ffffff14",
                color: "white",
                _hover: { bg: "#ffffff22" },
                _active: { bg: "#ffffff0d" },
              }}
              size="xs"
              bg="blue.400"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
            <Box display="flex" gap="2">
              <Button size="xs" onClick={previousPage} disabled={page === 0}>
                <IoIosArrowBack />
                Anterior
              </Button>
              <Button size="xs" onClick={nextPage} disabled={!data?.hasMore}>
                Próximo <IoIosArrowForward />
              </Button>
            </Box>
          </HStack>
          <Flex align="center" display="none" gap="2" md={{ display: "block" }}>
            <Text
              display="flex"
              alignItems="center"
              gap="2"
              opacity="0.7"
              fontSize="2xs"
              fontWeight="bold"
              letterSpacing={"wider"}
            >
              <CiViewTimeline size={20} /> Timeline
            </Text>
          </Flex>
        </Box>
        <Separator
          mt={4}
          _dark={{ bg: "#ffffff14" }}
          _light={{ bg: "#F2F2F2" }}
          h={0.5}
        />
        <Box marginTop="4">
          <LearnigTimeline events={data} isLoading={isLoading} />
        </Box>
      </Flex>
    </Layout>
  );
}
