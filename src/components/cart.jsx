import exitImg from "../assets/images/exit.png";

function Cart(props) {
  return (
    <div
      id="cart"
      className={`${props.isCartOpen ? "translate-x-0" : "translate-x-full"}
        transition-all duration-1000 ease-in-out bg-slate-400/40 backdrop-blur-md sm:w-2/3 w-full  overflow-y-auto fixed z-30 right-0 top-0 h-screen p-4 sm:p-8`}
    >
      <div
        onClick={() => props.setIsCartOpen(!props.isCartOpen)}
        className="w-6 h-6 m-4 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-100"
      >
        <img src={exitImg} alt="exit" />
      </div>
      <div className="p-4 font-bold text-2xl text-slate-900 text-center">
        <h1>My Cart</h1>
      </div>
      <div>
        <ul className="overflow-y-auto flex flex-col">
          {props.itemsCart.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-white place-items-center p-2 m-2  sm:p-4 sm:m-4 rounded-md flex justify-between"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="sm:w-28 sm:h-28 w-14 h-14"
                />
                <div className="sm:text-xl text-sm flex items-center ">
                  <h2>{item.title}</h2>
                </div>
                <div className="sm:text-xl text-sm flex flex-col place-items-center">
                  <div className="w-max flex place-items-center">
                    <label htmlFor={`qty-${item.id}`}>Quantity: </label>
                    <input
                      id={`qty-${item.id}`} // Garantir id único
                      type="number"
                      value={item.qty}
                      className="border-1 w-10 text-center border-black"
                      onChange={(e) =>
                        props.handleQtyChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <h2>{item.price}</h2>
                  <button
                    className="hover:scale-105 w-10 text-xs flex justify-center active:scale-100 transition-all font-bold bg-gradient-to-tr shadow-md from-blue-300 to-green-500 text-slate-100 p-2 m-2 rounded-md pl-8 pr-8"
                    onClick={() => props.removeToCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="bg-white shadow-md font-bold p-4 m-4 rounded-md flex flex-col text-center justify-center">
          <h2>Total</h2>
          <div>
            <h2>
              Subtotal:{" "}
              {props.itemsCart.reduce(
                (acumulator, item) => acumulator + item.qty,
                0
              )}{" "}
              items
            </h2>
            <h2>
              Total Price: $
              {props.itemsCart
                .reduce(
                  (acumulator, item) =>
                    acumulator + parseFloat(item.price) * item.qty,
                  0
                )
                .toFixed(2)}{" "}
              {/* Garantir que o valor seja formatado como número com 2 casas decimais */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
