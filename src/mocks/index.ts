import { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiFillApple,
  AiFillGoogleCircle,
  AiOutlineMail,
} from "react-icons/ai";

interface ButtonLinksItemsProps {
  id: number;
  icon: IconType;
  variant: "facebook" | "apple" | "google" | "email";
  text: string;
  path: string;
}

export const buttonLinksItems: ButtonLinksItemsProps[] = [
  {
    id: 1,
    icon: AiFillFacebook,
    variant: "facebook",
    text: "Entrar com Facebook",
    path: "/login",
  },
  {
    id: 2,
    icon: AiFillApple,
    variant: "apple",
    text: "Entrar com ID Apple",
    path: "/login",
  },
  {
    id: 3,
    icon: AiFillGoogleCircle,
    variant: "google",
    text: "Entrar com Google",
    path: "/login",
  },
  {
    id: 4,
    icon: AiOutlineMail,
    variant: "email",
    text: "Entrar com e-mail",
    path: "/login",
  },
];

export const crime = [
  {
    id: 1,
    image: "/crime/homicidio.png",
    title: "Homicídio",
  },
  {
    id: 2,
    image: "/crime/drogas.png",
    title: "Tráfico de drogas",
  },
  {
    id: 3,
    image: "/crime/roubo.png",
    title: "Roubo",
  },
  {
    id: 4,
    image: "/crime/fraude.png",
    title: "Fraude",
  },
  {
    id: 5,
    image: "/crime/extorsao.png",
    title: "Extorsão",
  },
  {
    id: 6,
    image: "/crime/sequestro.png",
    title: "Sequestro",
  },
  {
    id: 7,
    image: "/crime/trafico-de-pessoas.png",
    title: "Tráfico de pessoas",
  },
  {
    id: 8,
    image: "/crime/lavagem-de-dinheiro.png",
    title: "Lavagem de dinheiro",
  },
  {
    id: 9,
    image: "/crime/cibernetico.png",
    title: "Crimes cibernéticos",
  },
  {
    id: 10,
    image: "/crime/terrorismo.png",
    title: "Terrorismo",
  },
  {
    id: 11,
    image: "/crime/contrabando.png",
    title: "Contrabando",
  },
  {
    id: 12,
    image: "/crime/outro.png",
    title: "Outro",
  },
];
