import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

type ModalControlerContextType = UseDisclosureReturn;

interface ModalControlerProps {
  children: ReactNode;
}

const ModalControlerContext = createContext({} as ModalControlerContextType);

export default function ModalControlerProvider({
  children,
}: ModalControlerProps) {
  const disclosure = useDisclosure();
  const path = usePathname();

  // quando path muda, fecha modais
  useEffect(() => {
    disclosure.onClose();
  }, [path]);

  return (
    <ModalControlerContext.Provider value={disclosure}>
      {children}
    </ModalControlerContext.Provider>
  );
}

export function useModalControler(): ModalControlerContextType {
  const context = useContext(ModalControlerContext);

  if (!context) {
    throw new Error(
      "useModalControler deve ser usado dentro de um ModalControlerProvider"
    );
  }

  return context;
}
