import TaskflowImg from "../../public/dashboard-image.png";
import IgnewsImg from '../../public/ignews.png'
import DashgoImg from '../../public/dashgo.png'
import DatabaseIcon from '../../public/database.svg'
import LinguageIcon from '../../public/linguage.svg'
import FrameworkIcon from '../../public/framework.svg'
import LibIcon from '../../public/lib.svg'

export const projects = [
  {
    id: 1,
    name: "taskFlow",
    description:
      "Crie e gerencie seus projetos de forma rápida e adicione tarefas relacionadas.",
    stack: ["frontend", "backend"],
    linguage: "typescript",
    framework: "Next.js, React.js",
    libraries: "Chakra UI, recharts, testing-library",
    database: "Firebase",
    image: TaskflowImg,
    github: "https://github.com/daniel-barbosaa/taskflow"
  },
  {
    id: 2,
    name: "IgNews",
    description:
      "Blog - Receba as melhores notícias sobre React por um preço muito acessível.",
    stack: ["frontend", "backend"],
    linguage: "typescript",
    framework: "Next.js, React.js",
    libraries: "Chakra UI",
    database: "FaunaDB, Prismic",
    image: IgnewsImg,
    github: "https://github.com/daniel-barbosaa/ig-news",
  },
  {
    id: 3,
    name: "Dashgo.",
    description:
      "Crie e gerencie seus projetos de forma rápida e adicione tarefas relacionadas.",
    stack: ["frontend"],
    linguage: "typescript",
    framework: "Next.js, React.js",
    libraries: "Chakra UI, APEXCHARTS.JS",
    database: "Miraje.js (fake)",
    image: DashgoImg,
    github: "https://github.com/daniel-barbosaa/ig-news"
  },
  
];

export const imageStacks = {
  linguage: LinguageIcon,
  framework:  FrameworkIcon,
  lib: LibIcon,
  database: DatabaseIcon ,
}
