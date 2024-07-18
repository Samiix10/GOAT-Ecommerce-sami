import { Link } from "react-router-dom";
import "./sixthSec.css";

const SixSection = () => {
  return (
    <div className="SixthSecMain">
      <div className="sixthSecContainer container px-0 ">
        <div className="SixthSecTitle text-center pb-3 pt-0">
          <h1 className="text-capitalize m-0">the best stock at the best prices</h1>
        </div>
        <div className="SixSecContentMain row w-100 justify-content-center mx-auto">
          <div className="SixthSecContentMainBox col-12 col-md-9 col-lg-8">
            <div className="SixthContentBox">
              <span className="FirstOverLay">
                <span>specially selected</span>
              </span>
              <span className="Secondoverlay">
                <span>Feel Good Deals</span>
              </span>
              <div className="SixthContent">
                <div className="ContentBoxBody ">
                  <div className="contentBox ">
                    <div className="FirstCard First ">
                      <div className="FirstCardBody">
                        <h3 className="text-capitalize">our unique products</h3>
                        <p className="text-capitalize fs-6 fw-bold">
                          we are a team of passionate designers and developers
                          who believe in creating products that not only look
                          amazing but also have a positive impact on people's
                          lives.
                        </p>
                        <Link to="/All-prudacts">
                          <button className="ReadMoreBtn btn btn-info">Show prudacts</button>
                        </Link>
                      </div>
                    </div>
                    <div className="FirstCard Second ">
                      <div className="FirstCardBody ">
                        <h3 className="text-capitalize">our unique products</h3>
                        <p className="text-capitalize fs-6  fw-bold">
                          we are a team of passionate designers and developers
                          who believe in creating products that not only look
                          amazing but also have a positive impact on people's
                          lives.
                        </p>
                        <Link to="/All-prudacts">
                          <button className="ReadMoreBtn btn btn-info">Show prudacts</button>
                        </Link>
                      </div>
                    </div>
                    <div className="FirstCard Third d-none d-md-block ">
                       <div className="FirstCardBody">
                        <h3 className="text-capitalize">our unique products</h3>
                        <p className="text-capitalize fs-6 fw-bold">
                          we are a team of passionate designers and developers
                          who believe in creating products that not only look
                          amazing but also have a positive impact on people's
                          lives.
                        </p>
                        <Link to="/All-prudacts">
                          <button className="ReadMoreBtn btn btn-info">Show prudacts</button>
                        </Link>
                      </div>
                    </div>
                    <div className="FirstCard Fourth d-none d-md-block">
                     <div className="FirstCardBody">
                        <h3 className="text-capitalize">our unique products</h3>
                        <p className="text-capitalize fs-6 fw-bold">
                          we are a team of passionate designers and developers
                          who believe in creating products that not only look
                          amazing but also have a positive impact on people's
                          lives.
                        </p>
                        <Link to="/All-prudacts">
                          <button className="ReadMoreBtn btn btn-info">Show prudacts</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
