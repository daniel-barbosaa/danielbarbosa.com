import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, Text } from "@chakra-ui/react";
import Menu from "../../../public/Menu.svg";
import Close from "../../../public/Close.svg";
import Image from "next/image";
import { useState } from "react";
import ActiveLink from "../Header/ActiveLink";

export default function NavMenu() {
  const [toogleMenu, setToogleMenu] = useState(true);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          onClick={() => {
            setToogleMenu(!toogleMenu);
          }}
          variant="outline"
          size="sm"
          bg="blue.500"
        >
          <Image src={toogleMenu ? Menu : Close} alt="menu" width={20} />
        </Button>
      </MenuTrigger>
      <MenuContent p="2">
        <MenuItem value="new-txt">
          <ActiveLink href="/">
            <Text>Home</Text>
          </ActiveLink>
        </MenuItem>
        <MenuItem value="new-file">
          <ActiveLink href="/about">
            <Text>About</Text>
          </ActiveLink>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
