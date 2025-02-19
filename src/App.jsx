import { useEffect, useState } from "react";
import { gsap } from "gsap";
import NavBar from "./components/NavBar";
import { TypeAnimation } from "react-type-animation";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Carousel from "./components/carousel";
import TennisBanner from "./assets/images/tenis.png";
import Cart from "./components/cart";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        // Se o item já está no carrinho, atualiza a quantidade
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 } // Aumenta a quantidade
            : cartItem
        );
      } else {
        // Se o item não está no carrinho, adiciona ele com qtde = 1
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const handleQtyChange = (itemId, newQty) => {
    // Verifica se a nova quantidade é válida
    if (newQty < 1) return; // Evita que a quantidade seja menor que 1

    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, qty: newQty } // Atualiza a quantidade do item
          : cartItem
      )
    );
  };

  const removeToCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };
  const countCart = cart.length;

  useEffect(() => {
    gsap.registerPlugin();

    gsap.set("#tennis", { x: "-100%", opacity: 0 });
    gsap.set("#banner", { x: "-50%", opacity: 0 });
    gsap.set("#tennis-text", { opacity: 0 });
    gsap.set("#button-banner", { opacity: 0 });

    gsap.to("#banner", {
      duration: 2,
      opacity: 1,
      x: 0,
      ease: "power2",
    });

    gsap.to("#tennis", {
      duration: 3,
      delay: 0.5,
      opacity: 1,
      x: 0,
      ease: "power2",
    });

    gsap.to("#tennis-text", {
      duration: 5,
      opacity: 1,
    });

    gsap.to("#button-banner", {
      duration: 2,
      opacity: 1,
    });
  }, []);

  return (
    <div className="">
      <NavBar
        countCart={countCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        itemsCart={cart}
      />
      <Cart
        itemsCart={cart}
        removeToCart={removeToCart}
        handleQtyChange={handleQtyChange}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
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
        className="   flex flex-col sm:flex-row items-center m-6 rounded-lg bg-gradient-to-tr from-blue-300 to-green-500  shadow-xl"
      >
        <div className="w-full">
          <img
            className="drop-shadow-custom"
            src={TennisBanner}
            id="tennis"
            alt="tennis"
          />
        </div>

        <div className="m-4 w-full flex flex-col items-center justify-center">
          <h2
            className="font-bold text-center p-4 text-4xl align-middle text-slate-100 "
            id="tennis-text"
          >
            Air Jordan Chicago
          </h2>
          <p className=" text-center p-8 text-slate-100">
            Ready to hit the streets with sophistication and style? The Air
            Jordan Chicago is the right choice for you. Get yours now!
          </p>
        </div>
      </div>

      <div>
        <h1 className="italic text-center text-4xl font-bold text-amber-500 p-2">
          OFFERS
        </h1>
      </div>

      <Carousel addToCart={addToCart} removeToCart={removeToCart} />
    </div>
  );
}

export default App;
