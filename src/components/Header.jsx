import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-mint-500 px-5 py-8 flex justify-between shadow-md">
      <img className="h-6" src="/logo.svg" alt="logo" />
      {/* <h1 className="flex mb-5 text-4xl text-red-900">Header</h1> */}
      <nav>
        <ul className="flex gap-14">
          <li className="mb-4">
            <NavLink className="font-semibold" to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink className="font-semibold" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="">
            <NavLink className="font-semibold" to={"/cart"}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
