import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const variantStyle = {
  base: "w-full py-3 px-6 border rounded-lg font-medium text-xl",
  default: "bg-white text-black",
  primary: "bg-primary text-white border-primary",
  secondary: "bg-secondary text-white border-secondary",
  hasIcon: "flex justify-center items-center gap-5",
};

export const Button = ({ variant = "default", text, icon, onClick }: Props) => {
  return (
    <motion.button
      className={clsx(
        variantStyle.base,
        icon && variantStyle.hasIcon,
        variantStyle[variant]
      )}
      whileTap={{ scale: 0.85 }}
      onClick={onClick}
    >
      {icon}
      {text}
    </motion.button>
  );
};
