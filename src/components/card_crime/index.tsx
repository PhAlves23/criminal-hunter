import Image from "next/image";
import Link from "next/link";

interface CardCrimeProps {
  image: string;
  title: string;
}

export const CardCrime = ({ image, title }: CardCrimeProps) => {
  return (
    <Link href="/search">
      <div className="flex flex-col items-center">
        <Image
          src={image ? image : ""}
          width={100}
          height={100}
          alt={title}
          className="rounded-xl mb-1"
        />
        <p className="text-center">{title}</p>
      </div>
    </Link>
  );
};
