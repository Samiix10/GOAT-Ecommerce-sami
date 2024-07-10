import { useRecoilState } from "recoil";
import "./Home.css";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";
import LikedItems from "../../componants/RecoilAtoms/liked.Atom";
import HomeSlider from "../../componants/homeComp/HomeSLider";
import HomeSecoundSection from "../../componants/homeComp/secoundComp/SecoundSec";
import ThirdHome from "../../componants/homeComp/thirdHome/ThirdHome";
import FourthHomeSec from "../../componants/homeComp/fourthSec/FourthHomesec";
import FifthSectionHome from "../../componants/homeComp/fifthSection/FiFthsection";
import { useEffect } from "react";

const Home = () => {
  const [Cart, setCart] = useRecoilState(CartItems);
  const [liked, setliked] = useRecoilState(LikedItems)
  function aditAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function DeletItemFromCart(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function addToCart(item) {
    let productsids = Cart.map((product) => {
      return product.id;
    });
    if (productsids.includes(item.id)) {
      let currentIndex = productsids.indexOf(item.id);
      setCart(
        aditAtIndex(Cart, currentIndex, {
          ...item,
          quantity: Cart[currentIndex].quantity + 1,
        })
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      
    }
  }
  function addToLikes(item) {
    let likedProductsids = liked.map((product) => {
      return product.id;
    });
    if (likedProductsids.includes(item.id)) {
      alert('liked product')
    } else {
      setliked((prevCart) => [...prevCart, { ...item}]);
    }
  }
  function deleteItem(id) {
    setCart(DeletItemFromCart(Cart, Cart.findIndex((item) => item.id === id)));
  }
   function gotoTop() {
     window.scrollTo(0, 0);
   }
  useEffect(() => {
     gotoTop();
  },[])
  return (
    <section className="home ">
      <div className="container-fluid">
        <div className="ContainerBackGround">
        <div className="HomeHeader text-center ">
          <span>
            clothes set
          </span>
          <h1>
            refresh your look
          </h1>
        </div>
        <div className="HomeContent">
          <HomeSlider/>
        </div>
        </div>
        <div className="secound-home">
          <HomeSecoundSection/>
        </div>
        <div className="thirdHomeSection">
          <ThirdHome/>
        </div>
        <div className="FourthHomeMain pt-5">
          <FourthHomeSec/>
        </div>
        <div className="fifthHomeMain">
          <FifthSectionHome/>
        </div>
      </div>
    </section>
  );
};

export default Home;
