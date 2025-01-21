import React, { useState } from "react";
import { CircleEllipsis, Search, ShoppingCart } from "lucide-react";
import TennisBanner from "../assets/images/tenis.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-[calc(4rem+10px)]">
      <div className="fixed justify-between top-0 flex items-center z-10 bg-white w-full shadow-md text-slate-600 text-lg p-4">
        <div
          id="btnNavbar"
          className="hover:cursor-pointer  sm:hidden absolute p-1 top-3 right-2"
          onClick={toggleMenu}
        >
          <CircleEllipsis />
        </div>

        {/* Menu principal */}
        <ul
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out  sm:flex items-center gap-10 text-base ${
            isMenuOpen ? "max-h-40" : "max-h-2"
          } sm:max-h-full sm:flex-row`}
        >
          <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
            Home
          </li>
          <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
            Products
          </li>
          <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
            Contact
          </li>
          <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
            Offers
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <Search />
          <input
            type="text"
            className="border-slate-600 border-2 rounded-md p-2 w-56 h-8"
          />
          <ShoppingCart className="hover:scale-110 ml-10" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
