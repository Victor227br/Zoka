import { useContext } from "react";
import { Link } from "react-router-dom";
import shoppingCartIcon from "../assets/icon/icon_shoppingCart-white.png";
import profileIcon from "../assets/icon/icon_profile.png";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const {cartQuantity} = useContext(CartContext);

  return (
    <header className="flex h-[9vh] items-center justify-between border-white/10 bg-[#0344DC]">
      <Link
        to="/"
        className="ml-6 text-[clamp(1.5rem,1.5vw,2.3rem)] text-white lg:ml-16">
        Zoka
      </Link>

      <div className="mr-8 flex w-24 items-center justify-around lg:mr-16">
        <Link
          to="/cart"
          aria-label={`Open shopping cart with ${cartQuantity} items`}
          className="relative flex cursor-pointer items-center justify-center">
          {cartQuantity > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#0344DC]">
              {cartQuantity > 99 ? "99+" : cartQuantity}
            </span>
          )}

          <img
            className="h-7 cursor-pointer"
            src={shoppingCartIcon}
          />
        </Link>

        <div className="cursor-pointer">
          <img className="h-9" src={profileIcon} alt="Profile"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
