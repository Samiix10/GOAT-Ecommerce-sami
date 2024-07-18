import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Error from "./pages/Error/Error";
import Nav from "./componants/Nav/Nav";
import {
  AllPrudact,
  SinglePrudact,
  Categories,
  PrudactByCategory,
} from "./pages/PrudactPage/Prudact";
import Cart from "./pages/CartPage/Cart";
import LikedItemsProvider from "./pages/LikedPage/Liked";
import SearchResult from "./pages/SearchPage/Search";
import { Toaster } from "react-hot-toast";
import Register, { Login } from "./pages/logPage/LogINPage";
import LoginState from "./componants/privetRouts/PrivatRouts";
import UserNav from "./componants/Nav/userNav/UserNav";
import User, { UserStatus } from "./componants/RecoilAtoms/User.Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import CheckOut, { CheckOutForOneOrder } from "./pages/chekoutpage/checkout";
import UserPage from "./pages/UserPage/UserPage";
import CartItems from "./componants/RecoilAtoms/cart.Atom";
import LikedItems from "./componants/RecoilAtoms/liked.Atom";
import Footer from "./componants/footerComp/Footer";
function App() {
  let users = [];
  if (localStorage.getItem("Users")) {
    users = JSON.parse(localStorage.getItem("Users"));
  }
  function editeuser(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  const userStatus = useRecoilValue(UserStatus);
  const user = useRecoilValue(User);
  const userCart = useRecoilValue(CartItems);
  const userLiked = useRecoilValue(LikedItems);
  if (userStatus) {
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        ...user,
        UserCart: [...userCart],
        userLiked: [...userLiked],
      })
    );
     const contactuser = users.find(
       (e) => e.username === user.username && e.password === user.password
     );
    localStorage.setItem(
      "Users",
      JSON.stringify(
        editeuser(users, users.indexOf(contactuser), {
          ...user,
          UserCart: [...userCart],
          userLiked: [...userLiked],
        })
      )
    );
  }
  return (
    <>
      <Toaster />
      {userStatus ? <UserNav /> : <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All-prudacts" element={<AllPrudact />} />
        <Route path="/Prudacts-Catigorys" element={<Categories />} />
        <Route path="/Get-Prodact-Details/:id" element={<SinglePrudact />} />

        <Route
          path="/Get-Prodact-of/:catigory"
          element={<PrudactByCategory />}
        />
        <Route element={<LoginState />}>
          <Route path="/checkOut" element={<CheckOut />} />
          <Route
            path="/checkOutForOneNow/:id"
            element={<CheckOutForOneOrder />}
          />
          <Route path="/User-Profile" element={<UserPage />} />
        </Route>
        <Route path="/liked-Prudact" element={<LikedItemsProvider />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/search/:title" element={<SearchResult />} />
        <Route path="/Register-Page" element={<Register />} />
        <Route path="/Login-Page" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
