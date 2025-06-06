import { Box } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export default function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        "data-testid": "active-link",
        style: {
          color: isActive ? "rgb(58, 132, 255)" : "none",
          background: "transparent",
          fontWeight: isActive ? "bold" : "normal"
        },
      })}
    </Link>
  );
}
