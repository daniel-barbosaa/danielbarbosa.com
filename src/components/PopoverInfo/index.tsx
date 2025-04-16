import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseTrigger
} from "@/components/ui/popover";

import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Info from "../../../public/Info.svg";
import Image from "next/image";

export default function PopoverInfo() {
  const [open, setOpen] = useState(false);
  return (
    <PopoverRoot positioning={{ placement: "bottom" }} open={open} onOpenChange={(e) => setOpen(e.open)} >
      <PopoverTrigger asChild>
        <Button bg="none" border="none" p="0">
          <Image src={Info} alt="informação" width={25} height={25} />
        </Button>
      </PopoverTrigger>
      <PopoverContent  >
        <PopoverCloseTrigger color="blue.500"/>
        <PopoverArrow />
        <PopoverBody fontSize="md" >
          Clique nos projetos para ver mais detalhes sobre eles.
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
}
