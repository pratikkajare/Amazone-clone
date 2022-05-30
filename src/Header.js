import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useAuth } from "./fire";
import { useState } from "react";
import { logout } from "./fire";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const currentUser = useAuth();

  // const handleAuthentication = () => {
  //   if (currentUser) {
  //     useAuth.signOut();
  //   }
  // };
  const [loading, setLoading] = useState(false);
  const handlelogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setLoading(false);
  };
  return (
    <div className="header">
      <Link to="/" className="link_underline">
        <div className="logo__wrap">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <span className="header__logoname">.in</span>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/orders" className="link_underline">
          <div className="header__option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>

        <Link to={!currentUser && "/login"} className="link_underline">
          <div className="header__option">
            <span className="header__optionlineone">
              {!user ? "Guest" : user.email.slice(0, -10)}{" "}
            </span>
            <span className="header__optionlinetwo" onClick={handlelogout}>
              {currentUser ? "Log Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/checkout" className="link_underline">
          <div className="header__optionBasket">
            <ShoppingCartIcon fontSize="small" color="primary" />
            <span className="header__optionlinetwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
