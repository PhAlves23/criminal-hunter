"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiChevronLeft, FiMap } from "react-icons/fi";
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
  const [weight, setWeight] = useState("70kg");
  const [height, setHeight] = useState("1,80m");
  const [race, setRace] = useState("Caucasiano");
  const [nacionality, setNacionality] = useState("Americano");
  const [gender, setGender] = useState("Masculino");
  const [origin, setOrigin] = useState("FBI - Most Wanted");
  const [selectedGenderValue, setSelectedGenderValue] = useState("Masculino");

  return (
    <div className="container-desktop">
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
          <div className="w-[250px] h-[250px] relative">
            <Image
              src="/coringa.webp"
              width={250}
              height={250}
              alt=""
              className="rounded-full border border-primary"
            />
            <div className="absolute right-0 left-0 bottom-0 py-1 px-2 text-2xl font-bold rounded-full flex justify-center items-center text-primary bg-gray-300 uppercase">
              Procurado
            </div>
          </div>
        </div>

        <div className="h-[calc(100dvh-495px)] overflow-y-auto hidden-scrollbar p-1 mb-5">
          <InputDefault
            label="Nome"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Digite o name"
            disabled
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
            disabled
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
            disabled
            onChange={(e) => setDate(e.target.value)}
          />

          <InputDefault
            label="Crime"
            type="text"
            id="crime"
            name="crime"
            value={crime}
            placeholder="Crime"
            disabled
            onChange={(e) => setCrime(e.target.value)}
          />

          <div className="flex justify-between items-center gap-5">
            <InputDefault
              label="Peso"
              type="text"
              id="weight"
              name="weight"
              value={weight}
              placeholder="Peso"
              disabled
              onChange={(e) => setWeight(e.target.value)}
            />
            <InputDefault
              label="Altura"
              type="text"
              id="height"
              name="height"
              value={height}
              placeholder="Altura"
              disabled
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <InputGender
            label="Sexo"
            setSelectedGenderValue={setSelectedGenderValue}
            disabled
          />
          <div className="flex justify-between items-center gap-5">
            <InputDefault
              label="Raça"
              type="text"
              id="race"
              name="race"
              value={race}
              placeholder="Raça"
              disabled
              onChange={(e) => setRace(e.target.value)}
            />

            <InputDefault
              label="Nacionalidade"
              type="text"
              id="nacionality"
              name="nacionality"
              value={nacionality}
              placeholder="Nacionalidade"
              disabled
              onChange={(e) => setNacionality(e.target.value)}
            />
          </div>
          <InputDefault
            label="Origem"
            type="text"
            id="origin"
            name="origin"
            value={origin}
            placeholder="origin"
            disabled
            onChange={(e) => setOrigin(e.target.value)}
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
