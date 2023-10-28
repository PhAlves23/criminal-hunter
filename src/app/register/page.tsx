"use client";

import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronLeft, FiMail, FiMap } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";
import { InputGender } from "@/components/inputs/input_gender";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [localization, setLocalization] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedGenderValue, setSelectedGenderValue] = useState("Masculino");

  return (
    <div className="container-desktop">
      <header className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Cadastro</p>
        </div>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </header>

      <main className="px-4 py-10 pb-0">
        <h2 className="text-3xl font-bold mb-3">Entre com seu e-mail</h2>
        <p className="mb-4">
          Cadastre-se agora e conheça os criminosos mais procurados pelo FBI e
          Interpol!
        </p>

        <div className="h-[calc(100dvh-330px)] overflow-y-auto hidden-scrollbar p-1 mb-5">
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
            selectedGenderValue={selectedGenderValue}
            setSelectedGenderValue={setSelectedGenderValue}
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
          <InputDefault
            label="Senha"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputDefault
            label="Confirme a senha"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirme a sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Link href="/login">
          <Button text="Criar conta" />
        </Link>
      </main>
    </div>
  );
}
