import { useEffect } from "react";
import { gsap } from "gsap";
import Example from "./components/menu";
import { TypeAnimation } from "react-type-animation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function App() {
  useEffect(() => {
    // Defina uma função para disparar quando a página estiver completamente carregada
    const handleWindowLoad = () => {
      gsap.registerPlugin();

      gsap.to("#tenis", {
        duration: 2,
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        filter: "drop-shadow(2px 4px 6px)",
      });

      gsap.to("#tennis-text", {
        duration: 2,
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      });

      gsap.to("#button-banner", {
        duration: 2,
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      });
    };

    // Adiciona o evento de load ao window
    window.onload = handleWindowLoad;

    return () => {
      // Limpa o evento quando o componente é desmontado
      window.onload = null;
    };
  }, []);

  return (
    <div className="bg-slate-300">
      <Example />
      <div className="min-h-40 text-2xl text-slate-600 bold font-bold p-4 text-center content-center">
        <TypeAnimation
          sequence={[
            "Your trusted e-commerce. Find what you need here.",
            2000,
            "Free shipping to all of Brazil! Don't miss this opportunity.",
            2000,
            "Unmissable offers! Enjoy incredible discounts for a limited time.",
            2000,
          ]}
          wrapper="span"
          speed={70}
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <div className="m-8 place-items-center relative">
          <img
            className="w-lvw opacity-0 rounded-3xl -translate-x-full drop-shadow-2xl"
            src="./src/assets/images/tenis.png"
            id="tenis"
          />
        </div>

        <div className="m-8 w-full text-center place-items-center">
          <h2
            className="font-bold text-4xl text-center align-middle text-slate-600 opacity-0 translate-x-full blur-md"
            id="tennis-text"
          >
            Air Jordan 1 High Chicago Sneakers <br /> "Lost and Found"
          </h2>
          <button
            className="shadow-custom flex m-20 font-bold text-slate-600 bg-slate-300 items-center p-4 rounded-lg text-2xl text-center opacity-0 translate-x-full blur-md"
            id="button-banner"
          >
            <ShoppingCartIcon className="w-8 h-8 mr-4" /> Add to Cart
          </button>
        </div>
      </div>

      <div className="text-3xl">carrossel</div>
    </div>
  );
}

export default App;
