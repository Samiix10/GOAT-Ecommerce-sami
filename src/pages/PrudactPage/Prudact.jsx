import { useParams } from "react-router-dom";
import "./Prudact.css";
import { useRecoilState } from "recoil";
import LikedItems from "../../componants/RecoilAtoms/liked.Atom";
import { useEffect, useState } from "react";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";
import MainCard from "../../componants/cardMain/MainCard";
import Spinner from 'react-bootstrap/Spinner';
import toast from "react-hot-toast";
import SLiderSIngrlProduct from "../../componants/singleproductslide/slideSingleImge";

const AllPrudact = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products);
      });
  }, []);
  return (
    <div className="All-product-section py-5">
      <div className="all-product-container container-xxl py-5">
        <div className="row w-100 pt-3 mx-auto">
          {data?.map((item) => (
            <MainCard key={item.id} Item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SinglePrudact = () => {
  const { id } = useParams();
  const [userImg, setuserimg] = useState();
  const [liked, setliked] = useRecoilState(LikedItems);
  const [LikedItemsd, setlikeditems] = useState(false);
  const [item, setitem] = useState([]);
  const [imgItem, setitemImg] = useState([]);
  const [addedtocart, setaddedtocart] = useState(false);
  const [Cart, setCart] = useRecoilState(CartItems);
  function addToCart(item) {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    setaddedtocart(true);
    toast.success("Item added to your cart!", {
      position: "top-left",
    });
    localStorage.setItem(
      "cartData",
      JSON.stringify([...Cart, { ...item, quantity: 1 }])
    );
  }
  function addToLikes(item) {
    setliked((prevCart) => [...prevCart, { ...item }]);
    setlikeditems(true);
    toast.success("Item added to your liked list!");
    localStorage.setItem("liked", JSON.stringify([...liked, { ...item }]));
  }
  function gotoTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setitem(data);
        setitemImg(data.images);
      });
    fetch("https://dummyjson.com/users?limit=3&select=image")
      .then((res) => res.json())
      .then((data) => setuserimg(data.users));
    let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      setaddedtocart(true);
    }
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      setlikeditems(true);
    }
  }, [id, liked, Cart, item.id]);
  useEffect(() => {
    gotoTop();
  }, []);
  return (
    <div className="ProductDetailSection">
      <div className="ProductDetailContainer container-fluid">
        <div className="container productContainer p-0">
          <div className="productRowContainer row w-100 m-0">
            <div className="productCollContainer col-11 col-md-6 col-lg-8 mx-auto mx-md-0 p-0">
              <div className="prudactBoxContentContainer">
                <div className="productBoxContainerImg">
                  <div className="productBoxContentImg">
                    <div className="ImgPrudact">
                      <span className="instoke d-none d-lg-block">
                        in stoke : {item.stock}
                      </span>
                      <span className="Policy">{item.returnPolicy}</span>
                      {imgItem ? (
                        <SLiderSIngrlProduct Imges={imgItem} />
                      ) : (
                        <img
                          src="https://via.placeholder.com/200"
                          alt="review"
                        />
                      )}
                      {/* <img
                        src={`${
                          imgItem[0]
                        }`}
                        alt={`${item.title}`}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="productCollContainer col-11 col-md-6 col-lg-4 mx-auto mx-md-0 p-0">
              <div className="prudactBoxContentContainer">
                <div className="productBoxContainerText">
                  <div className="OverAllRating mb-3">
                    <span>Rating</span>
                    <span
                      className="star"
                      style={{ "--width": `${(item.rating * 100) / 5}%` }}
                    >
                      ☆☆☆☆☆
                    </span>
                  </div>
                  <span className="instoke d-lg-none text-uppercase fs-2 fw-semibold ">
                    in stoke : {item.stock}
                  </span>
                  <div className="productBoxContentText">
                    <h1>{`${item.title}`}</h1>
                    <p>{`${item.description}`}</p>
                    <div className="moreIn">
                      <span> Dis:{item.discountPercentage}%</span>
                      <span>{item.brand}</span>
                      <span> {`$${item.price}`}</span>
                    </div>
                    <div className="WarantyInfo">
                      <span>{item.warrantyInformation}</span>
                    </div>
                    <div className="productAction ">
                      {item.stock === 0 ? (
                        <button className="AddToCart" disabled>
                          <span>you can't buy it sorry</span>
                        </button>
                      ) : (
                        <button className="Order">
                          <span>Buy Now</span>
                        </button>
                      )}
                      {item.stock === 0 ? (
                        <button className="AddToCart" disabled>
                          <span>you can add it to liked list</span>
                        </button>
                      ) : addedtocart ? (
                        <button className="AddToCart" disabled>
                          <span>this item in your cart</span>
                        </button>
                      ) : (
                        <button
                          className="AddToCart"
                          onClick={() => addToCart(item)}
                        >
                          <span>Add to Cart</span>
                        </button>
                      )}

                      {LikedItemsd ? (
                        <button className={`Favorite `} disabled>
                          <span>item in your Favorite list</span>
                        </button>
                      ) : (
                        <button
                          className={`Favorite `}
                          onClick={() => addToLikes(item)}
                        >
                          <span>add to your Favorite list</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container prudactRevewContainer">
          <div className="row prudactRevewRow w-100 m-0">
            {/* <div className="RevewCollContainer col-11 col-md-6 col-xl-4  p-0">
              <div className="revewBoxContainer">
                <div className="revewContainer">
                  <div className="rowRevew row w-100 m-0">
                    <div className="revewImgCol col-11 col-lg-4 mx-auto mx-lg-0">
                      <div className="revewImg">
                        <img
                          src="https://via.placeholder.com/150"
                          alt="review"
                        />
                      </div>
                    </div>
                    <div className="revewTextCol col-11 col-lg-8 mx-auto mx-lg-0">
                      <div className="revewText">
                        <span className="Name">Reviewer Name</span>
                        <span className="Date">1/10/2020</span>
                        <p className="Comment">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Corrupti, beatae.
                        </p>
                        <div className="rating">
                        <span>Rating</span>
                          <span className="star" style={{"--width": `50%`}}>
                            ☆☆☆☆☆
                          </span>
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {item.reviews?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="RevewCollContainer col-11 col-md-6 col-xl-4 p-0 mx-auto mx-lg-0"
                >
                  <div className="revewBoxContainer">
                    <div className="revewContainer">
                      <div className="rowRevew row w-100 m-0">
                        <div className="revewImgCol col-11 col-lg-4 mx-auto mx-lg-0">
                          <div className="revewImg">
                            {userImg ? (
                              <img src={userImg[i].image} alt="review" />
                            ) : (
                              <img
                                src="https://via.placeholder.com/150"
                                alt="review"
                              />
                            )}
                            {/* <img src={userImg[i].image} alt="review" /> */}
                          </div>
                        </div>
                        <div className="revewTextCol col-11 col-lg-8 mx-auto mx-lg-0">
                          <div className="revewText">
                            <span className="Name">{e.reviewerName}</span>
                            <span className="Date">{e.date}</span>
                            <p className="Comment">{e.comment}</p>
                            <div className="rating">
                              <span>Rating</span>
                              <span
                                className="star"
                                style={{
                                  "--width": `${(e.rating * 100) / 5}%`,
                                }}
                              >
                                ☆☆☆☆☆
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const [currentTab, setCurrentTab] = useState();
  const [Catigores, setCatigores] = useState([]);
  const [products, setProducts] = useState([]);
  const [dontshow, setshow] = useState(false);
  const [spinner,setspinner] = useState(false);
  const TabValue = (e) => {
    const target = e.currentTarget.getAttribute("data-go");
    setCurrentTab(target);
    setshow(false);
  };
  function totop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => { setCatigores(data) });
    
  }, []);
  useEffect(() => {
    setspinner(true);
    fetch(`https://dummyjson.com/products/category/${currentTab}`)
      .then((res) => res.json())
      .then((data) => {setProducts(data.products); });
    setTimeout(() => {
      setspinner(false)
      setshow(true);
    }, 1000);
  }, [currentTab,dontshow]);
  return (
    <div className="CategoriesSectionMain py-5">
      <div className="CategoriesSectionContainer pt-5">
        <div
          className={`${
            currentTab ? " container-fluid" : " container "
          }   CatigoriesContent pt-5`}
        >
          <div
            className={`d-flex flex-column ${
              currentTab ? "align-items-start" : " justify-content-center"
            }   flex-md-row pt-md-5 w-100 mx-auto`}
          >
            <div
              className={`nav ${
                currentTab ? "flex-md-column me-md-3" : "  "
              } gap-3 flex-wrap nav-pills   position-sticky top-0 `}
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {
                Catigores?.map((item, i) => {
                return (
                  <button
                    key={i}
                    className="btn flex-grow-1 btn-info"
                    id="v-pills-home-tab"
                    data-go={`${item}`}
                    data-bs-target="#show"
                    type="button"
                    role="tab"
                    
                    onClick={(e) => {
                      TabValue(e);
                      totop();
                    }}
                  >
                    {item.split("-").join(" ")}
                  </button>
                );
              })}
            </div>
            <div
              className={`flex-grow-1 w-100 ${currentTab ? " " : "d-none  "} `}
              id="v-pills-tabContent"
            >
              <div
                className={`fade  ${
                  dontshow ? "show " : " flex-md-row flex-column "
                } w-100 row mx-auto`}
                id="show"
                // role="tabpanel"
                // aria-labelledby="v-pills-home-tab"
                // tabIndex="0"
              >
                {spinner ? ( <>
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="info" />
                </> 
                ) :
                  products.map((e) => (
                  <MainCard key={e.id} Item={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrudactByCategory = () => {
  const { catigory } = useParams();
  const [data, setdata] = useState([]);
  function gotoTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${catigory}`)
      .then((res) => res.json())
      .then((data) => setdata(data.products));
    gotoTop();
  }, [catigory]);
  return (
    <div className="CatigoresSection py-5 ">
      <div className="CategoresContainer py-5 px-0 container-xxl ">
        <div className="row w-100 py-5 mx-auto ">
          {data.map((item) => (
            <MainCard key={item.id} Item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { AllPrudact, SinglePrudact, Categories, PrudactByCategory };
