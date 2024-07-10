import { Link } from "react-router-dom";

const CategoriesList = (props) => {
  const Data = props.Data;
  const num1 = props.nm1;
  const num2 = props.nm2;
  const close = props.close;

  return (
    <>
      {Data.slice(num1 || 0, num2 || 24).map((category, index) => {
        return (
          <li key={index}>
            <Link
              className={`dropdown-item text-capitalize`}
              to={`/Get-Prodact-of/${category}`}
              data-path={`/Get-Prodact-of/${category}`}
              onClick={close}
            >
              {category.split("-").join(" ")}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default CategoriesList;
