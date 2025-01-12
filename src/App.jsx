import { useLayoutEffect } from "react";
import Example from "./components/menu";
import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#tenis", {
      duration: 3,
      x: 0,
      opacity: 1,
    });

    return () => {
      gsap.killTweensOf("#tenis");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#texto-tenis", {
      duration: 3,
      x: 0,
      opacity: 1,
    });

    return () => {
      gsap.killTweensOf("#texto-tenis");
    };
  }, []);

  return (
    <div className="bg-slate-700">
      <Example />
      <div className=" min-h-40 text-2xl text-slate-200 bold font-bold p-4 text-center content-center">
        <TypeAnimation
          sequence={[
            "Seu e-commerce de confiança. Encontre o que você precisa aqui.",
            2000,
            "Frete grátis para todo o Brasil! Não perca essa oportunidade.",
            2000,
            "Ofertas imperdíveis! Aproveite descontos incríveis por tempo limitado.",
            2000,
          ]}
          wrapper="span"
          speed={70}
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <div className="m-8  place-items-center ">
          <img
            className="w-full transform: -translate-x-full opacity-0 rounded-3xl shadow-2xl"
            src="./src/assets/images/tenis.png"
            id="tenis"
          />
        </div>

        <div className="m-8 w-full">
          <h2
            className="transform: translate-x-full font-bold text-4xl text-center align-middle text-slate-200"
            id="texto-tenis"
          >
            Tênis Air Jordan 1 High Chicago <br /> "Lost and Found"
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
