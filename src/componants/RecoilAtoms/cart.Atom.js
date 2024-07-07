import { atom } from "recoil";

// let UserData= []
// if (localStorage.getItem("cartData")) {
//   UserData = JSON.parse(localStorage.getItem("cartData"));
// }

const CartItems = atom({
  key: "cart",
  default: [],
})

export default CartItems;