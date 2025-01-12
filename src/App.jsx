import Example from "./components/menu";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div>
      <Example />
      <div className="text-1xl text-slate-500 bold font-bold p-4">
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
    </div>
  );
}

export default App;
