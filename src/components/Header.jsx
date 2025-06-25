import { NavLink } from "react-router-dom";
import NavMenuLink from "../UI/NavLinkMenu";

function Header() {
  return (
    <header className="bg-mint-500 px-5 py-8 flex justify-between shadow-md">
      <img className="h-6" src="/logo.svg" alt="logo" />
      {/* <h1 className="flex mb-5 text-4xl text-red-900">Header</h1> */}
      <nav>
        <ul className="flex gap-14">
          <li>
            <NavMenuLink to={"/"}>Home</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={"/about"}>About</NavMenuLink>
          </li>
          <li>
            <NavMenuLink to={"/cart"}>Cart</NavMenuLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
