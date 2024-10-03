import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const headerMenu = [
    {
      id: 1,
      name: "Transport",
      icon: "/taxi.png",
    },
    {
      id: 2,
      name: "Livraison",
      icon: "/box.png",
    },
  ];
  return (
    <div className="p5 pb-3 pl-10 border-4-[4px] border-blue-900 flex items-center justify-between">
      <div className="flex gap-24 items-center">
        <Image src="/logo.png" width={180} height={210} alt="Logo" />
        <div className="flex gap-6 items-center">
          {headerMenu.map((item) => (
            <div className="flex gap-2 item-center">
              <Image src={item.icon} width={17} height={17} />
              <h2 className="text-[14px] font-medium">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
}

export default Header;
