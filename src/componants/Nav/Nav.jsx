import { Link } from "react-router-dom";
import "./Nav.css";
import { useRecoilValue } from "recoil";
import CartItems from "../RecoilAtoms/cart.Atom";
import { useEffect, useRef, useState } from "react";
import LikedItems from "../RecoilAtoms/liked.Atom";
import logo from "../../assits/NavAssits/logoo.png";
import { NavItems1, NavItems2 } from "./NavItemsComp/navItems";
import NavOffCan from "./NavItemsComp/offCanNav";
import AboveNav from "./abovenav";
const Nav = () => {
  const Cart = useRecoilValue(CartItems);
  const liked = useRecoilValue(LikedItems);
  const [likedquntity, setlikedquntity] = useState();
  const [cartquntity, setcartquntity] = useState();
  
  useEffect(() => {

    setcartquntity(Cart.length);
    setlikedquntity(liked.length);
  }, [Cart, liked]);
  const searchInp = useRef();
  const [inputValue, setInputvalue] = useState();
  const [hight, sethight] = useState();
  const handleScroll = () => {
    sethight(window.scrollY);
  };
    window.addEventListener("scroll", handleScroll);
    return (
    <>
      <AboveNav/>
      <nav className={`navbar navbar-expand-lg ${hight >200 ? "stiky" : " "} `}>
        <div className="container">
          <div className="Logo">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="WebLogo" />
            </Link>
          </div>
          <div
            className="collapse navbar-collapse Sub"
            id="navbarSupportedContent"
          >
            <NavItems1 />
          </div>
          <div
            className="collapse navbar-collapse Main"
            id="navbarSupportedContent"
          >
            <NavItems2 />
          </div>
          <div className="d-none  d-md-flex">
            <input
              ref={searchInp}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={() => {
                setInputvalue(searchInp.current.value);
              }}
            />
            <Link
              to={`/search/${inputValue}`}
              className="btn btn-outline-info"
            >
              Search
            </Link>
          </div>
          <div className="Info-Actions d-none d-lg-block">
            <ul className="d-flex gap-3 m-0 p-2">
              <li className="nav-item d-flex">
                <span className="CartText">
                  <Link className="nav-link" to="/Cart">
                    Cart
                  </Link>
                </span>
                <span className="CartQuntity">{cartquntity}</span>
              </li>
              <li className="nav-item d-flex">
                <span className="CartText">
                <Link
                  className="nav-link 
              "
                  to="/liked-Prudact"
                >
                  liked
                </Link>
                  </span>
                  <span className="CartQuntity">{likedquntity}</span>
              </li>
              <li className="dropdown">
                <span className="d-flex align-items-center h-100 user-Menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                    <i className="fa-solid fa-user fa-2xl" style={{color: "#ffffff"}}></i>
                </span>
                <ul className="dropdown-menu user-Drop-Menu" id="Drop">
                  <li className="DropUserInfo"><Link to={"/"}>login</Link></li>
                  <li className="DropUserInfo"><Link to={"/"}>register</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <NavOffCan/>
        </div>
      </nav>
    </>
  );
};

export default Nav;
