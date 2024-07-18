import { useRecoilState, useRecoilValue } from "recoil";
import LikedItems from "../../componants/RecoilAtoms/liked.Atom";
import "./LikedPage.css";
import LikedCard from "../../componants/LikedCard/LikedCard";
const LikedItemsProvider = () => {
  const [liked, setliked] = useRecoilState(LikedItems);

  return (
    <>
      <div className="LikedMainSection">
        <div className="LikedContent pt-5">
          <div className="likedContainer container-xxl">
            <div className="RowLikedContainer row w-100 mx-auto">
              {liked.length > 0 ? (
                liked.map((item) => {
                  return <LikedCard key={item.id} item={item} />;
                })
              ) : (
                <h3 className="text-uppercase text-center">no items in your liked list</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedItemsProvider;
