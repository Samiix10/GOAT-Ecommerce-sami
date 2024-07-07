import "./FiFthSectionHome.css"
import SubPhoneImge from "../../../assits/homeFifthSection/pexels-mobile2.jpg"
import LapTopImge from "../../../assits/homeFifthSection/pexels-fotios-photos-1546329.jpg"
import TabletImge from "../../../assits/homeFifthSection/pexels-tablet.jpg"
import MobileAcces from "../../../assits/homeFifthSection/pexels-phoneAccesores.jpg"
import StoreIcon from "../../../assits/homeFifthSection/undraw_shopping_app_flsj.svg"
import { Link } from "react-router-dom"
const FifthSectionHome = () => { 
  return (
    <div className="Fifth-section-home">
      <div className="Fifth-section-container">
        <div className="container FifthContainer">
          <div className="FifthSectionHeader">
            <div className="FifthHeaderContent">
              <span className="ImgIcon">
                <img src={StoreIcon} alt="store Avatar" />
              </span>
              <h3 className="fifthHeaderText">
                from the store
              </h3>
            </div>
          </div>
          <div className="RowContainer row w-100">
            <div className="FifthColContainer mx-auto mx-md-0 col-10 col-md-6 col-lg-4 col-xl-3">
              <div className="FifthBoxContainer">
                <div className="FifthBoxContent">
                  <div className="FifthBoxImg">
                    <img src={LapTopImge} alt="laptop" />
                  </div>
                  <div className="FifthBoxTextContent">
                    <span className="BoxtextHeader">
                      july 3, 2024
                    </span>
                    <div className="boxTextContainer text-center m-0">
                    <p className="BoxtextText m-0">
                      latest laptops
                    </p>
                    <p className="BoxTextSub">
                      collection
                    </p>
                    <p className="BoxTextPragraph text-center px-4 m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, incidunt iusto!, i...
                    </p>
                    </div>
                    <div className="BoxButtonLink">
                      <span className="BoxLinkTo">
                        <Link to={"/Get-Prodact-of/laptops"}>shop now</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="FifthColContainer mx-auto mx-md-0 col-10 col-md-6 col-lg-4 col-xl-3">
              <div className="FifthBoxContainer">
                <div className="FifthBoxContent">
                  <div className="FifthBoxImg">
                    <img src={TabletImge} alt="laptop" />
                  </div>
                   <div className="FifthBoxTextContent">
                    <span className="BoxtextHeader">
                      july 3, 2024
                    </span>
                    <div className="boxTextContainer text-center m-0">
                    <p className="BoxtextText m-0">
                      latest tablets
                    </p>
                    <p className="BoxTextSub">
                      collection
                    </p>
                    <p className="BoxTextPragraph text-center px-4 m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, incidunt iusto!, i...
                    </p>
                    </div>
                    <div className="BoxButtonLink">
                      <span className="BoxLinkTo">
                        <Link to={"/Get-Prodact-of/tablets"}>shop now</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="FifthColContainer mx-auto mx-md-0 col-10 col-md-6 col-lg-4 col-xl-3">
              <div className="FifthBoxContainer">
                <div className="FifthBoxContent">
                  <div className="FifthBoxImg">
                    <img src={SubPhoneImge} alt="laptop" />
                  </div>
                  <div className="FifthBoxTextContent">
                    <span className="BoxtextHeader">
                      july 3, 2024
                    </span>
                    <div className="boxTextContainer text-center m-0">
                    <p className="BoxtextText m-0">
                      latest phones
                    </p>
                    <p className="BoxTextSub">
                      collection
                    </p>
                    <p className="BoxTextPragraph text-center px-4 m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, incidunt iusto!, i...
                    </p>
                    </div>
                    <div className="BoxButtonLink">
                      <span className="BoxLinkTo">
                        <Link to={"/Get-Prodact-of/smartphones"}>shop now</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="FifthColContainer mx-auto mx-md-0 col-10 col-md-6 col-lg-4 col-xl-3">
              <div className="FifthBoxContainer">
                <div className="FifthBoxContent">
                  <div className="FifthBoxImg">
                    <img src={MobileAcces} alt="laptop" />
                  </div>
                   <div className="FifthBoxTextContent">
                    <span className="BoxtextHeader">
                      july 3, 2024
                    </span>
                    <div className="boxTextContainer text-center m-0">
                    <p className="BoxtextText m-0">
                      latest mobile accessories
                    </p>
                    <p className="BoxTextSub">
                      collection
                    </p>
                    <p className="BoxTextPragraph text-center px-4 m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, incidunt iusto!, i...
                    </p>
                    </div>
                    <div className="BoxButtonLink">
                      <span className="BoxLinkTo">
                        <Link to={"/Get-Prodact-of/mobile-accessories"}>shop now</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Fifth-Home-footer py-5">
          <span>
            <Link to={"/All-prudacts"}>
            <span>see all prudacts</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}


export default FifthSectionHome;