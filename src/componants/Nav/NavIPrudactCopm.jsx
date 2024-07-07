import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavPrudactData = (props) => {
  const num1 = props.nm1
  const num2 = num1 + 1
  const [NavData, setNavData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data => setNavData(data.products)));
  },[])
  return (
    <>
      {
        NavData.slice(num1,num2).map((e) => {
            return <div  key={e.id} className={`nav-Item-card`}>
            <div className="Nav-item-cart-image">
              <img src={e.thumbnail} alt={e.title}/>
            </div>
            <div className="nav-item-cart-info">
                <h5>{e.title}</h5>
                <p>{e.description.split(" ").slice(0,5).join(" ")}...</p>
                <span className="Cart-Price">${(e.price).toFixed(2)}</span>
                <span className="Cart-Menu-Link">
                  <Link to={`/Get-Prodact-Details/${e.id}`}>
                    more details
                  </Link>
                </span>
            </div>
          </div>
        })
    }
    </>
  )
}


export default NavPrudactData;