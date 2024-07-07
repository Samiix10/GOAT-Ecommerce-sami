import { useParams } from "react-router-dom";
import "./Prudact.css";
import { useRecoilState } from "recoil";
import LikedItems from "../../componants/RecoilAtoms/liked.Atom";
import { useEffect, useState } from "react";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";

const AllPrudact = () => {
  return (
    <div>
      <h1>All Products</h1>
      {/* Add products here */}
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
  }
  function addToLikes(item) {
    setliked((prevCart) => [...prevCart, { ...item }]);
    setlikeditems(true);
    localStorage.setItem("liked", JSON.stringify([...liked, { ...item }]));
  }
  const [rev, setrev] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => { setitem(data); setitemImg(data.images)});
      fetch("https://dummyjson.com/users?limit=3&select=image")
      .then((res) => res.json())
      .then((data) => setuserimg(data.users));
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      setlikeditems(true);
    }
    setrev((item.rating * 100) / 5);
    let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      setaddedtocart(true);
    }
  }, []);
  console.log(item)
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
                      {
                        imgItem ? <img
                        src={`${
                          imgItem[0]
                        }`}
                        alt={`${item.title}`}
                      />  :<img
                          src="https://via.placeholder.com/200"
                          alt="review"
                        />
                      }
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
                    <span className="star" style={{ "--width": `${rev}%` }}>
                      ☆☆☆☆☆
                    </span>
                  </div>
                  <div className="productBoxContentText">
                    <h1>{`${item.title}`}</h1>
                    <p>{`${item.description}`}</p>
                    <span> {`$${item.price}`}</span>
                    <div className="productAction ">
                      <button className="Order">
                        <span>Buy Now</span>
                      </button>
                      {addedtocart ? (
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
                  className="RevewCollContainer col-11 col-md-6 col-xl-4 p-0"
                >
                  <div className="revewBoxContainer">
                    <div className="revewContainer">
                      <div className="rowRevew row w-100 m-0">
                        <div className="revewImgCol col-11 col-lg-4 mx-auto mx-lg-0">
                          <div className="revewImg">
                            {
                              userImg  ? 
                                <img src={userImg[i].image} alt="review" />
                               : 
                                <img
                                  src="https://via.placeholder.com/150"
                                  alt="review"
                                />
                              
                            }
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
const SinglePrudactF = () => {
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
  }
  function addToLikes(item) {
    setliked((prevCart) => [...prevCart, { ...item }]);
    setlikeditems(true);
    localStorage.setItem("liked", JSON.stringify([...liked, { ...item }]));
  }
  const [rev, setrev] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => { setitem(data); setitemImg(data.image); setrev((Number(item?.rating?.rate) * 100) / 5)});
      fetch("https://dummyjson.com/users?limit=3&select=image")
      .then((res) => res.json())
      .then((data) => setuserimg(data.users));
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      setlikeditems(true);
    }
    let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      setaddedtocart(true);
    }
  }, [item?.rating?.rate]);
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
                      {
                        imgItem ? <img
                        src={`${
                          imgItem
                        }`}
                        alt={`${item.title}`}
                      />  :<img
                          src="https://via.placeholder.com/200"
                          alt="review"
                        />
                      }
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
                    <span className="star" style={{ "--width": `${rev}%` }}>
                      ☆☆☆☆☆
                    </span>
                  </div>
                  <div className="productBoxContentText">
                    <h1>{`${item.title}`}</h1>
                    <p>{`${item.description}`}</p>
                    <span> {`$${item.price}`}</span>
                    <div className="productAction ">
                      <button className="Order">
                        <span>Buy Now</span>
                      </button>
                      {addedtocart ? (
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
            {item.reviews ? item.reviews?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="RevewCollContainer col-11 col-md-6 col-xl-4 p-0"
                >
                  <div className="revewBoxContainer">
                    <div className="revewContainer">
                      <div className="rowRevew row w-100 m-0">
                        <div className="revewImgCol col-11 col-lg-4 mx-auto mx-lg-0">
                          <div className="revewImg">
                            {
                              userImg  ? 
                                <img src={userImg[i].image} alt="review" />
                                : 
                                <img
                                  src="https://via.placeholder.com/150"
                                  alt="review"
                                />
                              
                            }
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
            }): <div className="revcontainer text-center">no reviews yet</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div>
      <h1>Categorys</h1>
      {/* Add categorys here */}
    </div>
  );
};

const PrudactByCategory = () => {
  const { catigory } = useParams();
  return (
    <div>
      <h1>Products by Category {catigory}</h1>
      {/* Add products by category here */}
    </div>
  );
};

export { AllPrudact, SinglePrudact, Categories, PrudactByCategory ,SinglePrudactF };
