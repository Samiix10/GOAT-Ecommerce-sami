import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainCard from "../../componants/cardMain/MainCard";
const SearchResult = () => {
  const { title } = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${title}`)
.then(res => res.json())
.then(data =>  setdata(data.products));
  }, [title]);
  console.log(data)
  return (
    <div className="SearchSection py-5">
      <div className="SearchSectionContainer container-xxl pt-5">
          <h1 className="text-capitalize pt-4">search results : </h1>
        <div className="SearchRow row w-100 mx-auto">
          { data.length > 0 ?  data.map((item) => (
              <MainCard key={item.id} Item={ item} />
            )) :  <h1 className="col-12 text-center">no found data for {title}</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
