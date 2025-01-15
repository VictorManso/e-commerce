import React, { useState } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      img: "./src/assets/images/tenis.png",
      title: "Tennis name",
      description: "Awesome tennis",
    },
    {
      id: 2,
      img: "./src/assets/images/tenis.png",
      title: "Tennis name",
      description: "Tennis description",
    },
    {
      id: 3,
      img: "./src/assets/images/tenis.png",
      title: "Tennis name",
      description: "Tennis description",
    },
    {
      id: 4,
      img: "./src/assets/images/tenis.png",
      title: "Tennis name",
      description: "Tennis description",
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
      className="relative m-4 flex w-full max-w-6xl mx-auto overflow-hidden "
    >
      {/* Contêiner que move todos os cards juntos */}
      <div className=" w-full flex-shrink-0 flex">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-2/5 lg:w-2/5 flex-shrink-0 p-4 flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move o contêiner dos cards
            }}
          >
            <div className="m-4 bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={card.img}
                alt="tenis"
              />
              <h1 className="m-4">{card.title}</h1>
              <p className="m-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevCard}
        className="m-4 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={nextCard}
        className="m-4 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
