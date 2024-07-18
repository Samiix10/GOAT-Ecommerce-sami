import { atom } from "recoil";

let glopalCart = [];
if (
  localStorage.getItem("cartData") &&
  localStorage.getItem("loggedUser").UserCart
) {
  glopalCart = JSON.parse([
    ...localStorage.getItem("cartData"),
    ...localStorage.getItem("loggedUser").UserCart,
  ]);
}else if ( localStorage.getItem("cartData") ||
  localStorage.getItem("loggedUser").UserCart) {
  glopalCart = JSON.parse(localStorage.getItem("cartData")) || JSON.parse(localStorage.getItem("loggedUser").UserCart);
  }

const CartItems = atom({
  key: "cart",
  default: glopalCart,
});

export default CartItems;
