import { atom } from "recoil";

let glopalCart = [];
if (
  localStorage.getItem("cartData")
) {
  glopalCart = JSON.parse(
    localStorage.getItem("cartData")  );
}
const CartItems = atom({
  key: "cart",
  default: glopalCart,
});

export default CartItems;
