import { useState ,useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil";
import CartItems from "../RecoilAtoms/cart.Atom";
import toast from "react-hot-toast";
import LikedItems from "../RecoilAtoms/liked.Atom";


const LikedCard = (props) => {
  const [Cart, setCart] = useRecoilState(CartItems);
  const item = props.item
  const [ClintX, setClintX] = useState();
  const [ClintY, setClintY] = useState();
  const x = useRef()
  const Handelclint = (e) => {
      setClintX(e.clientX   - x.current.offsetLeft  - 2)
    setClintY( (e.clientY - x.current.offsetTop - 2) )
  }
   const [liked,setliked] = useRecoilState(LikedItems);
  function DeletItemFromLiked(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function deleteLikedItem(id) {
    const deleted =  DeletItemFromLiked(liked,liked.findIndex((item) => item.id === id))
    setliked(deleted);
    localStorage.setItem('liked', JSON.stringify(deleted));
    toast.success('Item removed from your liked list')
  }
const [addedtocart, setaddedtocart] = useState(false);
 function addToCart(item) {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    setaddedtocart(true); 
    localStorage.setItem("cartData", JSON.stringify([...Cart, { ...item , quantity: 1 }]))
   toast.success('Item added to your cart! you may need to remove it from liked list', {
     duration: 4000,
     style: {
       fontFamily: `"Playwrite US Modern", cursive`,
       fontWeight: 'bold',
       textAlign:"center"
     }
    });
  }
  function gotoTop() {
     window.scrollTo(0, 0);
   }
 useEffect(() => {
    gotoTop() 
  },[])
useEffect(() => {
 let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      setaddedtocart(true);
    }
  },[ item.id])
  return (
    <div className="LikedCardMainContent col-12 col-sm-9 mx-auto col-md-6 mx-md-0 col-lg-5 mx-lg-auto col-xl-4 mx-xl-0">
      <div ref={x} className="likedCardBodyContainer" style={{ "--x": `${ClintX}px`, "--y": `${ClintY}px` }} onMouseEnter={Handelclint} onMouseLeave={Handelclint}>
        <div className="likedCardContent mx-auto">
          <div className="likedCardContentImg">
            <Link to={`/Get-Prodact-Details/${item.id}`}>
          <img src={item?.thumbnail} alt="product" />
            </Link>
          </div>
            {
              item.stock === 0 ? <span className="soldout">
                will be available soon
               </span> : " "
            }
          <div className="likedCardContentText">
            <h3>{item.title}</h3>
            <div className="LikedCardActions mx-auto d-flex gap-2">
              <button className="btn btn-outline-danger fw-bold align-self-center" onClick={()=> deleteLikedItem(item.id)} >Remove</button>
              { item.stock === 0 ?  <button className="AddToCart btn btn-secondary" disabled>
                          <span>you cant buy this sorry</span>
                        </button> : addedtocart ? (
                        <button className="AddToCart btn btn-success " disabled>
                          <span>added to cart</span>
                        </button>
                      ) : (
                        <button
                          className="AddToCart btn btn-outline-success fw-bold"
                          onClick={() => addToCart(item)}
                        >
                          <span>Add to Cart</span>
                        </button> )
               }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikedCard;