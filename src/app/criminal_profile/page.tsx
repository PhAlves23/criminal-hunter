"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiChevronLeft, FiEdit, FiMail, FiMap } from "react-icons/fi";
import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import { InputGender } from "@/components/inputs/input_gender";
import { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState("Arthur Fleck - Coringa");
  const [localization, setLocalization] = useState("Gothan City, EUA");
  const [date, setDate] = useState("1989-05-13");
  const [crime, setCrime] = useState("Assassinato, terrorismo e sequestro.");

  return (
    <div>
      <header className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Criminal Hunter</p>
        </div>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </header>
      <main className="px-5">
        <div className="flex justify-center items-center">
          <div className="w-[250px] h-[250px]">
            <Image
              src="/coringa.webp"
              width={250}
              height={250}
              alt=""
              className="rounded-full"
            />
            {/* <Link
              href="/profile/edit_profile"
              className="absolute right-2 bottom-0 bg-primary w-14 h-14 rounded-full flex justify-center items-center text-white"
            >
              <FiEdit size={28} />
            </Link> */}
          </div>
        </div>

        <div className="h-[calc(100vh-495px)] overflow-y-auto hidden-scrollbar p-1 mb-5">
          <InputDefault
            label="name"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Digite o name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputDefault
            icon={FiMap}
            label="Localização"
            type="text"
            id="localization"
            name="localization"
            value={localization}
            placeholder="Digite a sua localização"
            onChange={(e) => setLocalization(e.target.value)}
          />
          <InputDefault
            icon={FaBirthdayCake}
            label="Data de nascimento"
            type="date"
            id="date"
            name="date"
            value={date}
            placeholder="DD/MM/AAAA"
            onChange={(e) => setDate(e.target.value)}
          />

          <InputGender
            label="Sexo"
            type="email"
            id="email"
            name="email"
            value={crime}
            placeholder="Digite o seu e-mail"
            onChange={(e) => setCrime(e.target.value)}
          />

          <InputDefault
            label="Crime"
            type="text"
            id="crime"
            name="crime"
            value={crime}
            placeholder="Crime"
            onChange={(e) => setCrime(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button text="Informar localização" variant="primary" />
          <Link href="/home">
            <Button text="Cancelar" variant="secondary" />
          </Link>
        </div>
      </main>
    </div>
  );
}
