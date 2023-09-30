"use client";

import { useState, useEffect, useRef } from "react";
import { criminals } from "@/mocks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiSearch, FiX } from "react-icons/fi";
import axios from "axios";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [criminals, setCriminals] = useState<Criminal[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);
  const apiUrl = "https://criminalhunter-production.up.railway.app/api/wanteds";

  const getCriminals = async () => {
    if (page === 1) {
      const res = await axios.get(apiUrl);
      setCriminals(res.data);
      if (res.data.length > 0) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getCriminals();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreCriminals = async () => {
    if (isLoading) return;
    const nextPage = page + 1;
    setIsLoading(true);

    const newCriminals = await axios.get(`${apiUrl}?page=${nextPage}`);

    if (newCriminals.data.length > 0) {
      setCriminals((prevCriminals) => [...prevCriminals, ...newCriminals.data]);
    }

    setPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        ref.current &&
        ref.current.scrollTop + ref.current.clientHeight >=
          ref.current.scrollHeight - 100 &&
        !isLoading
      ) {
        loadMoreCriminals();
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div className="h-screen container-desktop overflow-y-hidden">
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

        <div
          className="h-[calc(100dvh-175px)] overflow-y-auto hidden-scrollbar"
          ref={ref}
        >
          {Array.isArray(criminals) &&
            criminals.length > 0 &&
            criminals.map(
              ({
                id,
                nome,
                url_foto,
                crime,
                altura,
                peso,
                cabelo,
                olhos,
                raca,
                sexo,
                nacionalidade,
                origem,
                created_at,
                updated_at,
                data_aniversario_usada,
              }) => {
                return (
                  <div key={id}>
                    <Link
                      // href={`/criminal_profile/${id}`}
                      href={`/criminal_profile/${id}?nome=${nome}&url_foto=${url_foto}&crime=${crime}&=
                      altura=${altura}&peso=${peso}&cabelo=${cabelo}&olhos=${olhos}&raca=${raca}&sexo=${sexo}&origem=${origem}&created_at=${created_at}&updated_at=${updated_at}&data_aniversario_usada=${data_aniversario_usada}&nacionalidade=${nacionalidade}
                      `}
                    >
                      <div className="flex items-center gap-3 border-b pb-4 mb-5">
                        <Image
                          src={url_foto ? url_foto : "/no_avatar.jpg"}
                          width={60}
                          height={60}
                          alt="Criminal Image"
                          className="rounded-full w-[60px] h-[60px] min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] object-cover bg-center"
                        />
                        <div>
                          <h3>{nome}</h3>
                          <p className="line-clamp-2">{crime}</p>
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
