import Link from "next/link";
import { IconType } from "react-icons";
import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ButtonLinksProps {
  icon: IconType;
  children: React.ReactNode;
  path: string;
  variant?: "facebook" | "apple" | "google" | "email";
}

export const ButtonLinks = ({
  icon: Icon,
  children,
  path,
  variant,
}: ButtonLinksProps) => {
  const variantStyle = {
    base: "flex itens-center py-4 px-4 gap-10 rounded-lg",
    facebook: "bg-[#1877F2]",
    apple: "bg-[#000000]",
    google: "bg-[#F0B501]",
    email: "bg-[#041522]",
  };

  return (
    <motion.button whileTap={{ scale: 0.95 }}>
      <Link
        href={path ? path : ""}
        className={clsx(variantStyle.base, variant && variantStyle[variant])}
      >
        <Icon size={24} />
        <p>{children}</p>
      </Link>
    </motion.button>
  );
};
