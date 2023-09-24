"use client";
import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function ChangePassword() {
  const router = useRouter();
  const [actualPassword, setActualPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="container-desktop">
      <header className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2" onClick={() => router.back()}>
          <FiChevronLeft size={32} className="text-secondary" />
          <p>Alterar senha</p>
        </div>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </header>
      <main className="w-full h-[calc(100dvh-81px)] px-5 pt-10 pb-5 flex flex-col justify-between">
        <div>
          <InputDefault
            label="Senha atual"
            type="password"
            id="actualPassword"
            name="actualPassword"
            value={actualPassword}
            placeholder="Digite a senha atual"
            onChange={(e) => setActualPassword(e.target.value)}
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
        <div className="flex flex-col gap-3">
          <Link href="/profile">
            <Button text="Salvar" variant="primary" />
          </Link>
          <Link href="/profile">
            <Button text="Cancelar" variant="secondary" />
          </Link>
        </div>
      </main>
    </div>
  );
}
