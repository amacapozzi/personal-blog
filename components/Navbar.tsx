import { SearchIcon } from "components/Icons/Search";

import Image from "next/image";

const navItems = [
  {
    name: "Inicio",
  },
  {
    name: "Blog",
  },
  {
    name: "Contacto",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between p-3">
      <ul className="flex flex-row items-center gap-2">
        <img
          src="https://media.discordapp.net/attachments/1208131052628086844/1212459015146176512/7785dd13-00da-410e-8cc2-8d47856979ff.jpg?ex=65f1e973&is=65df7473&hm=abb3d45dd93ba037c654b2ba371d585d66286a91af74b9528db3bc840cda6fd5&=&format=webp"
          className="rounded-full w-8 h-8"
          alt=""
        />
        <li className="font-semibold tracking-tight text-white">amadev</li>
      </ul>
      <ul>
        <div className="relative">
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <SearchIcon />
          </div>
          <input
            className="border-[#3c4654]  focus:placeholder:hidden px-7 w-[200px] focus:text-gray-400 h-[30px] outline-0 border rounded-full text-xs text-gray-200 bg-transparent"
            type="text"
            placeholder="Buscar"
          />
        </div>
      </ul>
    </nav>
  );
}
