"use client";

import { ButtonLinks } from "@/components/button_links";
import { buttonLinksItems } from "@/mocks";
import Image from "next/image";
import Link from "next/link";

export default function Entry() {
  return (
    <div className="w-screen h-screen bg-[url('/banner.png')] bg-no-repeat bg-auto bg-right-top lg:bg-cover lg:bg-center">
      <div className="px-5 py-3">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo Criminal Hunter"
        />
      </div>
      <div className="w-full h-auto absolute bottom-0 left-0 right-0 px-5 py-5 bg-primary rounded-t-2xl">
        <div className="flex flex-col justify-center items-center font-bold mb-5">
          <h2 className="text-5xl mb-2">Ótimo</h2>
          <p className="text-xl">Vamos punir um criminoso hoje!!</p>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          {Array.isArray(buttonLinksItems) &&
            buttonLinksItems.length > 0 &&
            buttonLinksItems.map(({ id, icon, text, variant }) => {
              return (
                <ButtonLinks key={id} icon={icon} variant={variant}>
                  {text}
                </ButtonLinks>
              );
            })}
        </div>
        <Link
          href="/home"
          className="font-thin flex justify-center items-center"
        >
          Acesso anônimo
        </Link>
      </div>
    </div>
  );
}
