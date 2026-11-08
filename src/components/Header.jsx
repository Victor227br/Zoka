import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoReceiptOutline } from "react-icons/io5";
import shoppingCartIcon from "../assets/icon/icon_shoppingCart-white.png";
import profileIcon from "../assets/icon/icon_profile.png";
import zokaLogo from "../assets/icon/zoka-logo-primary.png";
import { CartContext } from "../context/cartContext";

const Header = () => {
  const {cartQuantity} = useContext(CartContext);

  return (
    <header className="flex h-[9vh] items-center justify-between border-white/10 bg-[#0344DC]">
      <Link
        to="/"
        className="ml-6 flex shrink-0 items-center lg:ml-16">
        <img
          src={zokaLogo}
          alt="Zoka - Home"
          className="h-10 max-h-[7vh] w-auto brightness-0 invert sm:h-12"/>
      </Link>

      <nav aria-label="Main navigation" className="mr-4 flex items-center gap-4 text-white sm:mr-8 lg:mr-16">
        <Link
          to="/orders"
          aria-label="My orders"
          title="My orders"
          className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <IoReceiptOutline className="text-[28px]" aria-hidden="true"/>
        </Link>

        <Link
          to="/cart"
          aria-label={`Open shopping cart with ${cartQuantity} items`}
          className="relative flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          {cartQuantity > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#0344DC]">
              {cartQuantity > 99 ? "99+" : cartQuantity}
            </span>
          )}

          <img
            className="h-7 cursor-pointer"
            src={shoppingCartIcon}
            alt=""
          />
        </Link>

        <Link
          to="/Admin"
          aria-label="Open profile"
          className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <img className="h-9" src={profileIcon} alt=""/>
        </Link>

      </nav>
    </header>
  );
};

export default Header;
