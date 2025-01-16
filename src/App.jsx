import { useEffect } from "react";
import { gsap } from "gsap";
import Example from "./components/menu";
import { TypeAnimation } from "react-type-animation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Carousel from "./components/carousel";
import TennisBanner from "./assets/images/tenis.png";

function App() {
  useEffect(() => {
    // Defina uma função para disparar quando a página estiver completamente carregada
    const handleWindowLoad = () => {
      gsap.registerPlugin();

      gsap.set("#tenis", { x: "-100%", opacity: 0, filter: "blur(10px)" });
      gsap.set("banner", { opacity: 0, filter: "blur(10px)" });
      gsap.set("#texto-tenis", { x: "100%", opacity: 0, filter: "blur(10px)" });
      gsap.set("#button-banner", {
        x: "100",
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.to("#banner", {
        duration: 2,
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
      });

      gsap.to("#tenis", {
        duration: 2,
        x: 0,
        opacity: 1,
        filter: "blur(0px) drop-shadow(8px 10px 8px)",
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
    <div className="">
      <Example />
      <div className="min-h-24 text-xl text-slate-600 bold font-bold p-4 text-center content-center">
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

      <div
        id="banner"
        className=" -translate-x-full  opacity-0 flex flex-col sm:flex-row items-center m-6 rounded-lg bg-gradient-to-tr from-blue-300 to-green-500  shadow-xl"
      >
        <div className="w-full">
          <img
            className=" opacity-0 z-10  drop-shadow-2xl"
            src={TennisBanner}
            id="tenis"
          />
        </div>

        <div className="m-4 w-full place-items-center">
          <h2
            className="font-bold text-center p-4 text-4xl align-middle text-slate-100 opacity-0 translate-x-full blur-md"
            id="tennis-text"
          >
            Air Jordan Chicago
          </h2>
          <p className=" text-center p-8 text-slate-100">
            Ready to hit the streets with sophistication and style? The Air
            Jordan Chicago is the right choice for you. Get yours now!
          </p>
          <button
            className="bg-gradient-to-tr from-blue-300 to-green-600 shadow-2xl flex m-4 font-bold text-slate-100  items-center p-4 rounded-lg text-2xl text-center opacity-0 translate-x-full blur-md"
            id="button-banner"
          >
            <ShoppingCartIcon className="w-8 h-8 mr-4" /> Add to Cart
          </button>
        </div>
      </div>

      <div>
        <h1 className="italic text-center text-4xl font-bold text-amber-500 p-2">
          OFFERS
        </h1>
      </div>

      <Carousel />
    </div>
  );
}

export default App;
