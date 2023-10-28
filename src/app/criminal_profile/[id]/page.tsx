"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiChevronLeft, FiMap } from "react-icons/fi";
import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import { InputGender } from "@/components/inputs/input_gender";
import { useEffect, useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Profile(query: any) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [localization, setLocalization] = useState("");
  const [date, setDate] = useState("");
  const [crimes, setCrimes] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [race, setRace] = useState("");
  const [nacionality, setNacionality] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [selectedGenderValue, setSelectedGenderValue] = useState("");
  const [criminal, setCriminal] = useState<Criminal>({} as Criminal);

  const {
    id,
    crime,
    nome,
    altura,
    cabelo,
    peso,
    olhos,
    raca,
    nacionalidade,
    sexo,
    url_foto,
    origem,
    created_at,
    updated_at,
    data_aniversario_usada,
  } = query.searchParams;

  useEffect(() => {
    setName(nome);
    setLocalization(localization);
    setDate(data_aniversario_usada);
    setCrimes(crime);
    setWeight(peso);
    setRace(raca);
    setGender(sexo);
    setOrigin(origem);
    setNacionality(nacionalidade);
    setHeight(altura);
  }, [
    nome,
    cabelo,
    data_aniversario_usada,
    crime,
    localization,
    altura,
    peso,
    raca,
    sexo,
    origem,
    nacionalidade,
  ]);

  const data_aniversario = data_aniversario_usada
    ?.replace(/\[|\]/g, "")
    ?.replace(/"/g, "");

  const handleLocalization = () => {
    toast.success("Sua denúncia foi enviada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
        background: "#020a10",
      },
    });
  };

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
          <div className="w-[250px] h-[250px] min-w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] relative">
            <Image
              src={url_foto ? url_foto : "/no_avatar.jpg"}
              width={250}
              height={250}
              alt=""
              className="rounded-full border border-primary max-w-[250px] max-h-[250px] object-cover bg-center"
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
            value={name === "" || name === "null" ? "não informado" : name}
            placeholder="Digite o nome"
            disabled
            onChange={(e) => setName(e.target.value)}
          />
          {localization && (
            <InputDefault
              icon={FiMap}
              label="Localização"
              type="text"
              id="localization"
              name="localization"
              value={
                localization === "" || localization === "null"
                  ? "não informado"
                  : localization
              }
              placeholder="Digite a sua localização"
              disabled
              onChange={(e) => setLocalization(e.target.value)}
            />
          )}

          <InputDefault
            icon={FaBirthdayCake}
            label="Data de nascimento"
            type="text"
            id="date"
            name="date"
            value={
              data_aniversario === "" || data_aniversario === "null"
                ? "não informado"
                : data_aniversario
            }
            placeholder="DD/MM/AAAA"
            disabled
            onChange={(e) => setDate(e.target.value)}
          />

          <InputDefault
            label="Crime"
            type="text"
            id="crime"
            name="crime"
            value={
              crimes === "" || crimes === "null" ? "não informado" : crimes
            }
            placeholder="Crime"
            disabled
            onChange={(e) => setCrimes(e.target.value)}
          />
          <InputDefault
            label="Peso"
            type="text"
            id="weight"
            name="weight"
            value={
              weight === "" || weight === "null" ? "não informado" : weight
            }
            placeholder="Peso"
            disabled
            onChange={(e) => setWeight(e.target.value)}
          />
          <InputDefault
            label="Altura"
            type="text"
            id="height"
            name="height"
            value={
              height === "" || height === "null" ? "não informado" : height
            }
            disabled
            onChange={(e) => setHeight(e.target.value)}
          />
          <InputGender
            label="Sexo"
            selectedGenderValue={sexo}
            setSelectedGenderValue={setSelectedGenderValue}
            disabled
          />
          <div className="w-full flex justify-between items-center gap-5">
            <div className="w-full">
              <InputDefault
                label="Raça"
                type="text"
                id="race"
                name="race"
                value={race === "" || race === "null" ? "não informado" : race}
                placeholder="Raça"
                disabled
                onChange={(e) => setRace(e.target.value)}
              />
            </div>
            <div className="w-full">
              <InputDefault
                label="Nacionalidade"
                type="text"
                id="nacionality"
                name="nacionality"
                value={
                  nacionality === "" || nacionality === "null"
                    ? "não informado"
                    : nacionality
                }
                placeholder="Nacionalidade"
                disabled
                onChange={(e) => setNacionality(e.target.value)}
              />
            </div>
          </div>
          {origin && (
            <InputDefault
              label="Origem"
              type="text"
              id="origin"
              name="origin"
              value={
                origin === "" || origin === "null" ? "não informado" : origin
              }
              placeholder="origin"
              disabled
              onChange={(e) => setOrigin(e.target.value)}
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button
            text="Informar localização"
            variant="primary"
            onClick={handleLocalization}
          />
          <Link href="/home">
            <Button text="Cancelar" variant="secondary" />
          </Link>
        </div>
      </main>
    </div>
  );
}
