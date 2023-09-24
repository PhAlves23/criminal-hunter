import { CardCrime } from "@/components/card_crime";
import { crime } from "@/mocks";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <header className="px-5 py-3 flex justify-between items-center">
        <Image
          src="/logo_name.svg"
          width={160}
          height={50}
          alt="Logo Criminal Hunger"
        />

        <div className="flex items-center gap-4">
          <Link href="/search">
            <button
              type="button"
              className="rounded-full border p-2 w-14 h-14 text-secondary flex justify-center items-center"
            >
              <FiSearch size={32} className="text-secondary" />
            </button>
          </Link>

          <Link href="/profile">
            <Image
              src="https://github.com/PhAlves23.png"
              width={56}
              height={56}
              alt=""
              className="rounded-full border border-primary"
            />
          </Link>
        </div>
      </header>

      <main className="px-5 py-3 text-xl">
        <h2 className="mb-4">Qual foi o tipo de crime cometido?</h2>

        <div className="grid grid-cols-3 gap-3">
          {Array.isArray(crime) &&
            crime.length > 0 &&
            crime.map(({ id, title, image }) => {
              return <CardCrime key={id} title={title} image={image} />;
            })}
        </div>
      </main>
    </>
  );
}
