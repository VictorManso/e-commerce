import { CircleEllipsis } from "lucide-react";

function NavBar() {
  return (
    <div className="fixed top-0 flex items-center z-10 bg-white w-full  shadow-md text-slate-600 text-lg p-4 ">
      <ul className=" sm:flex items-center gap-4 justify-between text-base ">
        <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
          Home
        </li>
        <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
          Products
        </li>
        <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
          Contact
        </li>
        <li className="hover:bg-emerald-500 rounded-md hover:text-white hover:cursor-pointer hover:shadow-md transition-all p-1">
          Offers
        </li>
      </ul>
      <div className="sm:hidden absolute p-1 top-2 right-2">
        <CircleEllipsis />
      </div>
    </div>
  );
}

export default NavBar;
