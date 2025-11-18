import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <ChakraButton
      {...props}
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
    >
      {children}
    </ChakraButton>
  );
}
