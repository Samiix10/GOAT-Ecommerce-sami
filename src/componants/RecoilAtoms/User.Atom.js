import { atom } from "recoil";

let loggedUser = {}
let loginStat 
if (localStorage.getItem("loggedUser")) {
  loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
}
if (localStorage.getItem("loginstate")){
  loginStat = JSON.parse(localStorage.getItem("loginstate"));
}
const User = atom({
  key: "user",
  default: loggedUser,
});

export const UserStatus = atom({
  key: "userStatus",
  default: loginStat,
});

export default User;