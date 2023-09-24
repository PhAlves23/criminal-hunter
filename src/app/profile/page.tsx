"use client";

import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import { InputGender } from "@/components/inputs/input_gender";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { FiChevronLeft, FiMail, FiMap } from "react-icons/fi";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("Paulo Henrique");
  const [localization, setLocalization] = useState("São Paulo, BR");
  const [date, setDate] = useState("2003-02-23");
  const [email, setEmail] = useState("ph23.alves@gmail.com");

  return (
    <>
      <header className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Editar Perfil</p>
        </div>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </header>
      <main className="px-5 pt-3 pb-5">
        <div className="flex justify-center items-center mb-5">
          <div className="w-[250px] h-[250px] relative">
            <Image
              src="https://github.com/PhAlves23.png"
              width={250}
              height={250}
              alt=""
              className="rounded-full"
            />
          </div>
        </div>

        <div className="h-[calc(100vh-525px)] overflow-y-auto hidden-scrollbar p-1 mb-5">
          <InputDefault
            label="Nome"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Digite o seu nome"
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
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputDefault
            icon={FiMail}
            label="E-mail"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/home">
            <Button text="Salvar" variant="primary" />
          </Link>
          <Link href="/home">
            <Button text="Cancelar" variant="secondary" />
          </Link>
        </div>
      </main>
    </>
  );
}
