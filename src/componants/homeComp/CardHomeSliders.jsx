import { useEffect, useState } from "react";
import "./CardHome.css";
import { useRecoilState } from "recoil";
import LikedItems from "../RecoilAtoms/liked.Atom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const CardHome = (props) => {
  const item = props.item;
  const [liked, setliked] = useRecoilState(LikedItems);
  function addToLikes(item) {
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
       toast.error('This Item in your liked list!');
    } else {
      setliked( (prevCart) =>  [...prevCart, { ...item }] );
      localStorage.setItem('liked', JSON.stringify([...liked,{...item , liked : true}]));
      console.log(liked)
      toast.success('Product added to liked list!');
    }
  }
  function watchLikedProducts(item) {
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      setLikedIcon(true);
    }
  }
  useEffect(() => {
    watchLikedProducts(item);
  });
  const [LikedIcon, setLikedIcon] = useState(false);
  const handleLike = () => {
    setLikedIcon(true);
  };
  return (
    <div className="Card-Home-Slider">
      <div className="Card-Header">
        <div className="Card-Header-Content">
          <div className="Card-Img text-center">
            <img src={`${item.thumbnail || item.image}`} alt="Product" />
            <span>{item.category}</span>
            <span className="Card-Price">${item.price}</span>
          </div>
          <span
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
      </div>
      <div className="Card-Body">
        <div className="Card-Body-Content">
          <div className="Card-Content-Text">
            <h5 className="Card-Title">{`
              ${(  item.title.split(" ").length) > 4 ?  item.title.split(" ").slice(0,2).join(" ") + "..." :  item.title 
            }`}</h5>
            <p className="Card-Text">
              {item.description.split(" ").slice(0, 12).join(" ")}...
            </p>
          </div>
          <div className="Card-Actions text-center">
            <button className="btn btn-outline-info">
              <Link to={`/Get-Prodact-Details/${item.id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
