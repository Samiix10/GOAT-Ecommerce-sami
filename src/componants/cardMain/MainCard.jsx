import { useEffect, useState } from "react";
import "./MainCard.css";
import { useRecoilState } from "recoil";
import LikedItems from "../RecoilAtoms/liked.Atom";
import CartItems from "../RecoilAtoms/cart.Atom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  const item = props.Item;
  const [Cart, setCart] = useRecoilState(CartItems);
  const [addedtocart, setaddedtocart] = useState(false);
  const [LikedItemsd, setlikeditems] = useState(false);
  const [liked, setliked] = useRecoilState(LikedItems);
  const [LikedIcon, setLikedIcon] = useState(false);
  const handleLike = () => {
    setLikedIcon(true);
  };
  function addToCart(item) {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    setaddedtocart(true); 
    localStorage.setItem("cartData", JSON.stringify([...Cart, { ...item  , quantity: 1  }]))
    toast.success('Item added to your cart!');
  }
  function addToLikes(item) {
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      toast.error('This Item in your liked list!');
    } else {
      setliked( (prevCart) =>  [...prevCart, { ...item }] );
      localStorage.setItem('liked', JSON.stringify([...liked,{...item , liked : true}]));
      toast.success('Item added to your liked list!');
      setlikeditems(true)
      setLikedIcon(true);
    }
  }
  useEffect(() => {
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      setlikeditems(true);
      setLikedIcon(true);
    }
    let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      setaddedtocart(true);
    }
  },[ item,addedtocart,liked,Cart])
  return (
    <div className="Main-card col-12 col-sm-9 mx-auto col-md-6 mx-md-0 col-lg-5 mx-lg-auto col-xl-4 mx-xl-0 ">
      <div className="MainCardBody">
        <div className="MainCardImgContent">
          <div className="MainCardImg">
            {
              item.thumbnail ? <img src={item.thumbnail} alt={item.title}/>: 
              <img src="https://via.placeholder.com/200" alt="any" />
            }
          </div>
          <div className="MainCardRating">
            <span className="ratingIcons"
            style={{"--width": `${(item.rating * 100) / 5}%`}}
            > ☆☆☆☆☆
            </span>
          </div>
          {
            item.stock === 0 ? <span className="soldOut">
              sold out
            </span> : " "
          }
          <span className="Catigory">{item.category.split("-").join(" ")} </span>
          <span
            className="Like"
            onClick={() => {
              handleLike();
              addToLikes(item);
            }}
          >
            <i
              className={` ${
                LikedIcon ? "fa-solid" : "fa-regular"
              } fa-heart fa-xl`}
              style={{ color: "#0dcaf0" }}
            ></i>
          </span>
        </div>
        <div className="MainCardTextContent">
          <div className="MainCardText">
            <div className="MainCardItemInfo">
              <h3>{item.title}</h3>
              <p>{ item.description}</p>
            <div className="MainCardPlus">
                <span>Dis:{item.discountPercentage }%</span>
                <div className="morInfo">
                  <span>{item.brand}</span>
                </div>
                <span>${item.price}</span>
            </div>
            </div>
            <div className="MainCardButton">
              { item.stock === 0 ?  <button className="AddToCart" disabled>
                          <span>you can't buy this sorry</span>
                        </button>   :   addedtocart ? (
                        <button className="AddToCart" disabled>
                          <span>added to cart</span>
                        </button>
                      ) : (
                        <button
                          className="AddToCart"
                          onClick={() => addToCart(item)}
                        >
                          <span>Add to Cart</span>
                        </button>
              )}
                <button className="More">
                <Link to={`/Get-Prodact-Details/${item.id}`}>View Details</Link>
              </button>
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
  );
};


export default MainCard;