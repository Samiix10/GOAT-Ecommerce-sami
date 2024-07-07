import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Error from "./pages/Error/Error";
import Nav from "./componants/Nav/Nav";
import {
  AllPrudact,
  SinglePrudact,
  Categories,
  PrudactByCategory,
  SinglePrudactF,
} from "./pages/PrudactPage/Prudact";
import Cart from "./pages/CartPage/Cart";
import LikedItemsProvider from "./pages/LikedPage/Liked";
import SearchResult from "./pages/SearchPage/Search";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All-prudacts" element={<AllPrudact />} />
        <Route path="/Prudacts-Catigorys" element={<Categories />} />
        <Route path="/Get-Prodact-Details/:id" element={<SinglePrudact />} />
        <Route path="/Get-prodact-Detail/:id" element={<SinglePrudactF />} />
        <Route
          path="/Get-Prodact-of/:catigory"
          element={<PrudactByCategory />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/liked-Prudact" element={<LikedItemsProvider />} />
        <Route path="/search/:title" element={<SearchResult />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
