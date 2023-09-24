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
    image: "https://placehold.co/100x100/png",
    title: "Homicídio",
  },
  {
    id: 2,
    image: "https://placehold.co/100x100/png",
    title: "Tráfico de drogas",
  },
  {
    id: 3,
    image: "https://placehold.co/100x100/png",
    title: "Roubo",
  },
  {
    id: 4,
    image: "https://placehold.co/100x100/png",
    title: "Fraude",
  },
  {
    id: 5,
    image: "https://placehold.co/100x100/png",
    title: "Extorsão",
  },
  {
    id: 6,
    image: "https://placehold.co/100x100/png",
    title: "Sequestro",
  },
  {
    id: 7,
    image: "https://placehold.co/100x100/png",
    title: "Tráfico de pessoas",
  },
  {
    id: 8,
    image: "https://placehold.co/100x100/png",
    title: "Lavagem de dinheiro",
  },
  {
    id: 9,
    image: "https://placehold.co/100x100/png",
    title: "Crimes cibernéticos",
  },
  {
    id: 10,
    image: "https://placehold.co/100x100/png",
    title: "Terroismo",
  },
  {
    id: 11,
    image: "https://placehold.co/100x100/png",
    title: "Contrabando",
  },
  {
    id: 12,
    image: "https://placehold.co/100x100/png",
    title: "Outro",
  },
];
