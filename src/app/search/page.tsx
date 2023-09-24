"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronLeft, FiSearch, FiX } from "react-icons/fi";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const criminals = [
    {
      id: 1,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 2,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 3,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 4,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 5,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 6,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 7,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 8,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 9,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 10,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 11,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
    {
      id: 12,
      name: "Arthur Fleck - Coringa",
      image: "/coringa.webp",
      localization: "Gothan City, EUA",
      birthday: "1989-05-13",
      gender: "Masculino",
      crime: "Assassinato, terrorismo e sequestro.",
    },
  ];
  return (
    <div className="container-desktop">
      <header className="px-5 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Pesquisar</p>
        </div>
        <div onClick={() => router.back()}>
          <FiX size={32} className="text-secondary" />
        </div>
      </header>
      <main className="px-5 py-5">
        <div className="relative mb-8">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            placeholder="Pesquisar..."
            className="w-full border rounded-full bg-transparent px-4 py-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch
            size={24}
            className="text-secondary absolute right-4 top-2"
          />
        </div>

        <div className="h-[calc(100dvh-175px)] overflow-y-auto hidden-scrollbar">
          {Array.isArray(criminals) &&
            criminals.length > 0 &&
            criminals.map(
              ({ id, image, name, birthday, localization, gender, crime }) => {
                return (
                  <div key={id}>
                    <Link href="/criminal_profile">
                      <div className="flex items-center gap-3 border-b pb-4 mb-5">
                        <Image
                          src={image}
                          width={50}
                          height={50}
                          alt="Criminal Image"
                          className="rounded-full"
                        />
                        <div>
                          <h3>{name}</h3>
                          <p>{crime}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
        </div>
      </main>
    </div>
  );
}
