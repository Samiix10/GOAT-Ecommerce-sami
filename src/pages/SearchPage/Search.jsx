import { useParams } from "react-router-dom";

const SearchResult = () => {
  const {title} = useParams()
  return (
    <h1>search {title}</h1>
  )
}

export default SearchResult;