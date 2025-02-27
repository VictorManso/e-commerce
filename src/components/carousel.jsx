import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, React } from "react";
import tennis1 from "../assets/images/tennis1.png";
import tennis2 from "../assets/images/tennis2.png";
import tennis3 from "../assets/images/tennis3.png";
import tennis4 from "../assets/images/tennis4.png";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      img: tennis1,
      title: "Nike Air Jordan 1",
      price: 400,
      qty: 0,
    },
    {
      id: 2,
      img: tennis2,
      title: "Nike Air Jordan 1 Mid",
      price: 400,
      qty: 0,
    },
    {
      id: 3,
      img: tennis3,
      title: "Nike Air Jordan 1",
      price: 400,
      qty: 0,
    },
    {
      id: 4,
      img: tennis4,
      title: "Nike Air Jordan 1",
      price: 400,
      qty: 0,
    },
  ];

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((next) => (next === cards.length - 1 ? 0 : next + 1));
  };

  return (
    <div
      id="carousel"
      className="relative flex w-full max-w-6xl mx-auto overflow-hidden place-content-center "
    >
      <div className=" w-full flex-shrink-0 flex">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full place-content-center sm:w-1/2 lg:w-2/6 flex-shrink-0 p-4 flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="bg-gradient-to-bl from-slate-300 to-white rounded-lg shadow-lg p-2 m-4 text-center">
              <img className="object-cover" src={card.img} alt="tenis" />
              <h1 className="m-4 font-bold text-xl text-slate-700">
                {card.title}
              </h1>
              <p className="m-4 font-bold text-slate-500 ">$ {card.price}</p>
              <button
                onClick={() => props.addToCart(card)}
                className="hover:scale-110 active:scale-100 transition-all font-bold bg-gradient-to-tr shadow-md from-blue-300 to-green-500 text-slate-100 p-2 m-2 rounded-md pl-8 pr-8"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        title="btnLeft"
        onClick={prevCard}
        className=" ml-4 active:scale-90 transition-all absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-bl from-slate-500 to-slate-50 text-white p-2 rounded-md"
      >
        <ChevronLeftIcon />
      </button>
      <button
        title="btnRight"
        onClick={nextCard}
        className="mr-4 absolute active:scale-90 transition-all right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-slate-500 to-slate-50 text-white p-2 rounded-md"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default Carousel;
