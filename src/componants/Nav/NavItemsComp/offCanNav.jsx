import { Link } from "react-router-dom";
import CategoriesList from "../CatigoryComp";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import LikedItems from "../../RecoilAtoms/liked.Atom";
import CartItems from "../../RecoilAtoms/cart.Atom";
import { Offcanvas } from "react-bootstrap";
import Catigores from "../../RecoilAtoms/catigory.Atom";

const NavOffCan = () => {
  const Cart = useRecoilValue(CartItems);
  const liked = useRecoilValue(LikedItems);
  const [likedquntity, setlikedquntity] = useState();
  const [cartquntity, setcartquntity] = useState();
  const Catigory = useRecoilValue(Catigores)
  useEffect(() => {
    setcartquntity(Cart.length);
    setlikedquntity(liked.length);
  }, [Cart, liked]);
  const searchInp = useRef();
  const [inputValue, setInputvalue] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="btn btn-outline-danger d-lg-none"
        type="button"
        onClick={handleShow}
      >
        <span>
          <i
            className="fa-solid fa-bars-staggered fa-lg"
            style={{ color: "#df1a0b" }}
          ></i>
        </span>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li className="nav-item Offcanvac">
              <Link className="nav-link Offcanvac" to="/" data-path="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown Offcanvac">
              <span
                className="nav-link Offcanvac dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                shop
              </span>
              <div className="dropdown-menu main-menu Offcanvac">
                <div className="DropMenuItemsContainer Offcanvac">
                  <ul className="h-100">
                    <li>
                      <Link
                        className="dropdown-item Offcanvac"
                        to="/All-prudacts"
                      >
                        all prudacts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item Offcanvac"
                        to="/Prudacts-Catigorys"
                      >
                        Categories
                      </Link>
                    </li>
                    <CategoriesList Data={Catigory} />
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item Cart Offcanvac">
              <Link className="nav-link Offcanvac " to="/Cart">
                Cart
              </Link>
              <span className="CartQuntity Offcanvac">{cartquntity}</span>
            </li>
            <li className="nav-item  Liked Offcanvac">
              <Link
                className="nav-link  Offcanvac 
                    "
                to="/liked-Prudact"
              >
                liked
              </Link>
              <span className="CartQuntity Offcanvac">{likedquntity}</span>
            </li>
            <li className="nav-item UserItem dropdown Offcanvac">
                <span className="d-flex nav-link Offcanvac align-items-center justify-content-center user-Menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                    <i className="fa-solid fa-user fa-2xl" style={{color: "#000"}}></i>
                </span>
                <ul className="dropdown-menu Offcanvac user-Drop-Menu" id="Drop">
                  <li className="DropUserInfo"><Link to={"/"}>login</Link></li>
                  <li className="DropUserInfo"><Link to={"/"}>register</Link></li>
                </ul>
              </li>
          </ul>
          <div className="d-flex d-md-none">
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
              className="btn btn-outline-info "
            >
              Search
            </Link>
          </div>
        </Offcanvas.Body>
        <Offcanvas.Header >
            <div className="socialIcons2">
              <div className="socialIcons">
                <span className="PhoneContact">
                  {" "}
                  <span className="socialItem ">
                    <i
                      className="fa-brands fa-whatsapp fa-lg me-1"
                      style={{ color: "#ffffff" }}
                    ></i>
                    for Contact :
                  </span>{" "}
                  +20 1151687078
                </span>
              </div>
            </div>
          
        </Offcanvas.Header>
      </Offcanvas>
    </>
  );
};

export default NavOffCan;
