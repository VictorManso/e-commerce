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

      <div
        id="banner"
        className=" -translate-x-full  opacity-0 flex flex-col sm:flex-row items-center m-8 rounded-lg bg-gradient-to-r from-slate-300 to-red-800 shadow-xl"
      >
        <div className="w-full">
          <img
            className=" opacity-0 z-10  drop-shadow-2xl"
            src="./src/assets/images/tenis.png"
            id="tenis"
          />
        </div>

        <div className="m-4 w-full place-items-center">
          <h2
            className="font-bold text-center p-4 text-4xl align-middle text-slate-200 opacity-0 translate-x-full blur-md"
            id="tennis-text"
          >
            Air Jordan Chicago
          </h2>
          <button
            className="bg-slate-300 shadow-2xl flex m-4 font-bold text-green-800  items-center p-4 rounded-lg text-2xl text-center opacity-0 translate-x-full blur-md"
            id="button-banner"
          >
            <ShoppingCartIcon className="w-8 h-8 mr-4" /> Add to Cart
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl font-bold">Carousel</h1>
      </div>

      <div
        id="carousel"
        className=" m-4 relative flex w-full max-w-4xl mx-auto overflow-hidden bg-black place-content-center"
      >
        <div className=" carousel-inner  m-2 flex flex-row items-center bg-slate-400">
          <div className="cards">
            <img
              className="w-full"
              src="./src/assets/images/tenis.png"
              alt="tenis"
            />
            <div className="text-cards ">
              <h1 className="">Tennis name</h1>
            </div>
            <div className="paragraph-cards">
              <p className="">Tennis description</p>
            </div>
          </div>

          <div className=" cards">
            <img
              className="w-full"
              src="./src/assets/images/tenis.png"
              alt="tenis"
            />
            <div className="text-cards">
              <h1 className="m-0">Tennis name</h1>
            </div>
            <div className="paragraph-cards">
              <p className="m-0">Tennis description</p>
            </div>
          </div>

          <div className=" cards">
            <img
              className="w-full"
              src="./src/assets/images/tenis.png"
              alt="tenis"
            />
            <div className="text-cards">
              <h1 className="m-0">Tennis name</h1>
            </div>
            <div className="paragraph-cards">
              <p className="m-0">Tennis description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
