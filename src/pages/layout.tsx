import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Index";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
