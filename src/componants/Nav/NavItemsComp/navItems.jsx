import { Link } from "react-router-dom"
import CategoriesList from "../CatigoryComp"
import NavPrudactData from "../NavIPrudactCopm"
import { useEffect, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import Catigores from "../../RecoilAtoms/catigory.Atom"

const NavItems1 = () => {
  return (
    <>
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" data-path="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  shop
                </span>
                <div className="dropdown-menu main-menu">
                  <div className="DropMenuItemsContainer">
                    <ul className="h-100">
                      <li>
                        <Link className="dropdown-item text-capitalize" to="/All-prudacts">
                          all prudacts
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-capitalize"
                          to="/Prudacts-Catigorys"
                        >
                           all Categories page
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
    </>
  )
}

const NavItems2 = () => {
  const [categories, setcategories] = useState([]);
  const setcategory = useSetRecoilState(Catigores)
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => { setcategories(data); setcategory(data) });
  },[setcategory])
  return (
    <>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" data-path="/">
                  Home
                </Link>
        </li>
        
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  shop
                </span>
                <div className="dropdown-menu main-menu">
                  <div className="DropMenuItemsContainer">
                    <ul className="h-100">
                      <li>
                        <Link className="dropdown-item text-capitalize" to="/All-prudacts">
                          all prudacts
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-capitalize"
                          to="/Prudacts-Catigorys"
                        >
                          all Categories page
                        </Link>
                      </li>
                      <CategoriesList Data={categories}  nm2={2} />
                      <CategoriesList Data={categories} nm1={2} nm2={6} />
                      <CategoriesList Data={categories} nm1={6} nm2={13} />
                    </ul>
                  </div>
                  <div className="DropMenuItemsContainer">
                    <ul>
                      <CategoriesList Data={categories} nm1={13} nm2={17} />
                    </ul>
                    <NavPrudactData nm1={10} />
                  </div>
                  <div className="DropMenuItemsContainer">
                    <ul>
                      <CategoriesList Data={categories} nm1={17} nm2={21} />
                    </ul>
                    <NavPrudactData nm1={3} />
                  </div>
                  <div className="DropMenuItemsContainer">
                    <ul>
                      <CategoriesList Data={categories} nm1={21} nm2={24} />
                    </ul>
                    <NavPrudactData nm1={1} />
                  </div>
                  
                </div>
              </li>
            </ul>
    </>
  )
}

export { NavItems1, NavItems2 }