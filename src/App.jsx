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

  return (
    <div>
      <Example />
      <div className="text-1xl text-slate-500 bold font-bold p-4 text-center">
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
        <div className="m-8">
          <img
            className=" transform: -translate-x-full opacity-0 w-50 border-solid border-2 border-gray-500 rounded-3xl shadow-2xl"
            src="./src/assets/images/tenis.png"
            id="tenis"
          />
        </div>

        <div className="m-8">
          <h2 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            officiis ab dolorem vitae sit esse dolor ipsum voluptatem quae,
            dignissimos accusantium molestias et dicta distinctio nobis nulla
            suscipit placeat doloribus.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
