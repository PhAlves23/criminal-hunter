import Link from "next/link";
import { IconType } from "react-icons";
import { clsx } from "clsx";

interface ButtonLinksProps {
  icon: IconType;
  children: React.ReactNode;
  variant?: "facebook" | "apple" | "google" | "email";
}

export const ButtonLinks = ({
  icon: Icon,
  children,
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
    <Link
      href=""
      className={clsx(variantStyle.base, variant && variantStyle[variant])}
    >
      <Icon size={24} />
      <p>{children}</p>
    </Link>
  );
};
