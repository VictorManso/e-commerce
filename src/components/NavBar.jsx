import React, { useState, useRef, useEffect } from "react";
import { CircleEllipsis, Search, ShoppingCart } from "lucide-react";

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Referência para a navbar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    // Verifica se o clique foi fora da navbar
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Fecha o menu
    }
  };

  useEffect(() => {
    // Adiciona o listener para detectar cliques fora
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-[calc(4rem+10px)]">
      <div
        ref={navRef} // Referência para a navbar
        className="fixed justify-center top-0 flex items-center z-10 bg-white w-full shadow-md text-slate-600 text-lg p-4"
      >
        <div
          id="btnNavbar"
          className="hover:cursor-pointer sm:hidden absolute p-1 top-4 right-2"
          onClick={toggleMenu}
        >
          <CircleEllipsis />
        </div>

        {/* Menu principal */}
        <ul
          className={`sm:flex items-center gap-4 mr-64 text-base ${
            isMenuOpen ? "max-h-40" : "max-h-2 hidden"
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
        <div
          className={`flex gap-2 items-center ${
            isMenuOpen ? "hidden" : "flex"
          }`}
        >
          <Search />
          <input
            placeholder="Search here..."
            type="text"
            className="border-slate-600 border-2 rounded-md p-2 w-48 h-8"
          />
          <div className="group relative">
            <ShoppingCart className="hover:scale-110" />
            <span className="absolute text-center -top-2 -right-2 bg-emerald-500 text-white rounded-full w-4 h-4 text-xs ">
              {props.countCart > 0 ? props.countCart : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
