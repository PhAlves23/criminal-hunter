"use client";
import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function Recover() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <div className="container-desktop">
      <header className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Recuperar senha</p>
        </div>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </header>
      <main className="w-full px-5 pt-10 pb-5">
        <div>
          <InputDefault
            label="E-mail"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button text="Recuperar" variant="primary" />
      </main>
    </div>
  );
}
