import { useRecoilState, useRecoilValue } from "recoil"
import LikedItems from "../../componants/RecoilAtoms/liked.Atom"

const LikedItemsProvider = () => {
  const [liked,setliked] = useRecoilState(LikedItems);
  function DeletItemFromLiked(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function deleteLikedItem(id) {
    const deleted =  DeletItemFromLiked(
        liked,
        liked.findIndex((item) => item.id === id)
      )
    setliked(
      deleted
    );
    localStorage.setItem('liked',JSON.stringify(deleted));
  }
  return (
    <>
    {
      liked.map((item) => {
        return <div key={item.id}>
          <h1>
          {item.title}
          </h1>
          <button onClick={()=> deleteLikedItem(item.id)}>remove from liked</button>
        </div>
      })
    }
    </>
  )
}

export default LikedItemsProvider;