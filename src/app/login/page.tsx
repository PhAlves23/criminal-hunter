"use client";

import { Button } from "@/components/button";
import { InputDefault } from "@/components/inputs/input_default";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <header className="px-5 py-3 flex justify-between items-center">
        <Image
          src="/logo_name.svg"
          width={160}
          height={50}
          alt="Logo Criminal Hunger"
        />
      </header>
      <main className="px-5 py-10">
        <h2 className="text-4xl font-semibold mb-5">
          Os criminosos mais procurados do mundo
        </h2>
        <p className="mb-10">
          Este aplicativo mostra os criminosos mais procurados pelo FBI e
          interpol de maneira simples e rápida.
        </p>

        <div className="mb-10">
          <InputDefault
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
          <div className="">
            <Link href="/recover">Esqueceu a senha?</Link>
          </div>
        </div>

        <Link href="/home">
          <div className="mb-5">
            <Button text="Entrar" />
          </div>
        </Link>

        <div className="flex justify-center items-center">
          <Link href="/register">
            Ainda não tem uma conta?{" "}
            <span className="text-primary font-bold">Inscreva-se</span>
          </Link>
        </div>
      </main>
    </>
  );
}
