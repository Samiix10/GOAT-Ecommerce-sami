import { atom } from "recoil";
let likedUserData= [ ]
if (localStorage.getItem("liked")) {
  likedUserData = JSON.parse(localStorage.getItem("liked"));
}
const LikedItems = atom({
  key: "liked",
  default: likedUserData
});

export default LikedItems;