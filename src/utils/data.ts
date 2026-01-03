import AbnmoImg from "../../public/abnmo.svg";
import IgnewsImg from "../../public/ignews.svg";
import FincheckImg from "../../public/fincheck.svg";
import DatabaseIcon from "../../public/database.svg";
import LinguageIcon from "../../public/linguage.svg";
import FrameworkIcon from "../../public/framework.svg";
import LibIcon from "../../public/lib.svg";

export const projects = [
  {
    id: 1,
    name: "Sistema Viver Melhor da ABNMO",
    description:
      "Sistema de gerenciamento e acompanhamento de pacientes da ABNMO.",
    stack: ["frontend"],
    linguage: "typescript",
    framework: "Next 15, React",
    libraries: "Tailwind CSS, RadixUI",
    image: AbnmoImg,
    github: "https://github.com/ipecode-br/abnmo-frontend",
  },
  {
    id: 2,
    name: "IgNews",
    description:
      "Blog com conteúdo exclusivo sobre React + sistema de assinatura (modo teste).",
    stack: ["frontend", "backend"],
    linguage: "typescript",
    framework: "Next.js, React.js",
    libraries: "Chakra UI",
    database: "FaunaDB, Prismic, Stripe",
    image: IgnewsImg,
    github: "https://github.com/daniel-barbosaa/ig-news",
    link: "https://ig-news-red.vercel.app",
  },
  {
    id: 3,
    name: "Fincheck",
    description:
      "Aplicativo de controle de finaças 360° permitindo o controle total sobre contas bancárias, investimentos, despesas, receitas e planejamento financeiro.",
    stack: ["frontend", "backend"],
    linguage: "Typescript",
    framework: "React, NestJs",
    libraries: "Radix UI, Tailwind CSS",
    database: "PostgreSQL, PrimsaORM",
    image: FincheckImg,
    github: "https://github.com/daniel-barbosaa/fincheck-frontend",
    link: "https://github.com/daniel-barbosaa/fincheck-frontend",
  },
];

export const imageStacks = {
  linguage: LinguageIcon,
  framework: FrameworkIcon,
  lib: LibIcon,
  database: DatabaseIcon,
};
