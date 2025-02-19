function Cart(props) {
  return (
    <div className="bg-slate-200 w-2/3 overflow-y-auto fixed z-10 right-0 top-0 h-screen ">
      <div className="p-4">
        <h1>My Cart</h1>
      </div>
      <div>
        <ul className="overflow-y-auto flex flex-col">
          {props.itemsCart.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-white p-4 m-4 rounded-md flex justify-between"
              >
                <img src={item.img} alt={item.title} className="w-28 h-28" />
                <div className="flex items-center ">
                  <h2>{item.title}</h2>
                </div>
                <div className="flex flex-col place-items-center">
                  <div className="w-max flex place-items-center gap-2">
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
                    className="bg-slate-300 rounded-md m-2 p-1"
                    onClick={() => props.removeToCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="bg-white font-bold p-4 m-4 rounded-md flex flex-col text-center justify-center">
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
